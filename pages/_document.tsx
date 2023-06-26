import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:site_name" content="restorePhotos.io" />
          <meta
            property="og:description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:title" content="Face Photo Restorer" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Face Photo Restorer" />
          <meta
            name="twitter:description"
            content="Restore your old photos and keep the memories alive."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />

          {/* For Tally: https://tally.so/forms/mDKWKE/share */}
          <script async src="https://tally.so/widgets/embed.js"></script>

        </Head>
        <body className="flex flex-col items-center justify-center w-full ml-3">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
