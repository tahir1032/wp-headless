"use client";

import { useEffect } from "react";

const VENDOR_SCRIPTS = [
  "/vendor/gsap/gsap.min.js",
  "/vendor/gsap/ScrollTrigger.min.js",
  "/vendor/gsap/MotionPathPlugin.min.js",
  "/vendor/gsap/ScrollSmoother.js",
  "/vendor/SplitText/SplitText.min.js",
  "/vendor/wow/wow.js",
  "/vendor/three/three.js",
  "/vendor/hovereffect/hover-effect.js",
  "/js/animation.js",
  "/js/custom.js",
];

/**
 * Loads the legacy (non-module) template scripts strictly in order, and only
 * after React has finished hydrating (useEffect runs post-hydration).
 *
 * These scripts depend on load order (GSAP core before its plugins, plugins
 * before animation.js) and directly mutate DOM nodes that React also
 * manages (nav/menu classes, etc.). Rendering them as plain <script> tags in
 * the server HTML let them run *during* the browser's initial parse - before
 * or during React's hydration pass - which could produce a DOM React didn't
 * expect and throw a hydration error, breaking the page. Loading them here
 * instead guarantees they only ever touch the DOM after hydration has
 * already succeeded, which is always safe.
 */
export default function VendorScripts() {
  useEffect(() => {
    let cancelled = false;

    async function loadInOrder() {
      for (const src of VENDOR_SCRIPTS) {
        if (cancelled) return;
        if (document.querySelector(`script[src="${src}"]`)) {
          continue;
        }

        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => resolve();
          document.body.appendChild(script);
        });
      }

      if (cancelled) return;

      // animation.js/custom.js normally self-invoke via a
      // document.addEventListener("DOMContentLoaded", ...) listener, but that
      // event already fired long before this script was injected, so it
      // never runs on its own. Both files expose their constructor globally
      // (window.amaraGsap / window.amara) specifically so we can call
      // .init() ourselves here instead.
      const win = window as unknown as {
        amaraGsap?: () => { init: () => void };
        amara?: () => { init: () => void };
        __amaraInitialized?: boolean;
      };

      if (!win.__amaraInitialized) {
        win.__amaraInitialized = true;
        win.amaraGsap?.().init();
        win.amara?.().init();
      }
    }

    loadInOrder();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
