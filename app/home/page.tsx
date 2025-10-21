import styles from './Home.module.scss';
import text from '@/i18n/en.json';
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import BlockLink from '@/components/BlockLink';

// images
import phoneImg from '@/public/home/image-hero-phone.png';
import passionateImg from '@/public/home/illustration-passionate.svg';
import resourcefulImg from '@/public/home/illustration-resourceful.svg';
import friendlyImg from '@/public/home/illustration-friendly.svg';

// uzupełnić alt strings w pics - jak pisać alt strings?
// jak pisać style BEM dla rozbudowanych elementów?
// sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe

// dodać setup dla i18n z odpowiedniej lib
// przenieść teksty z principles to dictionary

// stworzyć ogólnie dostępny Footer
export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__introduction}>
          <div className={styles.home__text}>
            <h1 className={styles.home__title}>{text['home.title']}</h1>
            <p>{text['home.description']}</p>
          </div>

          <ButtonLink name={text['home.button']} route='about' />
        </div>

        <div className={styles.home__phoneImg}>
          <Image
            src={phoneImg}
            alt='image hero phone'
            width={0}
            height={0}
            sizes='100vw'
          />
        </div>
      </section>

      <section className={styles.home__designs}>
        <BlockLink name='Web Design' route='web' />
        <BlockLink name='App Design' route='app' />
        <BlockLink name='Graphic Design' route='graphic' />
      </section>

      <section className={styles.home__principles}>
        <div className={styles.home__principle}>
          <Image
            src={passionateImg}
            alt='Passionate'
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {text['home.principle.passionateName']}
            </h3>
            <p>{text['home.principle.passionateText']}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <Image
            src={resourcefulImg}
            alt='Resourceful'
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {text['home.principle.resourcefulName']}
            </h3>
            <p>{text['home.principle.resourcefulText']}</p>
          </div>
        </div>
        <div className={styles.home__principle}>
          <Image
            src={friendlyImg}
            alt='Friendly'
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>
              {text['home.principle.friendlyName']}
            </h3>
            <p>{text['home.principle.friendlyText']}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
