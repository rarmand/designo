'use client';

import { useRouter } from 'next/navigation';
import styles from './NavButton.module.scss';

// type of props
type NavButtonProps = {
  name: string;
  variant?: 'primary' | 'secondary';
  route: 'about' | 'home' | 'locations' | 'contact';
};

// TODO: dodac testy
// TODO: poprawic BEM names
// function takes props
const NavButton = ({ name, variant = 'primary', route }: NavButtonProps) => {
  const router = useRouter();
  const variantClass = `${styles.button} ${styles[`button--${variant}`]}`;
  const onClick = () => router.push('/' + route);

  return (
    <button className={variantClass} onClick={onClick} type='button'>
      {name}
    </button>
  );
};

export default NavButton;
