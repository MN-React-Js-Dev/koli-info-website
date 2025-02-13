import "@/styles/globals.css";
import "../styles/common.css";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;
    setCanonicalUrl(currentUrl);
  }, []);

  return (
    <Fragment>
      {/* Google Analytics Gtag */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-57Q9GWT80K"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-57Q9GWT80K', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        {/* Google Search Console Meta Tag for Site Verification  */}
        <meta
          name="google-site-verification"
          content="WTvHco_A-x_xhZIBoglmTfK3NAbqrAXN1Q3Gw3qmK_M"
        />
        {/* canonical tags  */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
