import styles from './Principles.module.scss';
import Principle from './Principle/Principle';

function Principles() {
  return (
    <section className={styles.principles}>
      <Principle type='passionate' />
      <Principle type='resourceful' />
      <Principle type='friendly' />
    </section>
  );
}

export default Principles;
