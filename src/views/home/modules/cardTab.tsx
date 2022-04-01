import { CaretDownOutlined, CaretUpOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Row, Space, Tooltip } from 'antd';
import React from 'react';

export default function CardTab({ data }: any) {
  return (
    <Card className={'cardtab'}>
      <Row justify="space-between">
        <Col span={12}>
          <h3 className={'card-title'}>{data.title}</h3>
        </Col>
        <Col span={12} className="text-right">
          <Tooltip title={'指标说明'}>
            <QuestionCircleOutlined />
          </Tooltip>
        </Col>
      </Row>
      <h2 className={'card-h2'}>¥ {data.titleNumber}</h2>
      <Row>
        <Col span={12}>
          <Space>
            <span>周同比</span>
            <span>
              <span className={'mr5'}>{data.tbNumber}</span>
              <CaretUpOutlined className={'up'} />
            </span>
          </Space>
        </Col>
        <Col span={12}>
          <Space>
            <span>日同比</span>
            <span>
              <span className={'mr5'}>{data.rtbNumber}</span>
              <CaretDownOutlined className={'down'} />
            </span>
          </Space>
        </Col>
      </Row>
      <Divider className={'mt10'} />
      <Space>
        <span>日销售额</span>
        <span className={'card-span1'}>¥ {data.rxse}</span>
      </Space>
    </Card>
  );
}
