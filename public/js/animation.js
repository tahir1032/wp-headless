const amaraGsap = function () {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    MotionPathPlugin,
    SplitText,
  );
  let smoother;

  if (!smoother) {
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  }

  let circleSliderResizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(circleSliderResizeTimer);
    circleSliderResizeTimer = setTimeout(() => {
      if (
        typeof initCircleSlider === "function" &&
        document.getElementById("animatedCircle")
      ) {
        initCircleSlider();
      }
    }, 250);
  });

  const headingAnimation = () => {
    const triggers = [];
    const headings = document.querySelectorAll(
      ".pxl-heading-scroll-effect .heading-text",
    );

    if (!headings.length) return;

    headings.forEach((heading) => {
      const split = new SplitText(heading, { type: "words" });

      split.words.forEach((word) => {
        const tween = gsap.to(word, {
          backgroundPositionX: "0%",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: word,
            start: "top 60%",
            end: "bottom center",
            scrub: 1,
          },
        });

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  };

  document.querySelectorAll(".group").forEach((item) => {
    const img = item.querySelector(".reveal-img");
    if (img) {
      item.addEventListener("mouseenter", () => {
        gsap.to(img, {
          opacity: 1,
          x: 50,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(img, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }
  });

  const initScrollImgAnimation = () => {
    const ITEM_COUNT = 20;
    const imageItems = Array.from(
      { length: 11 },
      (_, i) => `/images/plugin-logos/${i + 1}.webp`,
    );

    let ctx;

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": () => setupAnimation(80, 100, -180),

      "(min-width: 768px) and (max-width: 1023px)": () =>
        setupAnimation(120, 150, -240),

      "(min-width: 1024px)": () => setupAnimation(150, 188, -300),
    });

    function setupAnimation(imgW, imgH, entryX) {
      const path = document.querySelector("#img-path");
      const imgSection = document.querySelector(".img-section");
      const container = document.getElementById("img-container");

      if (!path || !imgSection || !container) return;

      const SPACING = 1 / ITEM_COUNT;
      container.innerHTML = "";

      ctx = gsap.context(() => {
        const scrollImgs = [];

        for (let i = 0; i < ITEM_COUNT; i++) {
          const img = document.createElement("img");

          img.src = imageItems[i % imageItems.length];
          img.alt = "scroll image";
          img.className = "scroll-img absolute left-1/2 -translate-x-1/2 z-10";

          Object.assign(img.style, {
            width: `${imgW}px`,
            height: `${imgH}px`,
            top: "0",
            borderRadius: "10px",
            transform: `translateX(${entryX}px) rotate(140deg)`,
          });

          container.appendChild(img);
          scrollImgs.push(img);
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgSection,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        scrollImgs.forEach((img, i) => {
          tl.to(
            img,
            {
              motionPath: {
                path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: i * SPACING,
                end: i * SPACING + 1,
              },
              scale: 1.05,
              ease: "none",
            },
            0,
          );
        });
      });

      ScrollTrigger.refresh();
    }

    return () => {
      ctx?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  };

  const headerSticky = () => {
    const header = document.querySelector(".site-header");
    const sidebarStickyWrap = document.querySelector(".sidebar-sticky");

    if (!header) return;

    let lastScroll = 0;
    let animationFrameId;

    const updateStickyHeader = (scrollY) => {
      const scrollingDown = scrollY > lastScroll;
      const shouldFix = !scrollingDown && scrollY > 0;

      header.classList.toggle("is-fixed", shouldFix);

      if (sidebarStickyWrap) {
        const headerHeight = header.offsetHeight || 80;

        if (shouldFix) {
          sidebarStickyWrap.classList.remove("is-default");
          sidebarStickyWrap.style.top = `${headerHeight + 10}px`;
        } else {
          sidebarStickyWrap.style.top = null;
          sidebarStickyWrap.classList.add("is-default");
        }
      }

      lastScroll = scrollY;
    };

    const smootherScrollLoop = () => {
      if (typeof smoother?.scrollTop === "function") {
        const currentScroll = smoother.scrollTop();
        updateStickyHeader(currentScroll);
      } else {
        const currentScroll =
          window.scrollY || document.documentElement.scrollTop;
        updateStickyHeader(currentScroll);
      }

      animationFrameId = requestAnimationFrame(smootherScrollLoop);
    };

    animationFrameId = requestAnimationFrame(smootherScrollLoop);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  };

  const linkSmoothScroll = () => {
    const clickHandler = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      if (typeof smoother?.scrollTo === "function") {
        smoother.scrollTo(targetEl, true);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  };

  let cleanupSticky = null;
  const initStickyPosition = (selector = ".my-sticky", offset = 100) => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": () => {
        const elements = document.querySelectorAll(selector);
        const triggers = [];
        elements.forEach((el) => {
          const parent = el.parentElement;
          if (!parent) return;

          const spacer = document.createElement("div");
          spacer.classList.add("sticky-spacer");
          spacer.style.height = el.classList.contains("sidebar-sticky")
            ? 0
            : `${el.offsetHeight + offset}px`;
          parent.insertBefore(spacer, el);
          spacer.appendChild(el);

          Object.assign(el.style, {
            position: "absolute",
            top: el.classList.contains("space-top-0") ? 0 : `${offset}px`,
            left: 0,
            right: 0,
          });

          const trigger = ScrollTrigger.create({
            trigger: spacer,
            start: "top top",
            end: () => `+=${parent.offsetHeight - el.offsetHeight - offset}`,
            pin: el,
            pinSpacing: false,
            scroller: "#smooth-wrapper",
            anticipatePin: 1,
          });

          triggers.push({ trigger, spacer, el });
        });

        return () => {
          triggers.forEach(({ trigger, spacer, el }) => {
            trigger.kill();

            const parent = spacer.parentElement;
            if (parent) {
              parent.insertBefore(el, spacer);
              parent.removeChild(spacer);
            }

            Object.assign(el.style, {
              position: "",
              top: "",
              left: "",
              right: "",
            });
          });
        };
      },
    });
  };

  const applySticky = () => {
    if (cleanupSticky) cleanupSticky();
    cleanupSticky = initStickyPosition();
  };

  const customScroll = () => {
    const content = document.querySelectorAll(".custom-scroll");

    content.forEach((item) => {
      item.addEventListener(
        "wheel",
        function (e) {
          e.stopPropagation();
        },
        { passive: false },
      );

      let startY = 0;
      let startX = 0;

      item.addEventListener(
        "touchstart",
        (e) => {
          const touch = e.touches[0];
          startY = touch.clientY;
          startX = touch.clientX;
        },
        { passive: true },
      );

      item.addEventListener(
        "touchmove",
        (e) => {
          const touch = e.touches[0];
          const deltaY = startY - touch.clientY;
          const deltaX = startX - touch.clientX;

          item.scrollTop += deltaY;
          item.scrollLeft += deltaX;

          startY = touch.clientY;
          startX = touch.clientX;

          e.stopPropagation();
          e.preventDefault();
        },
        { passive: false },
      );
    });
  };

  document.querySelectorAll(".sticky-update-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        applySticky();
      }, 200);
    });
  });

  const imageHover = () => {
    const items = document.querySelectorAll(".dz-hover-item");
    if (!items.length) return;

    items.forEach((item) => {
      if (item.dataset.hoverInit) return; // already initialized
      item.dataset.hoverInit = "true";

      const container = item.querySelector(".dz-hover-img");
      if (!container) return;

      const img = container.querySelector("img");
      if (!img) return;

      const ratio = img.naturalHeight / img.naturalWidth; // cache ratio

      const initHover = () => {
        const hover = new hoverEffect({
          parent: container,
          intensity: container.dataset.intensity || 0.3,
          speedIn: container.dataset.speedin || 1.2,
          speedOut: container.dataset.speedout || 1.2,
          easing: container.dataset.easing || "expo.out",
          hover: false,
          image1: img.src,
          image2: img.src,
          displacementImage: container.dataset.displacement,
          imagesRatio: ratio, // use cached
        });

        // Safe listener
        const enter = () => hover.next();
        const leave = () => hover.previous();

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
      };

      if (img.complete) {
        // Image already loaded
        requestAnimationFrame(initHover); // schedule in next frame
      } else {
        img.addEventListener(
          "load",
          () => {
            requestAnimationFrame(initHover);
          },
          { once: true },
        );
      }
    });
  };

  const handleMovingText = () => {
    const sections = document.querySelectorAll(".moving-text");

    if (sections.length > 0) {
      sections.forEach((section, index) => {
        const wrapper = section.querySelector(".wrapper-text");
        if (!wrapper) return;

        const containerWidth = section.offsetWidth;
        const contentWidth = wrapper.scrollWidth;

        const [xStart, xEnd] =
          index % 2 === 0
            ? [0, containerWidth - contentWidth]
            : [containerWidth - contentWidth, 0];

        gsap.fromTo(
          wrapper,
          { x: xStart },
          {
            x: xEnd + 500,
            scrollTrigger: {
              trigger: section,
              scrub: 0.1,
            },
          },
        );
      });
    }
  };

  function amaraEffectTextTrail(scope) {
    if (typeof scope === "string") {
      scope = document.querySelector(scope);
    }
    if (!(scope instanceof Element)) return;

    const widget = scope.querySelector(".pxl-text-trail");
    if (!widget) return;

    const images = [...widget.querySelectorAll(".inner-item .item-text")];

    const MathUtils = {
      lerp: (a, b, n) => (1 - n) * a + n * b,
      distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
    };

    const getMousePos = (ev) => ({ x: ev.clientX, y: ev.clientY });

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cacheMousePos = { x: 0, y: 0 };

    widget.addEventListener("mousemove", (ev) => {
      mousePos = getMousePos(ev);
    });

    const getMouseDistance = () =>
      MathUtils.distance(
        mousePos.x,
        mousePos.y,
        lastMousePos.x,
        lastMousePos.y,
      );

    class Image {
      constructor(el) {
        this.DOM = { el };
        this.defaultStyle = { x: 0, y: 0, opacity: 0 };
        this.getRect();
        this.initEvents();
      }

      initEvents() {
        window.addEventListener("resize", () => this.resize());
      }

      resize() {
        gsap.set(this.DOM.el, this.defaultStyle);
        this.getRect();
      }

      getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }

      isActive() {
        return (
          gsap.getTweensOf(this.DOM.el).length > 0 ||
          window.getComputedStyle(this.DOM.el).opacity !== "0"
        );
      }
    }

    class ImageTrail {
      constructor() {
        this.images = images.map((img) => new Image(img));
        this.imagesTotal = this.images.length;
        this.imgPosition = 0;
        this.zIndexVal = 1;
        this.threshold = 100;

        requestAnimationFrame(() => this.render());
      }

      render() {
        const distance = getMouseDistance();

        cacheMousePos.x = MathUtils.lerp(
          cacheMousePos.x || mousePos.x,
          mousePos.x,
          0.1,
        );
        cacheMousePos.y = MathUtils.lerp(
          cacheMousePos.y || mousePos.y,
          mousePos.y,
          0.1,
        );

        if (distance > this.threshold) {
          this.showNextImage();
          this.zIndexVal++;
          this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
          lastMousePos = { ...mousePos };
        }

        const isIdle = this.images.every((img) => !img.isActive());
        if (isIdle && this.zIndexVal !== 1) {
          this.zIndexVal = 1;
        }

        requestAnimationFrame(() => this.render());
      }

      showNextImage() {
        const img = this.images[this.imgPosition];
        gsap.killTweensOf(img.DOM.el);

        const tl = gsap.timeline();

        tl.set(
          img.DOM.el,
          {
            opacity: 1,
            scale: 1,
            zIndex: this.zIndexVal,
            x: cacheMousePos.x - img.rect.width / 2,
            y: cacheMousePos.y - img.rect.height / 2,
          },
          0,
        );

        tl.to(
          img.DOM.el,
          {
            duration: 1.8,
            ease: "expo.out",
            x: mousePos.x - img.rect.width / 2,
            y: mousePos.y - img.rect.height / 2,
          },
          0,
        );

        tl.to(
          img.DOM.el,
          {
            duration: 0.8,
            ease: "power1.out",
            opacity: 0,
          },
          0.8,
        );

        tl.to(
          img.DOM.el,
          {
            duration: 0.8,
            ease: "quint.inOut",
            scale: 2,
          },
          0.8,
        );
      }
    }

    new ImageTrail();
  }

  const amaraScrollImageEffect = (scopeSelector) => {
    gsap.registerPlugin(ScrollTrigger);

    const scopes =
      typeof scopeSelector === "string"
        ? document.querySelectorAll(scopeSelector)
        : scopeSelector instanceof Element
          ? [scopeSelector]
          : [];

    scopes.forEach((scope) => {
      const evenItems = scope.querySelectorAll(
        ".pxl-group-image .inner-item:nth-child(even):not(:first-child) .item-image",
      );
      const oddItems = scope.querySelectorAll(
        ".pxl-group-image .inner-item:nth-child(odd):not(:first-child) .item-image",
      );

      const referenceImage = scope.querySelector(
        ".pxl-group-image .inner-item .item-image",
      );
      if (!referenceImage) return;

      const imageWidth = referenceImage.offsetWidth;

      evenItems.forEach((img, i) => {
        const offset = i % 2 === 0 ? imageWidth / 3.5 : -imageWidth / 3.5;
        const angle = i % 2 === 0 ? 7 : -7;
        gsap.set(img, { x: offset, rotation: angle });
      });

      oddItems.forEach((img, i) => {
        const offset = i % 2 === 0 ? -imageWidth / 2 : imageWidth / 2;
        const angle = i % 2 === 0 ? -14 : 14;
        gsap.set(img, { x: offset, rotation: angle });
      });

      [...evenItems, ...oddItems].forEach((img) => {
        gsap.to(img, {
          x: 0,
          rotation: 0,
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  };

  const handlevideothumb = () => {
    const bgVideo = document.getElementById("bgVideo");
    const videoSource = document.getElementById("videoSource");

    document.querySelectorAll(".thumb").forEach((thumb) => {
      thumb.addEventListener("click", function () {
        let newVideo = this.getAttribute("data-video");

        videoSource.src = newVideo;
        bgVideo.load();
        bgVideo.play();
      });
    });
  };

  const handlezoomtext = () => {
    const zoomEl = document.querySelector(".zoom-text");
    if (!zoomEl) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      zoomEl,
      {
        scale: 3,
        opacity: 0.2,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: zoomEl,
          start: "top center",
          end: "bottom top",
          scrub: 1.5,
        },
      },
    );
  };

  const handlEyesEffect = () => {
    var item = document.querySelectorAll(".item1");

    var eye = document.querySelectorAll(".eye");
    var iris = document.querySelectorAll(".iris");
    var pupil = document.querySelectorAll(".pupil");

    document.addEventListener("mousemove", function (e) {
      var sW = window.innerWidth;
      var sH = window.innerHeight;
      var cW = sW / 2;
      var cH = sH / 2;
      var mX = e.clientX;
      var mY = e.clientY;

      for (var i = 0; i < eye.length; i++) {
        var el = eye[i].getBoundingClientRect();
        var eyeCenterX = el.left + el.width / 2;
        var eyeCenterY = el.top + el.height / 2;

        var dX = eyeCenterX - mX;
        if (dX < -200) {
          dX = -200;
        } else if (dX > 200) {
          dX = 200;
        }

        var dY = eyeCenterY - mY;
        if (dY < -200) {
          dY = -200;
        } else if (dY > 200) {
          dY = 200;
        }

        var pX = (dX * 100) / 200;
        var moveIrisX = ((40 * pX) / 100) * -1;
        var movePupilX = ((10 * pX) / 100) * -1;

        var pY = (dY * 100) / 200;
        var moveIrisY = ((30 * pY) / 100) * -1;
        var movePupilY = ((10 * pY) / 100) * -1;

        iris[i].style.transform =
          "translate(" + moveIrisX + "px, " + moveIrisY + "px)";
        pupil[i].style.transform =
          "translate(" + movePupilX + "px, " + movePupilY + "px)";
      }
    });
  };

  const handlCursorPictureEffect = () => {
    if (!window.matchMedia("(min-width: 992px)").matches) return;

    const images = document.querySelectorAll(".cursor-picture");
    if (!images || !images.length) return;

    let lastX = 0;
    let lastY = 0;
    let index = 0;
    const minDistance = 40;
    const activeImages = new Set();
    let mouseX = 0,
      mouseY = 0;
    let needsUpdate = false;
    let animationReady = false;

    gsap
      .timeline({
        onComplete: () => {
          animationReady = true;
        },
      })
      .to(".title", {
        backgroundPosition: "0",
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
      })
      .to(
        ".title",
        {
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.3",
      );

    const hero = document.querySelector(".hero");
    if (!hero) return;

    hero.addEventListener("mousemove", (e) => {
      if (!animationReady) return;

      mouseX = e.clientX;
      mouseY = e.clientY;
      needsUpdate = true;
    });

    gsap.ticker.add(() => {
      if (!needsUpdate || !animationReady) return;
      needsUpdate = false;

      if (Math.hypot(mouseX - lastX, mouseY - lastY) < minDistance) return;

      lastX = mouseX;
      lastY = mouseY;

      if (index >= images.length) index = 0;
      const img = images[index];

      if (activeImages.has(img)) return;
      index++;
      activeImages.add(img);

      gsap.set(img, {
        left: mouseX - img.width / 2 + "px",
        top: mouseY - img.height / 2 + "px",
        scale: 0.8,
        opacity: 0,
        position: "absolute",
      });

      gsap
        .timeline()
        .to(img, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" })
        .to(img, { opacity: 1, duration: 0.1 })
        .to(img, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" })
        .call(() => {
          activeImages.delete(img);
        });
    });
  };

  const handleImageEffect = () => {
    let wheel = document.querySelector(".wheel"),
      images = gsap.utils.toArray(".wheel__card"),
      cards = gsap.utils.toArray(".wheel__card"),
      currentCard;

    const arrow = document.querySelector(".arrow");
    if (arrow) {
      gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });
    }
    function setup() {
      let radius = wheel.offsetWidth / 2,
        center = radius,
        slice = 360 / images.length,
        DEG2RAD = Math.PI / 180;

      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    }

    if (wheel) {
      setup();
      window.addEventListener("resize", setup);

      gsap.to(wheel, {
        rotation: -360,
        ease: "none",
        duration: images.length,
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 1,
        },
      });
    }

    cards.forEach((card) => card.addEventListener("click", onClickCard));

    function onClickCard(e) {
      let card = e.currentTarget,
        image = card.querySelector("img");
    }
  };

  const handleBigNumber = () => {
    const number = document.querySelector(".big-number");
    if (!number) return;
    const chars = number.innerText.split("");

    number.innerHTML = chars.map((char) => `<span>${char}</span>`).join("");

    const spans = number.querySelectorAll("span");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: number,
          start: "top 90%",
          end: "top 30%",
          scrub: 1.5,
        },
      })
      .fromTo(
        spans,
        {
          y: 240,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: {
            each: 0.35,
            ease: "power1.out",
          },
        },
      );
  };

  const handleBustText = () => {
    const container = document.querySelector(".dust-text");
    if (!container) return () => {};

    const text = container.textContent.trim();
    container.textContent = "";

    const letters = [];
    const fragment = document.createDocumentFragment();

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "letter";

      const filterId = `dust-filter-${index}`;

      span.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="${filterId}">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.45"
              numOctaves="1"
              seed="${index}">
              <animate
                attributeName="baseFrequency"
                dur="8s"
                values="0.42;0.48;0.42"
                repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>

        <text x="0" y="0" dominant-baseline="hanging" font-weight="700" fill="#111">
          ${char}
        </text>
        <text
          x="0"
          y="0"
          dominant-baseline="hanging"
          font-weight="700"
          fill="#111"
          filter="url(#${filterId})"
          class="dust">
          ${char}
        </text>
      </svg>
    `;

      fragment.appendChild(span);
      letters.push(span);
    });

    container.appendChild(fragment);

    /* ---------------- SVG RESIZE ---------------- */

    const resizeSVGs = () => {
      letters.forEach((letter) => {
        const svg = letter.querySelector("svg");
        const baseText = svg.querySelector("text");

        const box = baseText.getBBox();
        const paddingX = 12;
        const paddingY = 6;

        const x = box.x - paddingX;
        const y = box.y - paddingY;
        const width = box.width + paddingX * 2;
        const height = box.height + paddingY * 2;

        svg.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
      });
    };

    /* font safe resize */
    if (document.fonts) {
      document.fonts.ready.then(() => requestAnimationFrame(resizeSVGs));
    } else {
      requestAnimationFrame(resizeSVGs);
    }

    /* resize debounce */
    let resizeRAF;
    const onResize = () => {
      cancelAnimationFrame(resizeRAF);
      resizeRAF = requestAnimationFrame(resizeSVGs);
    };
    window.addEventListener("resize", onResize);

    /* ---------------- HOVER EFFECT ---------------- */

    letters.forEach((letter) => {
      const dust = letter.querySelector(".dust");

      const onEnter = () => dust.classList.add("is-visible");
      const onLeave = () => dust.classList.remove("is-visible");

      letter.addEventListener("mouseenter", onEnter);
      letter.addEventListener("mouseleave", onLeave);

      letter._cleanup = () => {
        letter.removeEventListener("mouseenter", onEnter);
        letter.removeEventListener("mouseleave", onLeave);
      };
    });

    /* ---------------- CLEANUP ---------------- */

    return () => {
      window.removeEventListener("resize", onResize);
      letters.forEach((letter) => letter._cleanup?.());
    };
  };

  const handlImgScrollWrap = () => {
    const el = document.querySelector(".img-scroll-wrap");
    if (!el) return;
    gsap.to(".img-scroll-wrap", {
      height: "100vh",
      ease: "none",
      scrollTrigger: {
        trigger: ".img-scroll-wrap",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  };

  const handlStudioSection = () => {
    const wrapper = document.querySelector(".img-fluid-wrap");
    if (!wrapper) return;
    const canvas = wrapper.querySelector("canvas");

    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;

    let config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 18,
      SPLAT_RADIUS: 0.01,
    };

    let pointers = [
      {
        id: 0,
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        down: true,
        moved: false,
        color: [1, 1, 1],
      },
    ];

    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const p = pointers[0];
      p.moved = true;
      p.dx = (x - p.x) * 8;
      p.dy = (y - p.y) * 8;
      p.x = x;
      p.y = y;
    });
  };

  const fitBigNumber = () => {
    const el = document.getElementById("bigNumber");
    if (!el) return;

    const parentWidth = el.parentElement.offsetWidth;
    const textWidth = el.scrollWidth;

    const scale = parentWidth / textWidth;
    el.style.transform = `scale(${Math.min(scale, 1)})`;
    el.style.transformOrigin = "left bottom";
  };

  window.addEventListener("load", fitBigNumber);
  window.addEventListener("resize", fitBigNumber);
  const introline = document.querySelector(".introline");
  if (introline) {
    TweenLite.set(".introline", { x: "0%" });
    new TimelineMax({
      repeat: 1,
      yoyo: true,
      repeatDelay: 0,
    }).to(".introline", 2, {
      x: "-105%",
      ease: Power2.inOut,
    });
  }

  function handleCaseItems() {
    let currentActive = null;
    let triggers = [];

    const filterButtons = document.querySelectorAll(".filter-btn");
    const services = Array.from(document.querySelectorAll(".service"));

    services.forEach((el) => {
      el.dataset.display = getComputedStyle(el).display;
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1401px)": () => {
        initItems({
          activeTitle: 60,
          inactiveTitle: 20,
          activeDuration: 0.4,
          imageDuration: 0.5,
        });
      },

      "(min-width: 992px) and (max-width: 1400px)": () => {
        initItems({
          activeTitle: 60,
          inactiveTitle: 20,
          activeDuration: 0.4,
          imageDuration: 0.5,
        });
      },

      "(min-width: 769px) and (max-width: 991px)": () => {
        initItems({
          activeTitle: 40,
          inactiveTitle: 18,
          activeDuration: 0.3,
          imageDuration: 0.35,
        });
      },

      "(min-width: 576px) and (max-width: 768px)": () => {
        initItems({
          activeTitle: 36,
          inactiveTitle: 18,
          activeDuration: 0.3,
          imageDuration: 0.35,
        });
      },

      "(max-width: 575px)": () => {
        initItems({
          activeTitle: 20,
          inactiveTitle: 20,
          activeDuration: 0.25,
          imageDuration: 0.3,
        });
      },
    });

    function initItems(sizes) {
      initScroll(sizes);

      filterButtons.forEach((btn) => {
        btn.onclick = () => {
          const filter = btn.dataset.filter;

          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          services.forEach((service) => {
            const category = service.dataset.category;
            const originalDisplay = service.dataset.display;

            if (filter === "all" || category === filter) {
              service.style.display = originalDisplay;
              gsap.to(service, { autoAlpha: 1, duration: 0.25 });
            } else {
              gsap.to(service, {
                autoAlpha: 0,
                duration: 0.2,
                onComplete: () => (service.style.display = "none"),
              });
            }
          });

          gsap.delayedCall(0.3, () => initScroll(sizes));
        };
      });
    }

    function initScroll(sizes) {
      triggers.forEach((t) => t.kill());
      triggers = [];
      currentActive = null;

      const visibleItems = services.filter(
        (el) => window.getComputedStyle(el).display !== "none",
      );

      visibleItems.forEach((item) => {
        const title = item.querySelector(".title");
        const tags = item.querySelector(".tags");
        const imageWrap = item.querySelector(".image-wrap");

        gsap.set(title, {
          fontSize: sizes.inactiveTitle,
          lineHeight: 1.2,
          fontWeight: 400,
        });

        gsap.set(tags, { height: 0, autoAlpha: 0, overflow: "hidden" });
        gsap.set(imageWrap, { height: 0, autoAlpha: 0 });

        triggers.push(
          ScrollTrigger.create({
            trigger: item,
            start: "top 30%",
            end: "top 30%",
            onEnter: () => setActive(item, visibleItems, sizes),
            onEnterBack: () => setActive(item, visibleItems, sizes),
          }),
        );
      });

      ScrollTrigger.refresh();
    }

    function setActive(activeItem, items, sizes) {
      if (currentActive === activeItem) return;

      items.forEach((item) => {
        gsap.killTweensOf(item.querySelector(".title"));
        gsap.killTweensOf(item.querySelector(".tags"));
        gsap.killTweensOf(item.querySelector(".image-wrap"));
      });

      items.forEach((item) => {
        const title = item.querySelector(".title");
        const tags = item.querySelector(".tags");
        const imageWrap = item.querySelector(".image-wrap");

        if (item === activeItem) {
          gsap.to(title, {
            fontSize: sizes.activeTitle,
            lineHeight: 1.1,
            fontWeight: 600,
            duration: sizes.activeDuration,
            ease: "power3.out",
          });

          gsap.to(tags, {
            height: "auto",
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(imageWrap, {
            height: "auto",
            autoAlpha: 1,
            duration: sizes.imageDuration,
            ease: "power3.out",
          });
        } else {
          gsap.to(title, {
            fontSize: sizes.inactiveTitle,
            lineHeight: 1.2,
            fontWeight: 400,
            duration: 0.25,
          });

          gsap.to(tags, {
            height: 0,
            autoAlpha: 0,
            duration: 0.2,
          });

          gsap.to(imageWrap, {
            height: 0,
            autoAlpha: 0,
            duration: 0.25,
          });
        }
      });

      currentActive = activeItem;
    }
  }

  return {
    init() {
      handleCaseItems();
      handleMovingText();
      amaraEffectTextTrail(".text-trail-wrapper");
      amaraScrollImageEffect(".pxl-group-image");
      initScrollImgAnimation();
      headerSticky();
      linkSmoothScroll();
      applySticky();
      imageHover();
      headingAnimation();
      handlevideothumb();
      handlezoomtext();
      handleBustText();
      handlEyesEffect();
      handlCursorPictureEffect();
      handleImageEffect();
      handleBigNumber();
      handlStudioSection();
      handlImgScrollWrap();
      fitBigNumber();
      setTimeout(() => {
        requestAnimationFrame(() => {
          imageHover();
        });
      }, 500);
      customScroll();
    },
  };
};

document.addEventListener("DOMContentLoaded", () => {
  amaraGsap().init();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// Exposed globally so app code can call amaraGsap().init() directly once
// scripts are injected client-side (the DOMContentLoaded listener above
// never fires when this script loads after that event has already passed).
window.amaraGsap = amaraGsap;
