import React from "react";
import styles from "./Features.module.css";
import Feature from "./Feature";

const features = [
  {
    title: "Track company-wide progress",
    body: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },

  {
    title: "Advanced built-in reports",
    body: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },

  {
    title: "Everything you need in one place",
    body: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>What's different about manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <ul className={styles.features}>
        {features.map((feat, index) => {
          return (
            <Feature key={index} feature={{ ...feat, index: index + 1 }} />
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
