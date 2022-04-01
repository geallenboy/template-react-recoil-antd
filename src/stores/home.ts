import { selector } from 'recoil';

import { homeCardtab } from '@/api/home';

export const homeState = selector({
  key: 'homeState',
  get: async () => {
    const homeCardtabList = await homeCardtab();
    return homeCardtabList.data;
  }
});
