import React, { Component, Fragment } from 'react';
import { TaobaoOutlined } from '@ant-design/icons';
import { List } from 'antd';

class BindingView extends Component {
  getData = () => [
    {
      title: '绑定淘宝',
      description: '当前未绑定淘宝账号',
      actions: [<a key="Bind">绑定</a>],
      avatar: <TaobaoOutlined className="taobao" />,
    },
  ];

  render() {
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default BindingView;
