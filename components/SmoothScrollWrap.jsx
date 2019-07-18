import React from "react";
import { withRouter } from "next/router";
// import { TweenLite } from "gsap/umd/TweenMax";

class SmoothScrollWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchElements();
    const Scrollbar = require("smooth-scrollbar").default;
    class HorizontalScroll extends Scrollbar.ScrollbarPlugin {
      static pluginName = "horizontalScroll";

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
    const OverscrollPlugin = require("smooth-scrollbar/plugins/overscroll").default;
    HorizontalScroll.pluginName = "horizontalScroll";
    OverscrollPlugin.pluginName = "overScroll";
    Scrollbar.use(HorizontalScroll, OverscrollPlugin);

    const scrollbar = Scrollbar.init(document.querySelector(".story"), {
      alwaysShowTracks: true
    });

    const listener = status => {
      const x = status.offset.x;
      console.log(x);
    };

    scrollbar.addListener(listener);
  }

  fetchElements = () => {
    this.container = document.querySelector(".story");
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
