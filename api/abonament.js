import { axiosAuth } from '../lib';

export const createAbonament = (data) => {
  return axiosAuth.post('abonaments', data);
};
