'use client';

import { useTranslations } from 'next-intl';
import styles from './BlockLink.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type BlockLinkProps = {
  name: string;
  route: 'graphic' | 'web' | 'app';
};

const BlockLink = ({ name, route }: BlockLinkProps) => {
  const href = '/' + route;
  const translator = useTranslations('BlockLink');

  return (
    <Link href={href} className={styles.blockLink}>
      <h2 className={styles.title}>{name}</h2>
      <p>
        {translator('subtitle')}
        <Image
          src={'/home/icon-right-arrow.svg'}
          className={styles.icon}
          alt={translator('icon')}
          width={4}
          height={8}
          priority
        />
      </p>
    </Link>
  );
};

export default BlockLink;
