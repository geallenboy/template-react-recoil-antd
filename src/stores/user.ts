import { selector } from 'recoil';

import { userInfoApi } from '@/api/public';

export const userState = selector({
  key: 'userState',
  get: async () => {
    const userInfo = await userInfoApi();
    return userInfo.data;
  }
});
