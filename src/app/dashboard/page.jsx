"use client";
import React from 'react';
import styles from "@/ui/dashboard/dashboard.module.css"
import DashboardOption from '@/components/DashboardOption';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.item}>
          
            <DashboardOption title="AP1 Submitted Cases" link="/ap1-submitted-cases" />
        </div>
          <div className={styles.item}>
            
              <DashboardOption title="AP1 Pending Cases" link="/ap1-pending-cases" />
          </div>
          <div className={styles.item}>
            
              <DashboardOption title="Requisition Received Cases" link="/requisition-received-cases" />
          </div>
          <div className={styles.item}>
            
              <DashboardOption title="Requisition Partially Responded" link="/requisition-partially-responded" />
          </div>
          <div className={styles.item}>
            
              <DashboardOption title="HMLR Cancellation in the next 7 days" link="/hmlr-cancellation" /></div>
          <div className={styles.item}>
            
              <DashboardOption title="Cancelled Cases with Priority in Place" link="/cancelled-cases-with-priority" /></div>
          <div className={styles.item}>
            
              <DashboardOption title="Cancelled Cases without Priority in Place" link="/cancelled-cases-without-priority" /></div>
          <div className={styles.item}>
            
              <DashboardOption title="COR FE Approval Pending" link="/cor-fe-approval-pending" />
          </div>
      </div>
  </div>
  );
};

export default DashboardPage;
