import ExpenceChart from './ExpenceChart';
import styles from './expences.module.scss';

const Expences = () => {
  return (
    <div className={styles.expences}>
      <div className={styles.expencesGraphTitle}>
        <h2>Spending - Last 7 days</h2>
      </div>
      <div className={styles.expencesGraph}>
        <ExpenceChart />
      </div>
      <div className={styles.expencesFooter}>
        <section className={styles.left}>
          <p>Total this month</p>
          <span>$ 478.33</span>
        </section>
        <section className={styles.right}>
          <span>+2.4%</span>
          <p>from last month</p>
        </section>
      </div>
    </div>
  );
};

export default Expences;
