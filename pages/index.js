import Head from "next/head";
import { getLayout } from "../components/layout/PanelLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tracker | home</title>
      </Head>
      <div>Hello again</div>
    </>
  );
}

Home.getLayout = getLayout;
