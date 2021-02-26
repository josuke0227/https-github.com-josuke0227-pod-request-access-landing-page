import Head from "next/head";
import Contents from "../components/Contents";
import Layout from "../components/Layout";

export default function index() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Layout>
        <Contents />
      </Layout>
    </>
  );
}
