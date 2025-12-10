import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import styles from './Principle.module.scss';

type PrincipleProps = {
  type: 'passionate' | 'resourceful' | 'friendly';
};

async function Principle({ type }: PrincipleProps) {
  const imgPath = `/home/illustration-${type}.svg`;
  const backgroundImgClassName =
    type === 'passionate'
      ? styles.backgroundImage
      : `${styles.backgroundImage} ${styles[`${type}BackgroundImageTransform`]}`;
  const translationsPath = `HomePage.Principles.${type}`;
  const translator = await getTranslations(translationsPath);

  return (
    <div className={styles.principle}>
      <div className={styles.image}>
        <div className={backgroundImgClassName} />

        <Image
          src={imgPath}
          alt={translator('alt')}
          fill
          className={styles.foregroundImage}
        />
      </div>

      <div className={styles.description}>
        <h3 className={styles.name}>{translator('name')}</h3>
        <p>{translator('description')}</p>
      </div>
    </div>
  );
}

export default Principle;
