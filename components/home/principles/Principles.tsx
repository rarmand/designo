import styles from './Principles.module.scss';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

async function Principles() {
  const translator = await getTranslations('HomePage.principles');

  return (
    <section className={styles.principles}>
      {/*here*/}
      <div className={styles.principle}>
        <div className={styles.principleImage}>
          <div className={styles.principleBackgroundImage} />

          <Image
            src={'/home/illustration-passionate.svg'}
            alt={translator('passionate.alt')}
            fill
            className={styles.principleForegroundImage}
          />
        </div>

        <div className={styles.principleDescription}>
          <h3 className={styles.principleName}>
            {translator('passionate.name')}
          </h3>
          <p>{translator('passionate.description')}</p>
        </div>
      </div>

      {/*here*/}
      <div className={styles.principle}>
        <div className={styles.principleImage}>
          <div className={styles.principleBackgroundImage} />

          <Image
            src={'/home/illustration-resourceful.svg'}
            alt={translator('resourceful.alt')}
            fill
            className={styles.principleForegroundImage}
          />
        </div>

        <div className={styles.principleDescription}>
          <h3 className={styles.principleName}>
            {translator('resourceful.name')}
          </h3>
          <p>{translator('resourceful.description')}</p>
        </div>
      </div>

      {/*here*/}
      <div className={styles.principle}>
        <div className={styles.principleImage}>
          <div className={styles.principleBackgroundImage} />

          <Image
            src={'/home/illustration-friendly.svg'}
            alt={translator('friendly.alt')}
            fill
            className={styles.principleForegroundImage}
          />
        </div>

        <div className={styles.principleDescription}>
          <h3 className={styles.principleName}>
            {translator('friendly.name')}
          </h3>
          <p>{translator('friendly.description')}</p>
        </div>
      </div>
    </section>
  );
}

export default Principles;
