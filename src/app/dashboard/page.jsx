"use client";

import React from 'react';
import styles from "@/ui/dashboard/dashboard.module.css"
import DashboardOption from '@/components/DashboardOption';

const DashboardPage = () => {
  
  const counts = {
    "AP1 Submitted Cases": 10,
    "AP1 Pending Cases": 5,
    "Requisition Received Cases": 8,
    "Requisition Partially Responded": 3,
    "HMLR Cancellation in the next 7 days": 2,
    "Cancelled Cases with Priority in Place": 4,
    "Cancelled Cases without Priority in Place": 6,
    "COR FE Approval Pending": 7
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {Object.keys(counts).map(title => (
          <div className={styles.item} key={title}>
            <DashboardOption title={title} link={`/${title.toLowerCase().replace(/\s+/g, '-')}`} count={counts[title]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

