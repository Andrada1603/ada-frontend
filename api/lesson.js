import { axiosAuth } from '../lib';

export const createLesson = (data) => {
  return axiosAuth.post('lessons', data);
};

export const deleteLesson = (_id) => {
  return axiosAuth.delete(`/lesson/${_id}`);
};
