'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

// SVG objects
import IconMenu from '@/assets/header/icon-hamburger.svg';
import IconMenuClose from '@/assets/header/icon-close.svg';

// TODO: dodać menu dla tablet i desktop
export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const translator = useTranslations('Header');
  const onLogoClick = () => router.push('/home');
  const onMenuButtonClick = () => setOpen(open => !open);

  /*
  - jeszcze trzeba dodać cień na main gdy menu jest włączone
  - zastanowić się KIEDYŚ czy rozbijać to na mniejsze useable komponenty
  */
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <button
          className={styles.headerButton}
          onClick={onLogoClick}
          type='button'
        >
          <Image
            src={'/header/logo-dark.png'}
            alt={translator('logo')}
            width={200}
            height={27}
            priority
          />
        </button>
        <button
          className={styles.headerButton}
          onClick={onMenuButtonClick}
          type='button'
          aria-expanded={open}
          aria-controls='header-menu'
        >
          {open ? (
            <IconMenuClose
              alt={translator('hamburger.close')}
              width={20}
              height={20}
            />
          ) : (
            <IconMenu
              alt={translator('hamburger.menu')}
              width={20}
              height={20}
            />
          )}
        </button>
      </div>

      {open && (
        <nav id='header-menu' className={styles.menu}>
          <Link
            className={styles.menuLink}
            href='/about'
            onClick={onMenuButtonClick}
          >
            {translator('links.about')}
          </Link>

          <Link
            className={styles.menuLink}
            href='/locations'
            onClick={onMenuButtonClick}
          >
            {translator('links.locations')}
          </Link>

          <Link
            className={styles.menuLink}
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
