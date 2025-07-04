import cn from 'classnames';
import type { NavigationProps } from './Navigation.props';

import styles from './Navigation.module.scss';

const Navigation = ({ className, ...props }: NavigationProps) => {
  return (
    <nav {...props}>
      <ul className={cn(className, styles.menu)}>
        <li>
          <a href="#">Как это работает</a>
        </li>
        <li>
          <a href="#">Цена</a>
        </li>
        <li>
          <a href="#">Отзывы</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
