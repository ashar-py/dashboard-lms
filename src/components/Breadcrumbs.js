"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/ui/breadcrumbs/breadcrumbs.module.css'

const Breadcrumbs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const breadcrumbs = pathname.split('/').filter(segment => segment);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.breadcrumb}>
        {breadcrumbs.map((segment, index) => {
          const path = `/${breadcrumbs.slice(0, index + 1).join('/')}`;

          return (
            <li key={index} className={styles.breadcrumbItem}>
              {index < breadcrumbs.length - 1 ? (
                <Link href={path}>
                  {segment+'  > '}
                </Link>
              ) : (
                <span>{segment}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
