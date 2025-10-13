import styles from './home.module.scss';
import text from '@/i18n/en.json';
import Image from 'next/image';
// images
import phoneImg from '@/public/home/image-hero-phone.png';

// uzupełnić alt strings w pics
// stworzyć osobny komponent Button
// dodać setup dla i18n z odpowiedniej lib
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
          <Image src={phoneImg} alt='' width='0' height='0' sizes='100vw' />
        </div>
      </section>

      <section className={styles.home__next}>
        No text
      </section>
    </main>
  );
}
