import Logo from '@components/Logo/Logo';
import Navigation from './Navigation/Navigation';
import WhatsAppIcon from '@assets/icons/whatsapp-icon.svg?react';
import TelegramIcon from '@assets/icons/telegram-icon.svg?react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <div className={styles.contacts}>
        <a href="https://wa.me/#" target="_blank" className={styles.whatsapp}>
          <WhatsAppIcon />
        </a>
        <a href="#" target="_blank" className={styles.telegram}>
          <TelegramIcon />
        </a>
        <a href="tel:+74951183282" className={styles.phone}>
          +7 495 118-32-82
        </a>
      </div>
    </header>
  );
};

export default Header;
