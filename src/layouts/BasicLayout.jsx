import React, { useRef } from 'react';
import Header from '@/components/header';
import ProLayout from '@ant-design/pro-layout';
import { Link, connect, history } from 'umi';

import logo from '../assets/images/applogo.png';

const BasicLayout = (props) => {
  const {
    route,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef([]);

  return (
    <>
      <ProLayout
        logo={logo}
        route={route}
        {...settings}
        onMenuHeaderClick={() => history.push('/')}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (
            menuItemProps.isUrl ||
            !menuItemProps.path ||
            location.pathname === menuItemProps.path
          ) {
            return defaultDom;
          }

          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        rightContentRender={() => <Header />}
        postMenuData={(menuData) => {
          menuDataRef.current = menuData || [];
          return menuData || [];
        }}
      >
        {children}
      </ProLayout>
    </>
  );
};

export default connect(({ settings }) => ({
  settings,
}))(BasicLayout);
