'use client';

import { useTranslations } from 'next-intl';
import ButtonLink from '../ButtonLink';
import styles from './Overlay.module.scss';

// TODO: check if additional div is needed
const Overlay = () => {
  const translator = useTranslations('Overlay');

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{translator('title')}</h1>
          <p>{translator('description')}</p>
        </div>
        <ButtonLink route={'contact'} name={translator('button')}></ButtonLink>
      </div>
    </div>
  );
};

export default Overlay;
