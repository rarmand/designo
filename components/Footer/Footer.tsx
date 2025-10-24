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

      <address className={styles.footer__address}>
        {translator('address.name')}
        <br />
        {translator('address.street')}
        <br />
        {translator('address.city')}
      </address>

      <address className={styles.footer__address}>
        {translator('address.contact')}
        <br />
        <a
          href={`tel:${translator('address.phone.number')}`}
          className={styles.footer__contactLink}
        >
          {translator('address.phone.ticket')}
          {translator('address.phone.number')}
        </a>
        <br />
        <a
          href={`mailto:${translator('address.mail.address')}`}
          className={styles.footer__contactLink}
        >
          {translator('address.mail.ticket')}
          {translator('address.mail.address')}
        </a>
      </address>

      <div className={styles.footer__socialMedia}></div>
    </footer>
  );
};

export default Footer;
