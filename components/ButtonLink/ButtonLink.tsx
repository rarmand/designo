'use client';

import styles from './ButtonLink.module.scss';
import Link from 'next/link';

// type of props
type ButtonLinkProps = {
  name: string;
  variant?: 'primary' | 'secondary';
  route: 'about' | 'home' | 'locations' | 'contact';
};

// TODO: dodac testy
// TODO: poprawic BEM names
// function takes props
const ButtonLink = ({ name, variant = 'primary', route }: ButtonLinkProps) => {
  const variantClass = `${styles.buttonLink} ${styles[`buttonLink--${variant}`]}`;
  const href = '/' + route;

  return (
    <Link className={variantClass} href={href}>
      {name}
    </Link>
  );
};

export default ButtonLink;
