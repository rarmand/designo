import BlockLink from '@/components/ui/BlockLink';
import styles from './Designs.module.scss';
import { getTranslations } from 'next-intl/server';

async function Designs() {
  const translator = await getTranslations('HomePage.Designs');

  return (
    <section className={styles.designs}>
      <BlockLink name={translator('web')} route='web' />
      <BlockLink name={translator('app')} route='app' />
      <BlockLink name={translator('graphic')} route='graphic' />
    </section>
  );
}

export default Designs;
