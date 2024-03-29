import type { NextPage } from "next";
import Head from "next/head";
import { Pagination, Container, Center, Button } from "@mantine/core";
import { HeroProduct } from "../components/HeroProduct/HeroProduct";
import { Nav } from "../components/Nav/Nav";
import { BreadCrumbSorter } from "../components/BreadCrumbSorter/BreadCrumbSorter";
import { ProductSection } from "../components/ProductSection/ProductSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bejamas E-Commerce</title>
        <meta name="description" content="Bejamas Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <HeroProduct />
        <BreadCrumbSorter />
        <ProductSection />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
