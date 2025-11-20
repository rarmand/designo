import styles from './Home.module.scss';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import BlockLink from '@/components/BlockLink';

/*
 * * * TODO:
 *
 * jak pisać style BEM dla rozbudowanych elementów?
 * sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe
 * dodać aria-labels do wszystkich wymaganych elementów zgodnie z NOTES
 * dodać prettier format na Ctrl Save
 *
 * połaczyć Overlay z Footer jako jedno
 * zacząć pisać testy dla components
 *
 */

export default async function HomePage() {
  const translator = await getTranslations('HomePage');

  return (
    <main className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__introduction}>
          <div className={styles.home__text}>
            <h1 className={styles.home__title}>{translator('title')}</h1>
            <p>{translator('description')}</p>
          </div>

          <ButtonLink name={translator('button')} route='about' />
        </div>

        <div className={styles.home__phoneImg}>
          <Image
            src={'/home/image-hero-phone.png'}
            alt={translator('image')}
            width={624}
            height={913}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

      <section className={styles.home__designs}>
        <BlockLink name={translator('designs.web')} route='web' />
        <BlockLink name={translator('designs.app')} route='app' />
        <BlockLink name={translator('designs.graphic')} route='graphic' />
      </section>

      <section className={styles.home__principles}>
        <div className={styles.home__principle}>
          <div className={styles.home__principleImage}>
            <div className={styles.home__principleBackgroundImage} />

            <Image
              src={'/home/illustration-passionate.svg'}
              alt={translator('principles.passionate.alt')}
              fill
              className={styles.principleForegroundImage}
            />
          </div>

          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {translator('principles.passionate.name')}
            </h3>
            <p>{translator('principles.passionate.description')}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <div className={styles.home__principleImage}>
            <div className={styles.home__principleBackgroundImage} />

            <Image
              src={'/home/illustration-resourceful.svg'}
              alt={translator('principles.resourceful.alt')}
              fill
              className={styles.principleForegroundImage}
            />
          </div>

          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {translator('principles.resourceful.name')}
            </h3>
            <p>{translator('principles.resourceful.description')}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <div className={styles.home__principleImage}>
            <div className={styles.home__principleBackgroundImage} />

            <Image
              src={'/home/illustration-friendly.svg'}
              alt={translator('principles.friendly.alt')}
              fill
              className={styles.principleForegroundImage}
            />
          </div>

          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {translator('principles.friendly.name')}
            </h3>
            <p>{translator('principles.friendly.description')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
