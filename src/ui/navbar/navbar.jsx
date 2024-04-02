"use client";
import { usePathname } from "next/navigation";
import styles from "@/ui/navbar/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.container}>
        <button type="button" onClick={router.back}> &lt; &nbsp;Go Back</button>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <Link href="/">
        <button className={styles.logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Navbar;
