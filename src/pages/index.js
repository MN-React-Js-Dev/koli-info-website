import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./home-page";
import { Fragment } from "react";
const inter = Inter({ subsets: ["latin"] });
import LoaderComponent from "@/commonComponent/loaderComponent";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {loader === true ? <LoaderComponent /> : console.log("null")}
        <HomePage />
      </main>
    </Fragment>
  );
}
