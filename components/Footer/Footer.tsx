'use client';

import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// SVG objects
import FacebookIconSvg from '@/assets/footer/icon-facebook.svg';
import InstagramIconSvg from '@/assets/footer/icon-instagram.svg';
import TwitterIconSvg from '@/assets/footer/icon-twitter.svg';
import YoutubeIconSvg from '@/assets/footer/icon-youtube.svg';
import PinterestIconSvg from '@/assets/footer/icon-pinterest.svg';

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
      <nav className={styles.menu}>
        <button
          className={styles.footerLogo}
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

        <hr className={styles.divider} />

        <Link
          aria-label={translator('links.about.label')}
          className={styles.menuLink}
          href={'/about'}
        >
          {translator('links.about.name')}
        </Link>

        <Link
          aria-label={translator('links.locations.label')}
          className={styles.menuLink}
          href={'/locations'}
        >
          {translator('links.locations.name')}
        </Link>

        <Link
          aria-label={translator('links.contact.label')}
          className={styles.menuLink}
          href={'/contact'}
        >
          {translator('links.contact.name')}
        </Link>
      </nav>

      <address className={styles.address}>
        {translator('address.name')}
        <br />
        {translator('address.street')}
        <br />
        {translator('address.city')}
      </address>

      <address className={styles.address}>
        {translator('address.contact')}
        <br />
        <a
          href={`tel:${translator('address.phone.number')}`}
          className={styles.contactLink}
        >
          {translator('address.phone.ticket')}
          {translator('address.phone.number')}
        </a>
        <br />
        <a
          href={`mailto:${translator('address.mail.address')}`}
          className={styles.contactLink}
        >
          {translator('address.mail.ticket')}
          {translator('address.mail.address')}
        </a>
      </address>

      <nav className={styles.socialMedia}>
        <Link
          href={facebookUrl}
          target='_blank'
          className={styles.socialMediaLink}
        >
          <FacebookIconSvg alt={translator('socialMedia.facebook')} />
        </Link>
        <Link
          href={youtubeUrl}
          target='_blank'
          className={styles.socialMediaLink}
        >
          <YoutubeIconSvg alt={translator('socialMedia.youtube')} />
        </Link>
        <Link
          href={twitterUrl}
          target='_blank'
          className={styles.socialMediaLink}
        >
          <TwitterIconSvg alt={translator('socialMedia.twitter')} />
        </Link>
        <Link
          href={pinterestUrl}
          target='_blank'
          className={styles.socialMediaLink}
        >
          <PinterestIconSvg alt={translator('socialMedia.pinterest')} />
        </Link>
        <Link
          href={instagramUrl}
          target='_blank'
          className={styles.socialMediaLink}
        >
          <InstagramIconSvg alt={translator('socialMedia.instagram')} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
