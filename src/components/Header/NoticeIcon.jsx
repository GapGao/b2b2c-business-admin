import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Spin, Tabs, Dropdown } from 'antd';
import classNames from 'classnames';
import useMergedState from 'rc-util/es/hooks/useMergedState';

import styles from './NoticeIcon.less';
import NoticeList from './NoticeList';

import indexStyles from './index.less';

const { TabPane } = Tabs;

const NoticeIcon = (props) => {
  const getNotificationBox = () => {
    const {
      children,
      loading,
      onClear,
      onTabChange,
      onItemClick,
      onViewMore,
      clearText,
      viewMoreText,
    } = props;

    if (!children) {
      return null;
    }

    const panes = [];
    React.Children.forEach(children, (child) => {
      if (!child) {
        return;
      }

      const { list, title, count, tabKey, showClear, showViewMore } = child.props;
      const len = list && list.length ? list.length : 0;
      const msgCount = count || count === 0 ? count : len;
      const tabTitle = msgCount > 0 ? `${title} (${msgCount})` : title;
      panes.push(
        <TabPane tab={tabTitle} key={tabKey}>
          <NoticeList
            {...child.props}
            clearText={clearText}
            viewMoreText={viewMoreText}
            data={list}
            onClear={() => {
              onClear?.(title, tabKey);
            }}
            onClick={(item) => {
              onItemClick?.(item, child.props);
            }}
            onViewMore={(event) => {
              onViewMore?.(child.props, event);
            }}
            showClear={showClear}
            showViewMore={showViewMore}
            title={title}
          />
        </TabPane>,
      );
    });
    return (
      <Spin spinning={loading} delay={300}>
        <Tabs className={styles.tabs} onChange={onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  };

  const { className, count } = props;
  const [visible, setVisible] = useMergedState(false, {
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange,
  });
  const notificationBox = getNotificationBox();
  const trigger = (
    <span
      className={classNames(className, styles.noticeButton, {
        opened: visible,
      })}
    >
      <Badge
        count={count}
        style={{
          boxShadow: 'none',
        }}
        className={styles.badge}
      >
        <BellOutlined className={styles.icon} />
      </Badge>
    </span>
  );

  if (!notificationBox) {
    return trigger;
  }

  return (
    <Dropdown
      placement="bottomRight"
      overlay={notificationBox}
      overlayClassName={classNames(indexStyles.container, styles.popover)}
      trigger={['click']}
      visible={visible}
      onVisibleChange={setVisible}
    >
      {trigger}
    </Dropdown>
  );
};

NoticeIcon.defaultProps = {
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
};
NoticeIcon.Tab = NoticeList;
export default NoticeIcon;
