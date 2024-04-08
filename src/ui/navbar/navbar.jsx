"use client";
import { usePathname } from "next/navigation";
import styles from "@/ui/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.logo}><Link href="/home"><Image src="/ANZA.jpg" alt="" width="50" height="50"/></Link></div>
      {/* <div className={styles.title}>{pathname.split("/").pop()}</div> */}
      <div className={styles.menu}>
      <Link href="/home" className={styles.menuItem}>
        HOME
      </Link>
      <Link href="#" className={styles.menuItem}>
        DASHBOARD
      </Link>
      <Link href="#" className={styles.menuItem}>
        ABOUT
      </Link>
      <Link href="/">
        <button className={styles.logout}>Logout</button>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
