const amara = function () {
  "use strict";

  const cleanups = [];

  const handleScrollTop = function () {
    const scrollBtn = document.getElementById("scrollProgress");
    const scrollTopBtn = document.getElementById("scrolltopbtn");
    if (!scrollBtn) return;

    const circle = scrollBtn.querySelector("circle");
    if (!circle || !circle.r) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.setAttribute("stroke-dasharray", circumference);
    circle.setAttribute("stroke-dashoffset", circumference);

    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight <= 0) return;

      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      const offset = circumference * (1 - scrollPercent);
      circle.setAttribute("stroke-dashoffset", offset);
      scrollBtn.classList.toggle("active", scrollTop > 200);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollBtn.addEventListener("click", scrollToTop);
    scrollTopBtn?.addEventListener("click", scrollToTop);

    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      scrollBtn.removeEventListener("click", scrollToTop);
      scrollTopBtn?.removeEventListener("click", scrollToTop);
    });
  };

  const handleSidebarMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const fullSidenav = document.querySelector(".full-sidenav");
    const mainBar = document.querySelector(".main-bar");
    const menuClose = document.querySelector(".menu-close");

    const onMenuBtnClick = function () {
      this.classList.toggle("open");
      fullSidenav?.classList.toggle("show");
      mainBar?.classList.toggle("show");
      document.body.classList.toggle(
        "menu-btn-open",
        this.classList.contains("open"),
      );
    };

    const onMenuCloseClick = function () {
      menuBtn?.classList.remove("open");
      fullSidenav?.classList.remove("show");
      mainBar?.classList.remove("show");
      document.body.classList.remove("menu-btn-open");
    };

    const updateParentHeights = (submenu) => {
      let parent = submenu.parentElement;

      while (parent) {
        if (
          parent.classList.contains("sub-menu") ||
          parent.classList.contains("mega-menu")
        ) {
          parent.classList.add("menu-auto-height");
          const height = parent.scrollHeight;
        }
        parent = parent.parentElement;
      }
    };

    const closeSiblingMenus = (link) => {
      const li = link.closest("li");
      if (!li) return;

      const parentUL = li.parentElement;
      if (!parentUL) return;

      const listItems = parentUL.children;

      for (let item of listItems) {
        const anchor = item.querySelector(":scope > a.dz-open");
        if (anchor && anchor !== link) {
          anchor.classList.remove("dz-open");
          const submenu = anchor.nextElementSibling;
          if (submenu) submenu.style.maxHeight = null;
        }
      }
    };

    const onFullSidenavClick = function (e) {
      const link = e.target.closest("a");
      if (!link || !fullSidenav.contains(link)) return;

      const subMenu = link.nextElementSibling;

      const hasSub =
        subMenu &&
        (subMenu.classList.contains("sub-menu") ||
          subMenu.classList.contains("mega-menu"));

      if (!hasSub) return;

      e.preventDefault();

      const isOpen = link.classList.contains("dz-open");

      closeSiblingMenus(link);

      if (isOpen) {
        // CLOSE
        link.classList.remove("dz-open");
        subMenu.style.maxHeight = null;

        requestAnimationFrame(() => updateParentHeights(subMenu));
      } else {
        // OPEN
        link.classList.add("dz-open");

        requestAnimationFrame(() => {
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";

          // FIX: update parents AFTER submenu height is applied
          requestAnimationFrame(() => updateParentHeights(subMenu));
        });
      }
    };

    menuBtn?.addEventListener("click", onMenuBtnClick);
    menuClose?.addEventListener("click", onMenuCloseClick);
    fullSidenav?.addEventListener("click", onFullSidenavClick);

    return function removeSidebarMenuListeners() {
      menuBtn?.removeEventListener("click", onMenuBtnClick);
      menuClose?.removeEventListener("click", onMenuCloseClick);
      fullSidenav?.removeEventListener("click", onFullSidenavClick);
    };
  };

  const handleWowAnimation = () => {
    if (document.querySelectorAll(".wow").length > 0) {
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 50,
        mobile: false,
      });
      wow.init();
    }
  };

  const handleTextChar = function () {
    const wordRotateElements = document.querySelectorAll(".word-rotate");
    if (!wordRotateElements.length) return;

    wordRotateElements.forEach((element) => {
      const text = element.textContent?.trim();
      if (!text) return;

      const chars = [...text];
      if (chars.length < 2) return;

      const arc = element.classList.contains("third-one")
        ? 50
        : element.classList.contains("one-third")
          ? -150
          : 120;

      const step = arc / (chars.length - 1);

      const rotateBox = element.closest(".word-rotate-box");
      if (!rotateBox) return;

      const fragment = document.createDocumentFragment();

      chars.forEach((char, i) => {
        const span = document.createElement("span");
        span.classList.add("text-char");
        span.style.setProperty("--char-rotate", `${i * step}deg`);
        span.textContent = char;
        fragment.appendChild(span);
      });

      rotateBox.appendChild(fragment);
      element.remove();
    });
  };

  const handleServiceCard = function () {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        serviceCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      });
    });
  };

  const handleThemeBtn = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataTheme = urlParams.get("data-theme");
    const btnLight = document.querySelector(".dark-theme");
    const btnDark = document.querySelector(".light-theme");
    const html = document.querySelector("html");

    function setCookie(name, value, days) {
      const expires = new Date(Date.now() + days * 86400000).toUTCString();
      document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }

    function getCookie(name) {
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)"),
      );
      return match ? match[2] : null;
    }

    function applyTheme(theme, btn) {
      const currentTheme = html.classList.contains("dark") ? "dark" : "light";
      if (!btn) {
        if (dataTheme) {
          theme = dataTheme;
        } else {
          if (theme === currentTheme) return;
        }
      } else {
        if (theme === currentTheme) return;
      }

      html.classList.toggle("dark", theme === "dark");
      html.classList.toggle("light", theme === "light");
      setCookie("theme", theme, 30);
    }
    if (dataTheme) {
      if (dataTheme == "light") {
        applyTheme("light");
      } else if (dataTheme == "dark") {
        applyTheme("dark");
      }
    } else {
      const savedTheme = getCookie("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        applyTheme(savedTheme);
      } else {
        applyTheme("dark");
      }
    }

    if (btnLight) {
      btnLight.addEventListener("click", () => applyTheme("light", "btn"));
    }
    if (btnDark) {
      btnDark.addEventListener("click", () => applyTheme("dark", "btn"));
    }
  };

  const handleCounterJS = () => {
    const counters = document.querySelectorAll(".value");
    if (!counters.length) return;

    const speed = 200;
    let ticking = false;

    const runCounter = (counter) => {
      const target = +counter.getAttribute("data-akhi");
      let current = 0;
      const increment = target / speed;

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
      update();
    };

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          counters.forEach((counter) => {
            if (
              !counter.classList.contains("counted") &&
              isInViewport(counter)
            ) {
              counter.classList.add("counted");
              runCounter(counter);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    cleanups.push(() => window.removeEventListener("scroll", handleScroll));
  };

  const handleVedioPopupJS = () => {
    const buttons = document.querySelectorAll("[data-type][data-src]");
    const dialog = document.getElementById("videoDialog");
    const container = document.getElementById("videoContainer");
    const closeBtn = document.getElementById("closeBtn");

    if (!dialog || !container) return;

    // 🔹 OPEN
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        openVideo(button.dataset.type, button.dataset.src);
      });
    });

    // 🔹 CLOSE
    closeBtn?.addEventListener("click", closeVideo);

    // 🔹 ESC KEY SUPPORT
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dialog.classList.contains("flex")) {
        closeVideo();
      }
    });

    function openVideo(type, src) {
      container.replaceChildren(); // 🔥 better than innerHTML

      let media;

      if (type === "youtube" || type === "vimeo") {
        media = document.createElement("iframe");
        media.src = `${src}?autoplay=1`;
        media.allow = "autoplay; encrypted-media; fullscreen";
        media.allowFullscreen = true;
      }

      if (type === "mp4") {
        media = document.createElement("video");
        media.controls = true;
        media.autoplay = true;

        const source = document.createElement("source");
        source.src = src;
        source.type = "video/mp4";
        media.appendChild(source);
      }

      if (!media) return;

      container.appendChild(media);
      dialog.classList.remove("hidden");
      dialog.classList.add("flex");
    }

    function closeVideo() {
      container.replaceChildren(); // 🔥 stops video instantly
      dialog.classList.remove("flex");
      dialog.classList.add("hidden");
    }
  };

  const handleTouchSpin = () => {
    const groups = document.querySelectorAll(".input-group");
    if (!groups.length) return;

    const updateValue = (e, step) => {
      e.preventDefault();

      const button = e.target.closest("[data-field]");
      if (!button) return;

      const fieldName = button.getAttribute("data-field");
      if (!fieldName) return;

      const parent = button.closest(".input-group, td, div");
      if (!parent) return;

      const input = parent.querySelector(`input[name="${fieldName}"]`);
      if (!input) return;

      const currentVal = parseInt(input.value, 10);
      const safeVal = isNaN(currentVal) ? 0 : currentVal + step;

      input.value = Math.max(0, safeVal);
    };

    const clickHandler = (e) => {
      const target = e.target.closest(".button-plus, .button-minus");
      if (!target) return;

      if (target.classList.contains("button-plus")) {
        updateValue(e, 1);
      } else {
        updateValue(e, -1);
      }
    };

    groups.forEach((group) => {
      group.addEventListener("click", clickHandler);
      group._touchSpinHandler = clickHandler;
    });

    return () => {
      groups.forEach((group) => {
        if (group._touchSpinHandler) {
          group.removeEventListener("click", group._touchSpinHandler);
          delete group._touchSpinHandler;
        }
      });
    };
  };

  const handleLoadmore = () => {
    const loadMoreBtn = document.querySelector(".dz-load-more");
    if (!loadMoreBtn) return;

    let isLoading = false;

    const clickHandler = async (e) => {
      e.preventDefault();
      if (isLoading) return;

      const dzLoadMoreUrl = loadMoreBtn.getAttribute("rel");
      if (!dzLoadMoreUrl) return;

      isLoading = true;

      const loadingIcon = document.createElement("i");
      loadingIcon.className = "fa fa-refresh fa-spin";
      loadMoreBtn.appendChild(loadingIcon);

      try {
        const response = await fetch(dzLoadMoreUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/html",
          },
        });

        if (!response.ok) {
          throw new Error("Load more request failed");
        }

        const data = await response.text();
        const container = document.querySelector(".loadmore-content");
        if (container) {
          container.insertAdjacentHTML("beforeend", data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        isLoading = false;
        if (loadingIcon.parentNode === loadMoreBtn) {
          loadMoreBtn.removeChild(loadingIcon);
        }
      }
    };

    loadMoreBtn.addEventListener("click", clickHandler);
    loadMoreBtn._loadMoreHandler = clickHandler;

    return () => {
      if (loadMoreBtn._loadMoreHandler) {
        loadMoreBtn.removeEventListener("click", loadMoreBtn._loadMoreHandler);
        delete loadMoreBtn._loadMoreHandler;
      }
    };
  };

  const handleHeaderOverlay = () => {
    const overlayNavbar = document.querySelector(".overlay-navbar");
    if (!overlayNavbar) return;

    const space = window.innerWidth < 1440 ? 22 : 12;
    const clipValue = overlayNavbar.offsetWidth / 2 + space;

    overlayNavbar.style.setProperty("clip-path", `inset(0 0 0 ${clipValue}px)`);
  };

  const handleSetCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let elements = document.getElementsByClassName("current-year");

    for (const element of elements) {
      element.innerHTML = currentYear;
    }
  };

  const handleCustomSelects = () => {
    document.querySelectorAll(".dynamic-select").forEach((selectElement) => {
      createCustomSelectFromSelect(selectElement);
    });
  };

  const createCustomSelectFromSelect = (selectElement) => {
    const selectId =
      selectElement.id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const customSelectDiv = document.createElement("div");
    customSelectDiv.id = `custom-${selectId}`;
    customSelectDiv.className = "custom-select";

    const selectedDiv = document.createElement("div");
    selectedDiv.className = "select-selected";
    selectedDiv.textContent = (
      selectElement.querySelector("option[selected]") ||
      selectElement.options[0]
    ).textContent;

    const labelText = selectElement.parentElement?.dataset?.label || "";
    if (labelText) {
      const label = document.createElement("span");
      label.textContent = labelText;
      selectedDiv.appendChild(label);
    }

    customSelectDiv.appendChild(selectedDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "select-items select-hide";
    customSelectDiv.appendChild(itemsDiv);

    Array.from(selectElement.options).forEach((option) => {
      const customOptionDiv = document.createElement("div");
      customOptionDiv.className = "select-item";
      customOptionDiv.setAttribute("data-value", option.value);
      customOptionDiv.textContent = option.textContent;
      if (option.selected) customOptionDiv.classList.add("active");

      customOptionDiv.addEventListener("click", function () {
        selectedDiv.childNodes[0].textContent = this.textContent;
        selectElement.value = this.getAttribute("data-value");
        selectElement.dispatchEvent(new Event("change"));
        selectElement.dispatchEvent(new Event("click"));

        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");

        itemsDiv
          .querySelectorAll(".select-item")
          .forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });

      itemsDiv.appendChild(customOptionDiv);
    });

    selectElement.style.display = "none";
    selectElement.parentNode.insertBefore(
      customSelectDiv,
      selectElement.nextSibling,
    );

    selectedDiv.addEventListener("click", function (e) {
      e.stopPropagation();
      itemsDiv.classList.toggle("select-hide");
      selectedDiv.classList.toggle("select-active");
    });

    document.addEventListener("click", function (e) {
      if (!customSelectDiv.contains(e.target)) {
        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");
      }
    });
  };

  const handleContactForm = () => {
    document.querySelectorAll(".right-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!document.querySelector(".menu-backdrop")) {
          const backdrop = document.createElement("div");
          backdrop.className = "menu-backdrop";
          document.body.appendChild(backdrop);

          backdrop.addEventListener("click", () => {
            document
              .querySelector(".contact-sidebar")
              ?.classList.remove("active");
            backdrop.remove();
          });
        }
      });
    });

    document.querySelectorAll(".right-btn, .openbtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".contact-sidebar")?.classList.add("active");
      });
    });

    document.querySelectorAll(".menu-close").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".contact-sidebar")?.classList.remove("active");
        document.querySelector(".right-btn")?.classList.remove("open");
        document.querySelector(".menu-backdrop")?.remove();
      });
    });

    document.querySelectorAll(".dz-carticon").forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("active");
      });
    });

    document.querySelectorAll(".dz-wishicon").forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("active");
      });
    });
  };

  const handlePreloader = () => {
    const images = document.querySelectorAll(".image-stack img");
    const preloader = document.getElementById("preloader");

    const pie = document.querySelector(".pie");
    const startLine = document.querySelector(".start-line");
    const endLine = document.querySelector(".end-line");
    const percentText = document.querySelector(".percent");

    if (
      !preloader ||
      !pie ||
      !startLine ||
      !endLine ||
      !percentText ||
      images.length === 0
    ) {
      preloader?.remove();
      return;
    }

    let index = 0;
    let progress = 0;

    const cx = 90;
    const cy = 90;
    const r = 70;

    const polar = (angle) => {
      const rad = ((angle - 90) * Math.PI) / 180;
      return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad),
      };
    };

    const updatePie = (p) => {
      const angle = p * 3.6;
      const end = polar(angle);
      const large = angle > 180 ? 1 : 0;

      pie.setAttribute(
        "d",
        `M ${cx} ${cy}
		   L ${cx} ${cy - r}
		   A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}
		   Z`,
      );

      startLine.setAttribute("x1", cx);
      startLine.setAttribute("y1", cy);
      startLine.setAttribute("x2", cx);
      startLine.setAttribute("y2", cy - r);

      endLine.setAttribute("x1", cx);
      endLine.setAttribute("y1", cy);
      endLine.setAttribute("x2", end.x);
      endLine.setAttribute("y2", end.y);
    };

    images[index].classList.add("active");

    const shuffleInterval = setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 600);

    const progressInterval = setInterval(() => {
      progress++;
      updatePie(progress);
      percentText.textContent = progress + "%";

      if (progress >= 100) {
        clearInterval(progressInterval);
        clearInterval(shuffleInterval);
        preloader.remove();
      }
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(shuffleInterval);
    };
  };

  return {
    init: function () {
      handlePreloader();
      handleSidebarMenu();
      handleWowAnimation();
      handleTextChar();
      handleServiceCard();
      handleThemeBtn();
      handleScrollTop();
      handleCounterJS();
      handleVedioPopupJS();
      handleTouchSpin();
      handleLoadmore();
      handleSetCurrentYear();
      handleCustomSelects();
      handleContactForm();
      setTimeout(() => {
        handleHeaderOverlay();
      }, 500);
    },
    resize: function () {
      handleHeaderOverlay();
    },
  };
};
window.addEventListener("load", function () {
  if (typeof amara !== "undefined" && typeof amara.load === "function") {
    amara.load();
  }

  setTimeout(function () {
    const loadingArea = document.getElementById("loading-area");
    if (loadingArea) {
      loadingArea.remove();
    }
  }, 100);
});

const app = amara();
if (typeof app.scroll === "function") {
  app.scroll();
}

window.addEventListener("resize", function () {
  amara().resize();
});

document.addEventListener("DOMContentLoaded", function () {
  amara().init();
});

// Exposed globally so app code can call amara().init() directly once
// scripts are injected client-side (the DOMContentLoaded listener above
// never fires when this script loads after that event has already passed).
window.amara = amara;
