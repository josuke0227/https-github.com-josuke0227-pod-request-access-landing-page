import Head from "next/head";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import { getData } from "../lib/getTextData";

export default function index({ textData }) {
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
        <Contents textData={textData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const textData = getData(["title", "text", "buttonText"]);

  return {
    props: { textData },
  };
}
