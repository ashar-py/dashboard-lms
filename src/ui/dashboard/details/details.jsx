"use client";
import React from 'react'
import styles from "./details.module.css"
import Pagination from '@/ui/pagination/pagination'

const Details = () => {
  return (
    <div className={styles.mainContainer}>
        <h2 className={styles.title}>Application to Register to Upload</h2>
    <div class={styles.container}>
        <div className={styles.topBar}>
            Search element...
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
                    <button className={styles.button}>View Record</button>
                </td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td><button className={styles.button}>View Record</button></td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td><button className={styles.button}>View Record</button></td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td><button className={styles.button}>View Record</button></td>

			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td><button className={styles.button}>View Record</button></td>

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