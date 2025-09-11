"use client";

import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Unhandled error caught by ErrorBoundary:", error, info);
    // 🔧 TODO: ส่ง error ไป external service เช่น Sentry, LogRocket, Datadog
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen gap-4 text-red-600">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          <p className="text-base">Please try reloading the page.</p>
          <button
            onClick={this.handleReload}
            className="px-4 py-2 rounded bg-red-500 text-white shadow hover:bg-red-600 transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}