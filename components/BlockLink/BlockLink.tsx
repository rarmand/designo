'use client';

import styles from './BlockLink.module.scss';
import Link from 'next/link';

type BlockLinkProps = {
  name: string;
};

// TODO: add to dictionary
// TODO: add route
const BlockLink = ({ name }: BlockLinkProps) => {
  return (
    <Link href='/' className={styles.blockLink}>
      <h2 className={styles.blockLink__title}>{name}</h2>
      <p>View projects</p>
    </Link>
  );
};

export default BlockLink;
