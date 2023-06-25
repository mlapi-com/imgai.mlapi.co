
import type { AppProps } from "next/app";
import "../styles/globals.css";
import ErrorBoundary from "./ErrorBoundry";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary fallback="There was an error while processing">
      <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
