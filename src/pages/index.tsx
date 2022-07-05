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
    <div className="">
      <div className="container text-left py-20">
        <div className=" w-1/2 mx-auto">
          <p className="text-3xl mx-auto pt-20">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="px-4 py-2 uppercase tracking-widest  bg-black/20 rounded shadow"
              to="/docs/intro"
            >
              Read the scroll
            </Link>
          </div>
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
      description="BibliothecaDAO Master scroll"
    >
      <HomepageHeader />
    </Layout>
  );
}
