'use client';

import { useRouter } from 'next/navigation';
import styles from './NavButton.module.scss';

// type of props
type NavButtonProps = {
  name: string;
  variant?: 'primary' | 'secondary';
  route: 'about' | 'home' | 'locations' | 'contact';
};

// function takes props
const NavButton = ({ name, variant = 'primary', route }: NavButtonProps) => {
  const router = useRouter();
  // do zweryfikowania czy da sie to lepiej napisać
  const onClick = () => {
    const path = '/' + route;
    router.push(path);
  };

  return (
    <button className={styles.button} onClick={onClick} type='button'>
      {name}
    </button>
  );
};

export default NavButton;
