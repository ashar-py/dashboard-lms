// CaseInfo.js
"use client";
import React, { useState } from "react";
import styles from "@/ui/dashboard/caseinfo/info.module.css"; // Import the CSS module

const CaseInfo = () => {
  const [ap1SubmittedDate, setAP1SubmittedDate] = useState("");
  const [corReceivedDate, setCORReceivedDate] = useState("");
  const [editPostCompletionsRecord, setEditPostCompletionsRecord] =
    useState("");
  const [caseRef, setCaseRef] = useState("");
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
      <h2 className={styles.title}>Post Completion Records</h2>
      <hr></hr>
      <div className={styles.tiles}>
        <div className={styles.basicInfo}>
          <h4>Basic Info</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className={styles.red}>
          <h4>Pre AP1</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className={styles.blue}>
          <h4>AP1</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label><label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className={styles.green}>
          <h4>Warning of Cancellation</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className={styles.black}>
          <h4>Requisition</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
        <div className={styles.yellow}>
          <h4>COR Received</h4>
          <form>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
            <label>
              Case Ref #:
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CaseInfo;
