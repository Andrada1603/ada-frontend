import { axiosAuth } from '../lib';

export const createLesson = (data) => {
  return axiosAuth.post('lessons', data);
};
