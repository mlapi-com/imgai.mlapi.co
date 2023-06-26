import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Free AI Powered Image Processing Tools"
          />
          <meta property="og:site_name" content="imgai.co" />
          <meta
            property="og:description"
            content="Free AI Powered Image Processing Tools."
          />
          <meta property="og:title" content="Free AI Powered Image Processing Tools" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free AI Powered Image Processing Tools" />
          <meta
            name="twitter:description"
            content="Free AI Powered Image Processing Tools"
          />
          {/* Add Image here for a preview */}
          <meta
            property="og:image"
            content="https://ik.imagekit.io/uti9laa1e/Screenshot_from_2023-06-27_02.56.54.png?updatedAt=1687814880001"
          />
          <meta
            name="twitter:image"
            content="https://ik.imagekit.io/uti9laa1e/Screenshot_from_2023-06-27_02.56.54.png?updatedAt=1687814880001"
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
