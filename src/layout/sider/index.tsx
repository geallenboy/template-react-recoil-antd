import './style.less';

import { ClearOutlined, DotChartOutlined, HomeOutlined, ShopOutlined, StarOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { menuType } from '@/api/public';
import useMenu from '@/hooks/useMenu';
import { menuState } from '@/stores';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const SiderPage = () => {
  const menuList = useRecoilValue(menuState);
  const [menuData, openKeys, selectedKeys] = useMenu(menuList);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const iconNode = (data: menuType): ReactNode => {
    if (data.id === 'sub1') {
      return <DotChartOutlined />;
    } else if (data.id === 'sub2') {
      return <ClearOutlined />;
    } else if (data.id === 'sub3') {
      return <ShopOutlined />;
    }
    return <StarOutlined />;
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="light">
      <Menu mode="inline" defaultSelectedKeys={selectedKeys} defaultOpenKeys={openKeys}>
        {menuData.map((k: menuType) => {
          if (k && k.children) {
            return (
              <SubMenu key={k.id} icon={iconNode(k)} title={k.name}>
                {k.children.map((k1: menuType) => {
                  if (k1 && k1.children && k1.children.length > 0) {
                    return (
                      <Menu.Item key={k1.url}>
                        <Link to={k1.url}>{k1.name}</Link>
                      </Menu.Item>
                    );
                  } else {
                    return (
                      <Menu.Item key={k1.url}>
                        <Link to={k1.url}>{k1.name}</Link>
                      </Menu.Item>
                    );
                  }
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item icon={<HomeOutlined />} key={k.id}>
                <Link to={k.url}>{k.name}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};
