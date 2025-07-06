import type { MainInformerProps } from './MainInformer.props';
import Advantages from './Advantages/Advantages';
import { advantages } from '@features/mainPage/constants/advantages';
import Text from '@components/ui/Text/Text';
import Button from '@components/ui/Button/Button';
import MoneyMouseFaceIcon from '@assets/icons/money-mouse-face-icon.svg?react';
import MainImg from '@assets/icons/main-img.svg?react';
import StarIcon from '@assets/icons/star-icon.svg?react';

import styles from './MainInformer.module.scss';

const MainInformer = ({ id }: MainInformerProps) => {
  return (
    <section id={id} className={styles.mainInformer}>
      <div className={styles.mainInfo}>
        <div className={styles.textBlock}>
          <Text tag="h1" className={styles.title}>
            <Text tag="span">Лидогенерация</Text>
            <br />
            для бизнеса
          </Text>
          <div className={styles.subtitleBlock}>
            <Text className={styles.subtitle}>
              Покупайте только целевые лиды
              <br /> по фиксированной цене от 300 ₽
            </Text>
            <MoneyMouseFaceIcon className={styles.subtitleImg} />
          </div>
          <Button>Выбрать пакет лидов</Button>
        </div>
        <div className={styles.imageBlock}>
          <MainImg className={styles.mainImg} />
          <StarIcon className={styles.leftStar} />
          <StarIcon className={styles.rightStar} />
        </div>
      </div>
      <Advantages advantages={advantages} />
    </section>
  );
};

export default MainInformer;
