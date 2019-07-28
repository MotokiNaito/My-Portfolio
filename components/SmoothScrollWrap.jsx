import React from "react";
import { withRouter } from "next/router";

class SmoothScrollWrap extends React.Component {
  scrollbar = null;

  componentDidMount() {
    this.fetchElements();
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
  }

  fetchElements = () => {
    this.container = document.querySelector(".home");
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

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <div
        className="scroll-container"
        ref={el => {
          this.container = el;
        }}
      >
        {children}
      </div>
    );
  }
}

export default withRouter(SmoothScrollWrap);
