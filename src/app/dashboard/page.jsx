"use client";
import React from 'react';
import Link from 'next/link';
import DashboardOption from '@/components/DashboardOption';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardOption title="AP1 Submitted Cases" link="/ap1-submitted-cases" />
      <DashboardOption title="AP1 Pending Cases" link="/ap1-pending-cases" />
      <DashboardOption title="Requisition Received Cases" link="/requisition-received-cases" />
      <DashboardOption title="Requisition Partially Responded" link="/requisition-partially-responded" />
      <DashboardOption title="HMLR Cancellation in the next 7 days" link="/hmlr-cancellation" />
      <DashboardOption title="Cancelled Cases with Priority in Place" link="/cancelled-cases-with-priority" />
      <DashboardOption title="Cancelled Cases without Priority in Place" link="/cancelled-cases-without-priority" />
      <DashboardOption title="COR FE Approval Pending" link="/cor-fe-approval-pending" />
    </div>
  );
};

export default DashboardPage;
