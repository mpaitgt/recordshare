import React from 'react';
import styles from './Text.module.scss';

const Text = ({ variant, children, htmlFor }) => {
  switch(variant) {
    case 'headline':
      return <h1 className={styles.headline}>{children}</h1>;
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    case 'h4':
      return <h4 className={styles.h4}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.h5}>{children}</h5>;
    case 'h6':
      return <h6 className={styles.h6}>{children}</h6>;
    case 'label-block':
      return <label className={styles.label_block} htmlFor={htmlFor}>{children}</label>;
    case 'label-inline':
      return <label className={styles.label_inline} htmlFor={htmlFor}>{children}</label>;
    case 'description':
      return <p className={styles.description}>{children}</p>
    case 'p1':
      return <p className={styles.p1}>{children}</p>;
    case 'p2':
      return <p className={styles.p2}>{children}</p>;
    case 'tag':
      return <p className={styles.tag}>{children}</p>;
    case 'likes':
      return <span className={styles.likes}>{children}</span>;
    default: 
      return <p className={styles.standard}>{children}</p>;
  }
}

export default Text;