import { axiosAuth } from '../lib';

export const createCoach = (data) => {
  return axiosAuth.post('coaches', data);
};
