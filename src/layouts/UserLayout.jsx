import React from 'react';
import { Link, connect } from 'umi';

import styles from './UserLayout.less';

import logo from '../assets/images/applogo.png';

const UserLayout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>优折仓</span>
            </Link>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
