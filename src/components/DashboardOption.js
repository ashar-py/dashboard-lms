import React from 'react';
import Link from 'next/link';

const DashboardOption = ({ title, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Link href={link}>
        View
      </Link>
    </div>
  );
};

export default DashboardOption;
