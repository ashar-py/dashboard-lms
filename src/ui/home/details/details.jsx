"use client";
import React from 'react'
import styles from "./details.module.css"
import Pagination from '@/ui/pagination/pagination';
import Link from 'next/link';
import { MdSearch } from "react-icons/md";

const Details = () => {
  return (
    <div className={styles.mainContainer}>
		 <h3 className={styles.title}>DASHBOARD</h3>
		 <hr></hr>
        <h2 className={styles.title}>Application to Register to Upload</h2>
		<hr></hr>
    <div class={styles.container}>
        <div className={styles.topBar}>
            <MdSearch/> &nbsp;Search element...
        </div>
	<table className={styles.table}>
		<thead>
			<tr>
				<th>Case Reference #</th>
				<th>Client Name</th>
				<th>FE Name</th>
				<th></th>
			</tr>
		</thead>
		<tbody className={styles.content}>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				
				<td>
				<Link href="./12345"> <button className={styles.button} >View Record</button></Link>
                </td>

			</tr>
		</tbody>
	</table>
    <div className={styles.botBar}>
        {/* <Pagination></Pagination> */}
    </div>
</div>
</div>
  )
}

export default Details