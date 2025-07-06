import Text from '@components/ui/Text/Text';
import type { AdvantagesBlockProps } from './AdvantagesBlock.props';

import styles from './AdvantagesBlock.module.scss';

const AdvantagesBlock = ({ id }: AdvantagesBlockProps) => {
  return (
    <section id={id} className={styles.advantagesBlock}>
      <Text tag="h2" className={styles.title}>
        Завалим ваш отдел продаж
        <br />
        <Text tag="span">целевыми Лидами</Text>
      </Text>
    </section>
  );
};

export default AdvantagesBlock;
