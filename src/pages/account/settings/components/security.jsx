import React, { Component } from 'react';
import { List } from 'antd';

const passwordStrength = {
  strong: <span className="strong">Strong</span>,
  medium: <span className="medium">Medium</span>,
  weak: <span className="weak">Weak</span>,
};

class SecurityView extends Component {
  getData = () => [
    {
      title: '账户密码',
      description: <>账户密码：{passwordStrength.strong}</>,
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '密保手机',
      description: '已绑定手机：138****8293',
      actions: [<a key="Modify">修改</a>],
    },
  ];

  render() {
    const data = this.getData();
    return (
      <>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default SecurityView;
