import { Component } from "react";

export class CookieBannerErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("CookieBanner error boundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
