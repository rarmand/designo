import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import logoLight from '@/public/header/logo-light.png';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const translator = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <Image src={logoLight} alt={'logo'} width={200} height={27} priority />

      <hr className={styles.footer__line} />

      <nav className={styles.footer__menu}>
        <Link className={styles.footer__link} href='/about'>
          {translator('links.about')}
        </Link>

        <Link className={styles.footer__link} href='/locations'>
          {translator('links.locations')}
        </Link>

        <Link className={styles.footer__link} href='/contact'>
          {translator('links.contact')}
        </Link>
      </nav>
      <div className={styles.footer__address}>
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>
      <div className={styles.footer__contact}>
        <p>Contact Us (Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </div>
      <div className={styles.footer__socialMedia}></div>
    </footer>
  );
};

export default Footer;
