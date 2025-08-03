import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-pixel text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-lg mb-4">页面加载出现错误</p>
            <button
              className="px-4 py-2 bg-white text-black font-pixel"
              onClick={() => window.location.reload()}
            >
              重新加载
            </button>
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer">错误详情</summary>
                <pre className="mt-2 text-sm text-gray-400 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 