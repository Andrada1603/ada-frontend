import { axiosAuth } from '../lib';

export const createMatch = (data) => {
  return axiosAuth.post('matches', data);
};
