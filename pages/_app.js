import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Layout from "../components/main/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
