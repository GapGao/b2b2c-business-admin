import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'umi';

import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        view-mailbox
      </Button>
    </a>
    <Link to="/">
      <Button size="large">back-home</Button>
    </Link>
  </div>
);

const RegisterResult = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={<div className={styles.title}>AntDesign@example.com</div>}
    subTitle="activation-email"
    extra={actions}
  />
);

export default RegisterResult;
