import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
