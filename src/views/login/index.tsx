import './index.less';

import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';

const initialValues: API.LoginParams = {
  username: 'rootadmin',
  password: '123456',
  captchaId: '',
  verifyCode: ''
  // remember: true
};

const LoginForm: FC = () => {
  /**
   * 表单验证成功回调
   * @param form
   */
  const onFinished = async (form: API.LoginParams) => {
    console.log('LoginParams', form);
  };

  return (
    <div className="login-page">
      <Form<API.LoginParams> onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
          <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input.Password placeholder="密码" prefix={<LockOutlined />} size="large" />
        </Form.Item>
        <Form.Item name="verifyCode" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input
            placeholder="验证码"
            prefix={<SafetyOutlined />}
            size="large"
            maxLength={4}
            suffix={<img src={capatcha.img} className="login-page-form_capatcha" alt="验证码" />}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
