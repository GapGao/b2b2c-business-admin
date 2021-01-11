import React from 'react';
import { Button, Form, Input, Table } from 'antd';

import style from './PublishGoods.less';

import logo from '../../assets/images/applogo.png';

const columns = [
  {
    title: '商品名',
    dataIndex: 'goodsNameRow',
    key: 'goodsName',
    render: ({ goodsName }) => (
      <div className={style.goodsNameRow}>
        <div className={style.pic}>
          <img src={logo} />
        </div>
        <div className={style.goodsDetail}>
          <Button type="link" className={style.goodsName}>
            {goodsName}
          </Button>
          <div></div>
        </div>
      </div>
    ),
  },
  {
    title: '价格（元）',
    dataIndex: 'goodsPrice',
    key: 'goodsPrice',
    sorter: true,
    render: (goodsPrice) => goodsPrice.toFixed(2),
  },
  {
    title: '访问量',
    dataIndex: 'visitsRow',
    key: 'visits',
    render: ({ uv, pv }) => (
      <div>
        <div>访客数：{uv}</div>
        <div>浏览量：{pv}</div>
      </div>
    ),
  },
  {
    title: '库存',
    key: 'stock',
    dataIndex: 'stock',
    sorter: true,
  },
];

const data = [
  {
    goodsName: '板鞋',
    pic: '',
    goodsPrice: 32,
    uv: 1,
    pv: 2,
    stock: 333,
  },
  {
    goodsName: '板鞋',
    pic: '',
    goodsPrice: 32,
    uv: 1,
    pv: 2,
    stock: 333,
  },
  {
    goodsName: '板鞋',
    pic: '',
    goodsPrice: 32,
    uv: 1,
    pv: 2,
    stock: 333,
  },
  {
    goodsName: '板鞋',
    pic: '',
    goodsPrice: 32,
    uv: 1,
    pv: 2,
    stock: 333,
  },
  {
    goodsName: '板鞋',
    pic: '',
    goodsPrice: 32,
    uv: 1,
    pv: 2,
    stock: 333,
  },
];

const PublishGoods = () => {
  const dataSource = data.map((item, key) => ({
    key,
    ...item,
    goodsNameRow: { goodsName: item.goodsName, pic: item.pic },
    visitsRow: {
      uv: item.uv,
      pv: item.pv,
    },
  }));

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <Button type="primary">发布商品</Button>
        </div>
        <div className={style.filter}>
          <Form layout="inline">
            <Form.Item label="商品名称">
              <Input placeholder="请输入商品名称" />
            </Form.Item>
            <Form.Item label="商品分组">
              <Input placeholder="请输入商品分组" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">筛选</Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Table
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`);
              },
            }}
            columns={columns}
            dataSource={dataSource}
            pagination={{
              total: data.length,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `Total ${total} items`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PublishGoods;
