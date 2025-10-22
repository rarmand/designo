import styles from './Home.module.scss';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import BlockLink from '@/components/BlockLink';

// images
import phoneImg from '@/public/home/image-hero-phone.png';
import passionateImg from '@/public/home/illustration-passionate.svg';
import resourcefulImg from '@/public/home/illustration-resourceful.svg';
import friendlyImg from '@/public/home/illustration-friendly.svg';

// interface HomePageProps {
//   params: {locale: string};
// }
// uzupełnić alt strings w pics - jak pisać alt strings?
// jak pisać style BEM dla rozbudowanych elementów?
// sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe

// przenieść teksty z principles to dictionary

// rozdzielić NOTES na grupy, za duzo zamieszania
// stworzyć ogólnie dostępny Footer
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
            src={phoneImg}
            alt={translator('image')}
            width={0}
            height={0}
            sizes='100vw'
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
          <Image
            src={passionateImg}
            alt={translator('principles.passionate.alt')}
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {translator('principles.passionate.name')}
            </h3>
            <p>{translator('principles.passionate.description')}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <Image
            src={resourcefulImg}
            alt={translator('principles.resourceful.alt')}
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {translator('principles.resourceful.name')}
            </h3>
            <p>{translator('principles.resourceful.description')}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <Image
            src={friendlyImg}
            alt={translator('principles.friendly.alt')}
            width={202}
            height={202}
          ></Image>
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
