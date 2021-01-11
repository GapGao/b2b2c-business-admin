import React from 'react';
import { Button } from 'antd';

import style from './OrderItem.less';

import logo from '../../assets/images/applogo.png';

const STATUS_TYPE = {
  CLOSED: 1,
  PENDING: 2,
  COMPLETE: 3,
};

const STATUS_TO_TITLE = {
  [STATUS_TYPE.CLOSED]: '交易关闭',
  [STATUS_TYPE.PENDING]: '代发货',
  [STATUS_TYPE.COMPLETE]: '交易完成',
};

const OrderItem = ({ order }) => {
  const { id, goodsName, status, goodsPrice, desc, count, createdAt } = order;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>订单号：{id}</div>
        <div>{STATUS_TO_TITLE[status]}</div>
      </div>
      <div className={style.content}>
        <div className={style.pic}>
          <img src={logo} />
        </div>
        <div className={style.detail}>
          <div>{goodsName}</div>
          <div className={style.desc}>
            <span>￥{goodsPrice}</span>
            <span>{desc}</span>
            <span>*{count}</span>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div>{createdAt}</div>
        <div className={style.footerRight}>
          <div className={style.totalPrice}>金额：￥{goodsPrice * count}</div>
          <Button danger size="small">
            删除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
