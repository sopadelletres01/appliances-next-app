import Head from "next/head";
import styles from "./PageLayout.module.css"
export default function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Appliances App"}</title>
        <meta name="description" content="app-for-your-house-appliances" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>PageLayout</h2>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
