// "use client";
// import React from 'react';
// import { useMemo } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';
// import styles from '@/ui/dashboard/table/table.module.css';

// const data = [
//   {
//     caseRefNumber: '100001',
//     clientName: 'Client A',
//     feName: 'FE 1',
//   },
//   {
//     caseRefNumber: '100002',
//     clientName: 'Client B',
//     feName: 'FE 2',
//   },
//   // Add more dummy data here to reach at least 20 members
// ];

// const Example = () => {
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'caseRefNumber',
//         header: 'Cases Reference Number',
//         size: 200,
//         // Render the cell content as a hyperlink
//         Cell: ({ cellValue }) => <a href={`/case-details/${cellValue}`} className={styles.link}>{cellValue}</a>,
//       },
//       {
//         accessorKey: 'clientName',
//         header: 'Client Name',
//         size: 200,
//       },
//       {
//         accessorKey: 'feName',
//         header: 'FE Name',
//         size: 150,
//       },
//     ],
//     [],
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data,
//   });

//   return <MaterialReactTable table={table} />;
// };

// export default Example;

import React from 'react'
import Details from "@/ui/dashboard/details/details.jsx"

function page() {
  return (
    <div>
      <Details></Details>
    </div>
  )
}

export default page