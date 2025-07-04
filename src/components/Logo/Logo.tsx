import LogoIcon from '@assets/icons/logo.svg?react';
import type { LogoProps } from './Logo.props';

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <a href="#" className={className} {...props}>
      <LogoIcon />
    </a>
  );
};

export default Logo;
