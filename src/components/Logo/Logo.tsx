import cn from 'classnames';

import LogoIcon from '@assets/icons/logo.svg?react';
import type { LogoProps } from './Logo.props';

import styles from './Logo.module.scss';

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <a href="#" className={cn(className, styles.logoLink)} {...props}>
      <LogoIcon className={styles.logo} />
    </a>
  );
};

export default Logo;
