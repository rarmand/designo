'use client';

import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// images
import companyLogo from '@/public/footer/logo-light.png';
import facebookLogo from '@/public/footer/icon-facebook.svg';
import instagramLogo from '@/public/footer/icon-instagram.svg';
import twitterLogo from '@/public/footer/icon-twitter.svg';
import youtubeLogo from '@/public/footer/icon-youtube.svg';
import pinterestLogo from '@/public/footer/icon-pinterest.svg';

const Footer = () => {
  const translator = useTranslations('Footer');
  const router = useRouter();

  const youtubeUrl = 'https://www.youtube.com/';
  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://x.com/';
  const instagramUrl = 'https://www.instagram.com/';
  const pinterestUrl = 'https://pinterest.com/';

  const onLogoClick = () => router.push('/home');

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__menu}>
        <button
          className={styles.footer__button}
          onClick={onLogoClick}
          aria-label={translator('button')}
          type='button'
        >
          <Image
            src={'/footer/logo-light.png'}
            alt={translator('logo')}
            width={200}
            height={27}
            priority
          />
        </button>

        <hr className={styles.footer__line} />

        <Link
          aria-label={translator('links.about.label')}
          className={styles.footer__link}
          href={'/about'}
        >
          {translator('links.about.name')}
        </Link>

        <Link
          aria-label={translator('links.locations.label')}
          className={styles.footer__link}
          href={'/locations'}
        >
          {translator('links.locations.name')}
        </Link>

        <Link
          aria-label={translator('links.contact.label')}
          className={styles.footer__link}
          href={'/contact'}
        >
          {translator('links.contact.name')}
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
        <Link href={facebookUrl}>
          <Image
            src={facebookLogo}
            alt={translator('socialMedia.facebook')}
            width={24}
            height={24}
          />
        </Link>
        <Link href={youtubeUrl}>
          <Image
            src={youtubeLogo}
            alt={translator('socialMedia.youtube')}
            width={24}
            height={24}
          />
        </Link>
        <Link href={twitterUrl}>
          <Image
            src={twitterLogo}
            alt={translator('socialMedia.twitter')}
            width={24}
            height={24}
          />
        </Link>
        <Link href={pinterestUrl}>
          <Image
            src={pinterestLogo}
            alt={translator('socialMedia.pinterest')}
            width={24}
            height={24}
          />
        </Link>
        <Link href={instagramUrl}>
          <Image
            src={instagramLogo}
            alt={translator('socialMedia.instagram')}
            width={24}
            height={24}
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
