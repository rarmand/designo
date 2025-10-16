import styles from './home.module.scss';
import text from '@/i18n/en.json';
import Image from 'next/image';
// images
import phoneImg from '@/public/home/image-hero-phone.png';
import passionateImg from '@/public/home/illustration-passionate.svg';
import resourcefulImg from '@/public/home/illustration-resourceful.svg';
import friendlyImg from '@/public/home/illustration-friendly.svg';

// uzupełnić alt strings w pics - jak pisać alt strings?
// jak pisać style BEM dla rozbudowanych elementów?
// sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe
// ustawić style ogólne wg designu
// ustawić czcionkę JOST zeby był większy wybór

// dodać setup dla i18n z odpowiedniej lib
// przenieść teksty z principles to dictionary

// stworzyć osobny komponent Button
// stworzyć BlockButton dla designs section
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

          <button className={styles.home__button}>{text['home.button']}</button>
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

      {/* <section className={styles.home__designs}>
        <div>
          <h2>Web Design</h2>
          <Link>View projects</Link>
        </div>
        <div>
          <h2>App Design</h2>
          <Link>View projects</Link>
        </div>
        <div>
          <h2>Graphic Design</h2>
          <Link>View projects</Link>
        </div>
      </section> */}
      <section className={styles.home__principles}>
        <div className={styles.home__principle}>
          <Image
            src={passionateImg}
            alt='Passionate'
            width={202}
            height={202}
          ></Image>
          <div className={styles.home__principleDescription}>
            <h3 className={styles.home__principleName}>Passionate</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
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
            <h3 className={styles.home__principleName}>Resourceful</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
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
            <h3 className={styles.home__principleName}>Friendly</h3>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
