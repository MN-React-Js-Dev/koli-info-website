import "@/styles/globals.css";
import "../styles/common.css";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  console.log(process.env, "kjkj");
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
