'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

// images
import logoDark from '@/public/header/logo-dark.png';
import iconMenuOpen from '@/public/header/icon-hamburger.svg';
import iconMenuClose from '@/public/header/icon-close.svg';

export default function Header() {
  // TODO: nadać RWD
  // BEM - block element modifier
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const translator = useTranslations('Header');
  const onLogoClick = () => router.push('/home');
  const onMenuButtonClick = () => setOpen(open => !open);

  /*
  - zmiana kolorów svg i logo zaleznie od dark i light mode - doczytac jak to ma wygladac
  - jeszcze trzeba dodać cień na main gdy menu jest włączone
  - zastanowić się KIEDYŚ czy rozbijać to na mniejsze useable komponenty
  - problemy z pobieraniem css z variables - jak to w koncu ma działać?
  */
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <button
          className={styles.header__button}
          onClick={onLogoClick}
          type='button'
        >
          <Image
            src={logoDark}
            alt={translator('logo')}
            width={200}
            height={27}
            priority
          />
        </button>
        <button
          className={styles.header__button}
          onClick={onMenuButtonClick}
          type='button'
          aria-expanded={open}
          aria-controls='header-menu'
        >
          <Image
            src={open ? iconMenuClose : iconMenuOpen}
            alt={translator('hamburger')}
            width={20}
            height={20}
          />
        </button>
      </div>

      {open && (
        <nav id='header-menu' className={styles.header__menu}>
          <Link
            className={styles.header__link}
            href='/about'
            onClick={onMenuButtonClick}
          >
            {translator('links.about')}
          </Link>

          <Link
            className={styles.header__link}
            href='/locations'
            onClick={onMenuButtonClick}
          >
            {translator('links.locations')}
          </Link>

          <Link
            className={styles.header__link}
            href='/contact'
            onClick={onMenuButtonClick}
          >
            {translator('links.contact')}
          </Link>
        </nav>
      )}
    </header>
  );
}
