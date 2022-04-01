import { selector } from 'recoil';

import { menuListApi } from '@/api/public';

export const menuState = selector({
  key: 'menuState',
  get: async () => {
    const menuList = await menuListApi();
    return menuList.data;
  }
});
