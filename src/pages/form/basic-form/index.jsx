import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Input, Form, Radio, Select, Tooltip } from 'antd';
import { connect } from 'umi';

import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const BasicForm = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  };

  const onFinish = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndbasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageContainer content="description">
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label="label"
            name="title"
            rules={[
              {
                required: true,
                message: 'required',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="label"
            name="date"
            rules={[
              {
                required: true,
                message: 'required',
              },
            ]}
          >
            <RangePicker
              style={{
                width: '100%',
              }}
              placeholder={['start', 'end']}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="label"
            name="goal"
            rules={[
              {
                required: true,
                message: 'required',
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder="placeholder"
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="label"
            name="standard"
            rules={[
              {
                required: true,
                message: 'required',
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder="placeholder"
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                label
                <em className={styles.optional}>
                  optional
                  <Tooltip title="tooltip">
                    <InfoCircleOutlined
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                label
                <em className={styles.optional}>optional</em>
              </span>
            }
            name="invites"
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem {...formItemLayout} label="label" help="help" name="publicType">
            <div>
              <Radio.Group>
                <Radio value="1">public</Radio>
                <Radio value="2">partially-public</Radio>
                <Radio value="3">private</Radio>
              </Radio.Group>
              <FormItem
                style={{
                  marginBottom: 0,
                }}
                name="publicUsers"
              >
                <Select
                  mode="multiple"
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">A</Option>
                  <Option value="2">B</Option>
                  <Option value="3">C</Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" loading={submitting}>
              submit
            </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
            >
              save
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default connect(({ loading }) => ({
  submitting: loading.effects['formAndbasicForm/submitRegularForm'],
}))(BasicForm);
