import './style.less';

import { Col, Row, Tabs } from 'antd';
import { useRecoilValue } from 'recoil';

import { homeState } from '@/stores';

import { CardTab } from './modules';

const { TabPane } = Tabs;
export default function Home() {
  const cardTabList = useRecoilValue(homeState);
  const callback = (key: any) => {
    console.log(key);
  };

  return (
    <div className={'home'}>
      <Row>
        {cardTabList?.map((ds: any, index: number) => {
          return (
            <Col key={index} span={6} className="pd10">
              <CardTab data={ds} />
            </Col>
          );
        })}
      </Row>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="销售额" key="1">
          1
        </TabPane>
        <TabPane tab="访问量" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
}
