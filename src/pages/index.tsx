import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container py-20 text-left">
      <div className="mx-auto sm:w-1/2">
        <img className="rounded-xl" src="/img/mobius.jpeg" alt="" />
        <span className="italic">The Möbius Strip - The Eternal Loop</span>
        <p className="pt-8 mx-auto sm:text-3xl">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="px-4 py-2 tracking-widest uppercase rounded shadow bg-black/20"
            to="/docs/intro"
          >
            Read the scroll
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bibliotheca DAO Master scroll"
    >
      <HomepageHeader />
    </Layout>
  );
}
