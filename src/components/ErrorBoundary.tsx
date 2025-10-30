"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
              <p className="mb-8 text-gray-400">
                We&apos;re working to fix this issue.
              </p>
              <button
                className="rounded-lg bg-amber-900 px-6 py-3 text-white hover:bg-amber-800"
                onClick={() =>
                  this.setState({ hasError: false, error: undefined })
                }
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return <div className="relative">{this.props.children}</div>;
  }
}
