// import Link from 'next/link';
'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import text from '../i18n/en.json';
import { useState } from 'react';

export default function Header() {
  // TODO: rózne logo w zalezności od view mode
  // TODO: jak ustawić ze hamburger pojawia się tylko gdy jest mobile
  // TODO: nadać RWD
  // BEM - block element modifier
  const [open, setOpen] = useState(false);

  const onLogoClick = () => {};

  const onMenuButtonClick = () => {
    // this.open = !open;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <button onClick={onLogoClick} type='button' aria-label='Click the icon'>
          <Image
            src='/logo-dark.png'
            alt={text['header.logo.alt']}
            width={200}
            height={27}
          />
        </button>
        <button
          onClick={onMenuButtonClick}
          type='button'
          // aria-label='Click the menu icon'
          //aria-controls='primary-navigation'
        >
          <Image
            src='/mobile/icon-hamburger.svg'
            alt={text['header.hamburger.alt']}
            width={20}
            height={20}
          />
        </button>
      </div>

      
      <nav className={styles.header__menu}>
        <ul id='primary-navigation' className='primary-navigation'>
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

          <li>
            <Link href='/contact' aria-label='Contact'>
              {text['header.link.contact']}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
