// CaseInfo.js
"use client";
import React, { useState } from 'react';
import styles from "@/ui/dashboard/caseinfo/info.module.css"; // Import the CSS module

const CaseInfo = () => {
  // State variables to hold form data for each section
  const [ap1SubmittedDate, setAP1SubmittedDate] = useState('');
  const [corReceivedDate, setCORReceivedDate] = useState('');
  // Add state variables for other sections as needed

  return (
    <div className={styles.container}>
      <h1>Case Info</h1>

      {/* Section 1: AP1 Submitted Cases */}
      <section>
        <h2>AP1 Submitted Cases</h2>
        <form>
          <label>
            AP1 Submitted Date:
            <input type="date" value={ap1SubmittedDate} onChange={(e) => setAP1SubmittedDate(e.target.value)} />
          </label>
          <label>
            COR Received Date:
            <input type="date" value={corReceivedDate} onChange={(e) => setCORReceivedDate(e.target.value)} />
          </label>
          {/* Add other form fields for this section as needed */}
        </form>
      </section>

      {/* Add other sections with similar form structures */}
    </div>
  );
}

export default CaseInfo;
