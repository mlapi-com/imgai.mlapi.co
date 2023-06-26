
import type { AppProps } from "next/app";
import "../styles/globals.css";
import ErrorBoundary from "./ErrorBoundry";
import React, { lazy } from 'react';

const Footer = lazy(() => import('../components/Footer'));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary fallback="There was an error while processing">
      <Component {...pageProps} />
      <Footer />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
