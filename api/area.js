import { axiosAuth } from '../lib';

export const createArea = (data) => {
  return axiosAuth.post('areas', data);
};
