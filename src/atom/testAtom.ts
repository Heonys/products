import { atom } from 'recoil';

export const itemsLimitState = atom<number>({
  key: 'itemsState',
  default: 10,
});
