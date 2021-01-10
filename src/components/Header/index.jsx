import React from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  FolderViewOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import { history } from 'umi';

import HeaderSearch from './HeaderSearch';
import NoticeIconView from './NoticeIconView';

import logo from '../../assets/images/applogo.png';
import styles from './index.less';

class Header extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/account/${key}`);
  };

  render() {
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="change">
          <SyncOutlined />
          切换店铺
        </Menu.Item>
        <Menu.Item key="view">
          <FolderViewOutlined />
          访问店铺
        </Menu.Item>
        <Menu.Item key="account_manage">
          <UserOutlined />
          账户管理
        </Menu.Item>
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.right}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder="站内搜索"
          options={[]}
        />
        <NoticeIconView />
        <Dropdown overlayClassName={styles.container} overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={logo} alt="avatar" />
            <span>某某某</span>
          </span>
        </Dropdown>
      </div>
    );
  }
}

export default Header;
