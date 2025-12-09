import styles from './Home.module.scss';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import Designs from '@/components/home/designs';
import Principles from '@/components/home/principles';

/*
 * * * TODO:
 *
 * sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe
 * dodać aria-labels do wszystkich wymaganych elementów zgodnie z NOTES
 * zainstalować lib do testowania, poczytać o narzędziach do testowania
 * poczytać o podejściu do testowania
 * 
 * 
  1.  Podział Home Page na mniejsze komponenty
	2.	Dobre testy tych komponentów
  3.  Podział Header i Footer na mniejsze komponenty
  4.  Testowanie komponentów.
	5.	Rozszerzenie responsywności na tablet i desktop
 * 
 *
 */

export default async function HomePage() {
  const translator = await getTranslations('HomePage');

  return (
    <main className={styles.home}>
      {/*here*/}
      <section className={styles.header}>
        <div className={styles.introduction}>
          <div className={styles.text}>
            <h1 className={styles.title}>{translator('title')}</h1>
            <p>{translator('description')}</p>
          </div>

          <ButtonLink name={translator('button')} route='about' />
        </div>

        <div className={styles.phoneImg}>
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

      {/*here*/}
      <Designs />

      {/*here*/}
      <Principles />
    </main>
  );
}
