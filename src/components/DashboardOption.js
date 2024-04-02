

import React from 'react';
import Link from 'next/link';
import styles from "@/ui/home/home.module.css"

const DashboardOption = ({ title, link, count }) => {
  return (
    <div className={styles.itemLink}>
      <h4>{title}</h4>
      <p>{count}</p>
      <Link href={link}>
        View
      </Link>
    </div>
  );
};

export default DashboardOption;

