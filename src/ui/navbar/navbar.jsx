"use client";
import { usePathname } from "next/navigation";
import styles from "@/ui/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}><Link href="/home"><Image src="/logo_standard.png" alt="" width="70" height="50"/></Link></div>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <Link href="/">
        <button className={styles.logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Navbar;
