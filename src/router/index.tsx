import { Spin } from 'antd';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from '@/views/App';
import Login from '@/views/login';
import Page404 from '@/views/result/page404';

import { routers } from './routers';

export default function RouterView() {
  return (
    <Suspense
      fallback={
        <div className="loading_div">
          <Spin size={'large'} />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {routers.map(rou => {
              return <Route key={rou.path} path={rou.path} element={<rou.element />} />;
            })}
            <Route path={'*'} element={<Page404 />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
