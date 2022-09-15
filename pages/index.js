import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <PageLayout title={"Home"}>
      <div className={styles.container}>
        <h1>HOLA</h1>
        <Link href="/article-client">Article Client Side Rendering</Link>
        <hr></hr>
        <Link href="/article-server">Article Server Side Rendering</Link>
        <hr></hr>
        <Link href="/article-static">Article Static Page Generation</Link>
      </div>
    </PageLayout>
  );
}
