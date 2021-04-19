import Document, { Head, Main, NextScript, Html } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:type" content="website" />
            <meta
              name="twitter:title"
              content="MitronTv - Indian short video platform"
            />
            <meta
              name="twitter:description"
              content="Shoot a video to celebrate the life of Netaji using the hashtag #Netaji125 on MitronTV app"
            />
            <meta
              name="twitter:image"
              content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
            />
          </Head> */}
          {/* we cannot add  title tag here,title tags are to be added component by component
          or page by page basis  */}
          {/* You can also add some some useful meta tags particularly useful for SEO */}
          <meta
            name="description"
            content="MitronTV - Indian Short Video App"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          {/* <meta name="robots" content="noindex,nofollow" /> */}
          <link rel="shortcut icon" href="/favicon.png" />
          {/* But we can add any link like cdn link for NProgress css file */}
          <link
            href="https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />

          {/* <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        </Head>

        <body>
          {/* include the main component for all the main content */}
          <Main />
          {/* include all the scripts */}
          <NextScript />
          {/* here is a great place to apply some global styles */}
          <style global jsx>{`
            body {
              // font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

// So the document is a really great place to put in the head for SEO that's not  specific example title

// would need to go to the head component of an  individual like layout.

// If you want to persist among all your pages to modify a simple document that so is the custom underscore

// documents page.
