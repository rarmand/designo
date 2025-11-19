'use client';

import { useTranslations } from 'next-intl';
import ButtonLink from '../ButtonLink';
import styles from './Overlay.module.scss';

const Overlay = () => {
  const translator = useTranslations('Overlay');

  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__text}>
        <h1 className={styles.overlay__title}>{translator('title')}</h1>
        <p>{translator('description')}</p>
      </div>
      <ButtonLink route={'contact'} name={translator('button')}></ButtonLink>
    </div>
  );
};

export default Overlay;
