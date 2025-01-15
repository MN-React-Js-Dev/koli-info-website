import "@/styles/globals.css";
import "../styles/common.css";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;
    setCanonicalUrl(currentUrl);
  }, []);

  return (
    <Fragment>
       <Head>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
