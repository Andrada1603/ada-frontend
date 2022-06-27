import { axiosAuth } from '../lib';

export const createPlayer = (data) => {
  return axiosAuth.post('players', data);
};
