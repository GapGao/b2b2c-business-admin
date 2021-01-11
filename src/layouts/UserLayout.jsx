import React from 'react';
import { Link, connect } from 'umi';

import style from './UserLayout.less';

import logo from '../assets/images/applogo.png';

const UserLayout = (props) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.header}>
            <Link to="/">
              <img alt="logo" className={style.logo} src={logo} />
              <span className={style.title}>优折仓商户端</span>
            </Link>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
