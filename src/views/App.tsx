import './style.less';

import { ConfigProvider, Layout, Spin } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

import { ErrorBoundary } from '@/components/error-boudnary';
import { PageError } from '@/components/lib';
import { FooterPage, HeaderPage, SiderPage } from '@/layout';

const { Content } = Layout;

function App() {
  return (
    <div className="app">
      <ConfigProvider>
        <ErrorBoundary fallbackRender={PageError}>
          <Layout>
            <HeaderPage></HeaderPage>
            <Layout>
              <SiderPage />
              <Content>
                <React.Suspense fallback={<Spin size={'large'} />}>
                  <div className="app-content">
                    <Outlet />
                  </div>
                </React.Suspense>
                <FooterPage />
              </Content>
            </Layout>
          </Layout>
        </ErrorBoundary>
      </ConfigProvider>
    </div>
  );
}

export default App;
