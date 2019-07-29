class SmoothScroll {
  constructor() {
    this.scrollContainer = document.querySelector(".scroll-container");
    this.scrollBar = null;
  }

  init = () => {
    this.horizontalScrollSetup();

    const storyScrollbar = this.scrollbar.init(
      document.querySelector(".home"),
      {
        alwaysShowTracks: true
      }
    );

    const listener = status => {
      const { x } = status.offset;
      console.log(x);
    };

    storyScrollbar.addListener(listener);
  };

  horizontalScrollSetup = () => {
    // eslint-disable-next-line global-require
    this.scrollbar = require("smooth-scrollbar").default;
    class HorizontalScroll extends this.scrollbar.ScrollbarPlugin {
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
    this.scrollbar.use(HorizontalScroll, OverscrollPlugin);
  };
}

export default SmoothScroll;
