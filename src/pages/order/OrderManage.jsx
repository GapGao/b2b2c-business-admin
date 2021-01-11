import React from 'react';
import OrderItem from '@/components/order/OrderItem';
import { Input, Pagination } from 'antd';

import style from './OrderManage.less';

const { Search } = Input;

const data = [
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 1,
    createdAt: '2020-12-02 12:00:00',
  },
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 1,
    createdAt: '2020-12-02 12:00:00',
  },
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 1,
    createdAt: '2020-12-02 12:00:00',
  },
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 1,
    createdAt: '2020-12-02 12:00:00',
  },
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 2,
    createdAt: '2020-12-02 12:00:00',
  },
  {
    id: 123123123123,
    pic: '',
    goodsName: '拖鞋',
    goodsPrice: 55,
    desc: '容量：55l',
    count: 11,
    status: 3,
    createdAt: '2020-12-02 12:00:00',
  },
];

const OrderManage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <Search
            placeholder="请输入订单号"
            allowClear
            enterButton="查询"
            size="large"
            onSearch={() => {}}
          />
        </div>

        <div className={style.orderList}>
          {data.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>

        <Pagination
          className={style.pagination}
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};

export default OrderManage;
