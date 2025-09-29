import styles from '../page.module.css';
import text from '../../i18n/en.json';

export default function Home() {
  return (
    <main className='home main'>
      <div className='description'>
        <h1>{text['home.title']}</h1>
        <p>{text['home.description']}</p>

        <button>{text['home.button']}</button>
      </div>
    </main>
  );
}
