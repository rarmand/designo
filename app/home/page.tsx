import styles from './home.module.scss';
import text from '@/i18n/en.json';
import Image from 'next/image';

export default function Home() {
  const phoneImgPath = '/home/image-hero-phone.png';

  return (
    <main className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__introduction}>
          <h1 className={styles.home__title}>{text['home.title']}</h1>
          <p>{text['home.description']}</p>
        </div>

        <button className={styles.home__button}>{text['home.button']}</button>
        <Image src={phoneImgPath} alt='' width={100} height={200} />        </section>
    </main>
  );
}
