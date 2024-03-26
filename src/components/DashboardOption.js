import React from 'react';
import Link from 'next/link';
import styles from "@/ui/dashboard/dashboard.module.css"

const DashboardOption = ({ title, link }) => {
  return (
    <div className={styles.itemLink}>
      <h2>{title}</h2>
      <Link href={link}>
        View
      </Link>
    </div>
  );
};

export default DashboardOption;
