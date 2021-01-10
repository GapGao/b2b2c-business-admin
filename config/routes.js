// umi routes: https://umijs.org/docs/routing
export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user/login',
            name: 'login',
            component: './User/login',
          },
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: './user/register-result',
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/order/order_manage',
          },
          {
            path: '/order',
            name: '订单管理',
            icon: 'ordered-list',
            routes: [
              {
                path: '/order',
                redirect: '/order/order_manage',
              },
              {
                name: '订单管理',
                path: '/order/order_manage',
                component: './dashboard/analysis',
              },
              {
                name: '评价管理',
                path: '/order/evaluate_manage',
                component: './dashboard/analysis',
              },
              {
                name: '售后管理',
                path: '/order/service_manage',
                component: './dashboard/analysis',
              },
            ],
          },
          {
            path: '/goods',
            icon: 'appstore',
            name: '商品管理',
            routes: [
              {
                path: '/goods',
                redirect: '/goods/publish_goods',
              },
              {
                name: '发布商品',
                path: '/goods/publish_goods',
                component: './form/basic-form',
              },
              {
                name: '商品分组',
                path: '/goods/goods_group',
                component: './form/step-form',
              },
              {
                name: '商品管理',
                path: '/goods/goods_manage',
                component: './form/advanced-form',
              },
            ],
          },
          {
            path: '/marketing',
            icon: 'shopping-cart',
            name: '营销管理',
            routes: [
              {
                path: '/marketing',
                redirect: '/marketing/coupon_manage',
              },
              {
                name: '优惠券',
                icon: 'smile',
                path: '/marketing/coupon_manage',
                component: './form/basic-form',
              },
            ],
          },
          {
            path: '/customer_service',
            name: '客服管理',
            icon: 'customer-service',
            routes: [
              {
                path: '/customer_service',
                redirect: '/customer_service/information_manage',
              },
              {
                name: '消息管理',
                icon: 'smile',
                path: '/customer_service/information_manage',
                component: './profile/basic',
              },
              {
                name: '智能回复',
                icon: 'smile',
                path: '/customer_service/intelligent_reply',
                component: './profile/advanced',
              },
              {
                name: '客服管理',
                icon: 'smile',
                path: '/customer_service/customer_service_manage',
                component: './profile/advanced',
              },
            ],
          },
          {
            path: '/shop_profile',
            name: '店铺信息',
            icon: 'shop',
            component: './account/center',
          },
          {
            component: '404',
          },
        ],
      },
    ],
  },
];
