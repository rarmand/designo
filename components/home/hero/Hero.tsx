import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import styles from './Hero.module.scss';

async function Hero() {
  const translator = await getTranslations('HomePage.Hero');

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
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
  );
}

export default Hero;
