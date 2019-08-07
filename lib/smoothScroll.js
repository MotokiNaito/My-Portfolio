import { TweenLite } from "gsap";

class SmoothScroll {
  constructor() {
    this.scrollContainer = document.querySelector(".scroll-container");
    this.smoothScroll = null;
    this.scrollBar = null;
    this.init();
  }

  init = () => {
    this.horizontalScrollSetup();

    this.scrollBar = this.smoothScroll.init(this.scrollContainer, {
      alwaysShowTracks: true,
      damping: 0.08
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
    const { x } = status.offset;

    const vw = window.innerWidth;
    const scrollPercent = (x / vw) * 140;
    const scaleAmount = scrollPercent;
    const bgImage = document.querySelector(".about-img__bottom .bg-image");
    const bgImageTop = document.querySelector(".about-img__top .bg-image");

    TweenLite.set(bgImage, { x: -scaleAmount });
    TweenLite.set(bgImageTop, { x: scaleAmount });
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