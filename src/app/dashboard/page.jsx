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

  // Define custom links for each title
  const links = {
    "AP1 Submitted Cases": "dashboard/ap1_submitted",
    "AP1 Pending Cases": "dashboard/ap1_pending",
    "Requisition Received Cases": "dashboard/req_recived_cases",
    "Requisition Partially Responded": "dashboard/req_recived_cases",
    "HMLR Cancellation in the next 7 days": "dashboard/hmlr",
    "Cancelled Cases with Priority in Place": "dashboard/cancel_case_withpriority",
    "Cancelled Cases without Priority in Place": "dashboard/cancel_cases_withoutpriority",
    "COR FE Approval Pending": "dashboard/corfe_apv_pending"
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

export default DashboardPage;
