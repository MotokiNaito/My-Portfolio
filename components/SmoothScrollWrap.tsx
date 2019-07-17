import React, { Component } from "react";
import { withRouter } from "next/router";
import Scrollbar from "smooth-scrollbar";
// import { TweenLite } from "gsap/umd/TweenMax";

class SmoothScrollWrap extends Component {
  scrollbar: any;
  container: HTMLElement;
  parallaxList: any;
  constructor(props) {
    super(props);
    this.scrollbar = null;
  }

  componentDidMount() {
    this.fetchElements();
  }

  fetchElements = () => {
    this.scrollbar = Scrollbar.init(this.container);
  };

  render() {
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
