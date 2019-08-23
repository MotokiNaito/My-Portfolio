import { TweenLite, TweenMax } from "gsap";

class SmoothScroll {
  constructor() {
    this.scrollContainer = document.querySelector(".scroll-container");
    this.smoothScroll = null;
    this.scrollBar = null;
    this.revealElements = document.querySelectorAll(
      "[data-reveal='container']"
    );
    this.init();
  }

  init = () => {
    this.horizontalScrollSetup();

    this.scrollBar = this.smoothScroll.init(this.scrollContainer, {
      alwaysShowTracks: true,
      damping: 0.07
    });

    this.scrollBar.addListener(this.scrollListner);

    this.navScrollTo();
  };

  horizontalScrollSetup = () => {
    // eslint-disable-next-line global-require
    this.smoothScroll = require("smooth-scrollbar").default;
    class HorizontalScroll extends this.smoothScroll.ScrollbarPlugin {
      transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
          return delta;
        }
        const { x, y } = delta;
        return {
          y: 0,
          x: Math.abs(x) > Math.abs(y) ? x : y
        };
      }
    }
    // eslint-disable-next-line global-require
    const OverscrollPlugin = require("smooth-scrollbar/plugins/overscroll")
      .default;
    HorizontalScroll.pluginName = "horizontalScroll";
    OverscrollPlugin.pluginName = "overScroll";
    this.smoothScroll.use(HorizontalScroll, OverscrollPlugin);
  };

  scrollListner = status => {
    this.fadeInEffects();

    const { x } = status.offset;

    const vw = window.innerWidth;
    const scrollPercent = (x / vw) * 140;
    const scaleAmount = scrollPercent;
    const bgImage = document.querySelector(".about-img__bottom .bg-image");
    const bgImageTop = document.querySelector(".about-img__top .bg-image");
    const fName = document.querySelector(".about__name--first");

    if (x < window.innerWidth / 1.5) {
      TweenLite.set(bgImage, { x: -scaleAmount });
      TweenLite.set(bgImageTop, { x: scaleAmount });

      if (window.innerWidth > 840) {
        TweenLite.set(fName, { x: scaleAmount * 3 });
      }
    }

    const projects = [...document.querySelectorAll(".project")];

    projects.forEach(project => {
      const projectPercent =
        100 * ((x - project.offsetLeft) / window.innerWidth);

      if (x + window.innerWidth > project.offsetLeft) {
        if (project.classList.contains("project--even")) {
          TweenLite.set(project.querySelector(".project__title"), {
            y: projectPercent * 4
          });
        } else {
          TweenLite.set(project.querySelector(".project__title"), {
            y: -projectPercent * 4
          });
        }
        TweenLite.set(project.querySelector(".project__img .bg-image"), {
          x: -projectPercent
        });
      }
    });
  };

  fadeInEffects = () => {
    [...this.revealElements].forEach(elem => {
      if (this.scrollBar.isVisible(elem)) {
        if (!elem.classList.contains("is-show")) {
          elem.classList.add("is-show");
          TweenLite.fromTo(elem, 0.3, { autoAlpha: 0 }, { autoAlpha: 1 });

          const staggerElems = elem.querySelectorAll('[data-reveal="fade-in"]');
          if ([...staggerElems].length > 0) {
            TweenMax.staggerFromTo(
              staggerElems,
              1,
              { autoAlpha: 0, y: "50px" },
              { autoAlpha: 1, y: "0px", clearProps: "all" },
              0.4
            );
          }
        }
      }
    });
  };

  navScrollTo = () => {
    const navLists = [...document.querySelectorAll("[data-nav]")];
    navLists.forEach(nav => {
      nav.addEventListener("click", e => {
        const selectedNavName = e.target.dataset.nav;
        const targetSection = document.querySelector(
          `[data-section=${selectedNavName}]`
        );
        this.scrollBar.scrollTo(targetSection.offsetLeft, 0, 900);
      });
    });
  };
}

export default SmoothScroll;
