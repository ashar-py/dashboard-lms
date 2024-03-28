"use client";
import { usePathname } from "next/navigation";
import styles from "@/ui/navbar/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/dashboard">
        <button> &lt; &nbsp;Go Back</button>
      </Link>
      <Link href="/">
        <button className={styles.logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Navbar;
