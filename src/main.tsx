import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'antd/dist/antd.less';
import './assets/styles/index.less';

import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import RouterView from '@/router/index';

ReactDOM.render(
  <RecoilRoot>
    <RouterView />
  </RecoilRoot>,
  document.getElementById('root')
);
