import styles from './home.module.scss';
import text from '@/i18n/en.json';
import Image from 'next/image';
import phoneImg from '@/public/home/image-hero-phone.png';

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__introduction}>
          <h1 className={styles.home__title}>{text['home.title']}</h1>
          <p>{text['home.description']}</p>
        </div>

        <button className={styles.home__button}>{text['home.button']}</button>
        
        <div className={styles.home__phoneImg}>
          <Image src={phoneImg} alt='' fill />        
        </div>
      </section>
    </main>
  );
}
