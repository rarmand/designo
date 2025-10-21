'use client';

import styles from './BlockLink.module.scss';
import Link from 'next/link';

type BlockLinkProps = {
  name: string;
  route: 'graphic' | 'web' | 'app';
};

// TODO: add to dictionary
// TODO: add route
const BlockLink = ({ name, route }: BlockLinkProps) => {
  const href = '/' + route;

  return (
    <Link href={href} className={styles.blockLink}>
      <h2 className={styles.blockLink__title}>{name}</h2>
      <p>View projects</p>
    </Link>
  );
};

export default BlockLink;
