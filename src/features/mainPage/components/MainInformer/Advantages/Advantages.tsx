import type { AdvantagesProps } from './Advantages.props';

import styles from './Advantages.module.scss';
import Advantage from '../Advantage/Advantage';
import Text from '@components/ui/Text/Text';

const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <div className={styles.advantages}>
      {advantages.map(adv => (
        <Advantage>
          <Text className={styles.advantageText}>{adv}</Text>
        </Advantage>
      ))}
    </div>
  );
};

export default Advantages;
