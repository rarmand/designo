'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import text from '../i18n/en.json';

export default function Header() {
  // TODO: rózne logo w zalezności od view mode
  // TODO: jak ustawić ze hamburger pojawia się tylko gdy jest mobile
  // TODO: nadać RWD
  // BEM - block element modifier
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onLogoClick = () => router.push('/home');
  const onMenuButtonClick = () => setOpen(open => !open);

  /*
  - stworzyć rozmieszczenie logo i headera
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
          <Image src='/logo-dark.png' alt='' width={200} height={27} />
        </button>
        <button
          className={styles.header__button}
          onClick={onMenuButtonClick}
          type='button'
          aria-expanded={open}
          aria-controls='main-menu'
        >
          <Image
            src={open ? '/mobile/icon-close.svg' : '/mobile/icon-hamburger.svg'}
            alt=''
            width={20}
            height={20}
          />
        </button>
      </div>

      {open && (
        <nav id='main-menu' className={styles.header__menu}>
          <ul>
            <li>
              <Link href='/about' aria-label='About our company'>
                {text['header.link.about']}
              </Link>
            </li>

            <li>
              <Link href='/locations' aria-label='Locations'>
                {text['header.link.locations']}
              </Link>
            </li>

            <li >
              <Link href='/contact' aria-label='Contact'>
                {text['header.link.contact']}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
