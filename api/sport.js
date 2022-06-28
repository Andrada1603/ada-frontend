import { axiosAuth } from '../lib';

export const createSport = (data) => {
  return axiosAuth.post('sports', data);
};
