// CaseInfo.js
"use client";
import React, { useState } from "react";
import styles from "@/ui/home/caseinfo/info.module.css"; // Import the CSS module
import Accordion from "@/components/Accordion";

const CaseInfo = () => {
  const [deedsInDate, setdeedsInDate] = useState("");
  // Add state variables for the rest of the sections

  //   return (
  //     <div className={styles.container}>
  //       <section>
  //         <h4>AP1 Submitted Cases</h4>
  //         <form>
  //           <label>
  //             AP1 Submitted Date:
  //             <input
  //               type="date"
  //               value={ap1SubmittedDate}
  //               onChange={(e) => setAP1SubmittedDate(e.target.value)}
  //             />
  //           </label>
  //           <label>
  //             COR Received Date:
  //             <input
  //               type="date"
  //               value={corReceivedDate}
  //               onChange={(e) => setCORReceivedDate(e.target.value)}
  //             />
  //           </label>
  //         </form>
  //       </section>


  //       <section>
  //         <h4>AP1 Pending Cases</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>Requisition Received Cases</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>Requisition Partially Responded</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>HMLR Cancellation in the Next 7 Days</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>Cancelled Cases with Priority in Place</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>Cancelled Cases without Priority in Place</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>

  //       <section>
  //         <h4>COR FE Approval Pending</h4>
  //         <form>
  //           <label>
  //             COR Received Date:
  //             <input type="text" />
  //           </label>
  //         </form>
  //       </section>
  //     </div>
  //   );
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Post Completion Records</h2>
      <hr></hr>
      <div className={styles.accordion}>
          <Accordion title="Pre-AP1 Cases" content={
            <form>
              <label>
                Deeds Chased SSL1
                <input type="text" />
              </label>
              <label>
                Deeds Chased SSL2
                <input type="text" />
              </label>
              <label>
                Report Fee Earner no Deeds
                <input type="text" />
              </label>
              <label>
              Deeds Chased SSL3
                <input type="text" />
              </label>
              <label>
              Deeds Chased SSL4
                <input type="text" />
              </label>
            </form>

          } />
          <Accordion title="AP1" content={

            <form>
              <label>
                Deeds In
                <input type="date" value={deedsInDate} onChange={(e) => setdeedsInDate(e.target.value)}/>
              </label>
              <label>
                AP1 Submitted
                <input type="date" />
              </label>
            </form>

          } />
          <Accordion title="Requisition" content={

            <form>
              <label>
                Requisition Received
                <input type="date" />
              </label>
              <label>
                Requisition Dealt
                <input type="date" />
              </label>
              <label>
                Requisition Sent to FE
                <input type="text" />
              </label>
              <label>
                Requisition Responded by FE
                <input type="text" />
              </label>
            </form>

          } />
          <Accordion title="Warning of Cancellation" content={
            <form>
              <label>
                OS1 Expire Date
                <input type="date" />
              </label>
              <label>
                HMLR Cancellation
                <input type="date" />
              </label>
              <label>
                Warning of Cancellation Received
                <input type="text" />
              </label>
              <label>
                Extension Requested
                <input type="text" />
              </label>
            </form>

          } />
          <Accordion title="COR Received" content={
            <form>
              <label>
                COR Recieved
                <input type="date" />
              </label>
              <label>
                COR Sent to FE for Approval
                <input type="text" />
              </label>
              <label>
                COR Response from FE
                <input type="text" />
              </label>
              <label>
                COR Approved by FE
                <input type="text" />
              </label>
            </form>
          } />

      </div>
      </div>
  )
}

export default CaseInfo;
