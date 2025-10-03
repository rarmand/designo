'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import text from '../i18n/en.json';

export default function Header() {
  // TODO: nadać RWD
  // BEM - block element modifier
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const iconMenuClose = '/mobile/icon-close.svg';
  const iconMenuOpen = '/mobile/icon-hamburger.svg';
  const logoDark = '/logo-dark.png';
  const logoLight = '/logo-light.png';

  const onLogoClick = () => router.push('/home');
  const onMenuButtonClick = () => setOpen(open => !open);

  /*
  - naprawa wyglądu menu, zeby był zgodny z designem - CSS
  - pojawianie się menu nad elementami stałymi, na razie menu odsuwa main od headera
  - zmiana kolorów svg i logo zaleznie od dark i light mode
  - po click na link znika menu
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
          <Image src={logoDark} alt='' width={200} height={27} />
        </button>
        <button
          className={styles.header__button}
          onClick={onMenuButtonClick}
          type='button'
          aria-expanded={open}
          aria-controls='main-menu'
        >
          <Image
            src={open ? iconMenuClose : iconMenuOpen}
            alt=''
            width={20}
            height={20}
          />
        </button>
      </div>

      {open && (
        <nav id='main-menu' className={styles.header__menu}>
          <Link
            className={styles.header__link}
            href='/about'
            aria-label='About our company'
          >
            {text['header.link.about']}
          </Link>

          <Link
            className={styles.header__link}
            href='/locations'
            aria-label='Locations'
          >
            {text['header.link.locations']}
          </Link>

          <Link
            className={styles.header__link}
            href='/contact'
            aria-label='Contact'
          >
            {text['header.link.contact']}
          </Link>
        </nav>
      )}
    </header>
  );
}
