import Head from "next/head";
import Header from "../components/header";
import Qualities from "../components/qualities";
import About from "../components/about";
import Types from "../components/types";
import Flutes from "../components/flutes";
import Designs from "../components/designs";
import Process from "../components/process";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>PT Petra Erka Perkasa</title>
      </Head>
      <Header />
      <Qualities />
      <About />
      <Types />
      <Flutes />
      <Designs />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
