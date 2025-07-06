import type { AdvantageProps } from './Advantage.props';

import styles from './Advantage.module.scss';

const Advantage = ({ children }: AdvantageProps) => {
  return <div className={styles.advantage}>{children}</div>;
};

export default Advantage;
