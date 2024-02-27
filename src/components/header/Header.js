import styles from './header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>My Balance</p>
        <p>
          <span>$921.48</span>
        </p>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
