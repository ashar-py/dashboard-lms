"use client";

import React from 'react';
import styles from "@/ui/home/home.module.css"
import DashboardOption from '@/components/DashboardOption';

const HomePage = () => {
  
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

  
  const links = {
    "AP1 Submitted Cases": "home/ap1_submitted",
    "AP1 Pending Cases": "home/ap1_pending",
    "Requisition Received Cases": "home/req_recived_cases",
    "Requisition Partially Responded": "home/req_recived_cases",
    "HMLR Cancellation in the next 7 days": "home/hmlr",
    "Cancelled Cases with Priority in Place": "home/cancel_case_withpriority",
    "Cancelled Cases without Priority in Place": "home/cancel_cases_withoutpriority",
    "COR FE Approval Pending": "home/corfe_apv_pending"
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {Object.keys(counts).map(title => (
          <div className={styles.item} key={title}>
            {/* Use custom link for each DashboardOption */}
            <DashboardOption title={title} link={links[title]} count={counts[title]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
