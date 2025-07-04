import type { ElementType } from 'react';
import cn from 'classnames';

import type { TextProps } from './Text.props';

import styles from './Text.module.scss';

const Text = ({ tag = 'p', children, className, ...props }: TextProps) => {
  const Tag: ElementType = `${tag}`;

  return (
    <Tag className={cn(styles[`${tag}`], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
