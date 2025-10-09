import styles from './home.module.scss';
import text from '../../i18n/en.json';

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.home__introduction}>
        <h1 className={styles.home__header}>{text['home.title']}</h1>
        <p className={styles.home__paragraph}>{text['home.description']}</p>
      </section>

      <button className={styles.home__button}>{text['home.button']}</button>
    </main>
  );
}
