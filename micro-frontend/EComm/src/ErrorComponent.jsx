import React, { Component } from "react";

export default class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  componentDidCatch() {}
  render() {
    if (this.setState.hasError) {
      return <div>ErrorComponent</div>;
    }

    return this.props.children;
  }
}
