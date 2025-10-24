import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// images
import companyLogo from '@/public/footer/logo-light.png';
import facebookLogo from '@/public/footer/icon-facebook.svg';
import instagramLogo from '@/public/footer/icon-instagram.svg';
import twitterLogo from '@/public/footer/icon-twitter.svg';
import youtubeLogo from '@/public/footer/icon-youtube.svg';
import pinterestLogo from '@/public/footer/icon-pinterest.svg';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const translator = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <Image src={companyLogo} alt={'logo'} width={200} height={27} priority />

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

      <nav className={styles.footer__socialMedia}>
        <Link href=""><Image src={facebookLogo} alt={translator('socialMedia.facebook')} width={24} height={24} /></Link>
        <Link href=""><Image src={youtubeLogo} alt={translator('socialMedia.youtube')} width={24} height={24} /></Link>
        <Link href=""><Image src={twitterLogo} alt={translator('socialMedia.twitter')} width={24} height={24} /></Link>
        <Link href=""><Image src={pinterestLogo} alt={translator('socialMedia.pinterest')} width={24} height={24} /></Link>
        <Link href=""><Image src={instagramLogo} alt={translator('socialMedia.instagram')} width={24} height={24} /></Link>
      </nav>
    </footer>
  );
};

export default Footer;
