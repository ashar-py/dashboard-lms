// CaseInfo.js
"use client";
// CaseInfo.js
"use client";
import React, { useState } from 'react';
import styles from "@/ui/dashboard/caseinfo/info.module.css"; // Import the CSS module

const CaseInfo = () => {
  // State variables to hold form data for each section
  const [ap1SubmittedDate, setAP1SubmittedDate] = useState('');
  const [corReceivedDate, setCORReceivedDate] = useState('');
  const [editPostCompletionsRecord, setEditPostCompletionsRecord] = useState('');
  const [caseRef, setCaseRef] = useState('');
  const [clientSursa, setClientSursa] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [pechow, setPechow] = useState('');
  const [exchange, setExchange] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [soltSubmission, setSoltSubmission] = useState('');
  const [soltSACSReg, setSoltSACSReg] = useState('');
  const [deedsChunend, setDeedsChunend] = useState('');
  const [deedsChandG, setDeedsChandG] = useState('');
  const [seedsChamedOnsen3, setSeedsChamedOnsen3] = useState('');
  const [deedsChasedGeshere, setDeedsChasedGeshere] = useState('');
  const [deedsChanedSRI, setDeedsChanedSRI] = useState('');
  const [deedsChaned, setDeedsChaned] = useState('');
  const [chasingRegardingHo, setChasingRegardingHo] = useState('');
  const [chasingClientRegarding, setChasingClientRegarding] = useState('');
  const [chasingMgntCeregarding, setChasingMgntCeregarding] = useState('');
  const [pcRemarks, setPcRemarks] = useState('');

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

      {/* Section 2: Edit Post Completions Record */}
      <section>
        <h2>Edit Post Completions Record</h2>
        <form>
          <label>
            Edit Post Completions Record:
            <input type="text" value={editPostCompletionsRecord} onChange={(e) => setEditPostCompletionsRecord(e.target.value)} />
          </label>
          {/* Add other form fields for this section as needed */}
        </form>
      </section>

      {/* Section 3: Case Ref */}
      <section>
        <h2>Case Ref</h2>
        <form>
          <label>
            Case Ref:
            <input type="text" value={caseRef} onChange={(e) => setCaseRef(e.target.value)} />
          </label>
          {/* Add other form fields for this section as needed */}
        </form>
      </section>

      {/* Repeat the pattern for the rest of the sections */}

    </div>
  );
}

export default CaseInfo;

