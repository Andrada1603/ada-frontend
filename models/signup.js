import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  last_name: Yup.string().required(),
  first_name: Yup.string().required(),
  birthday: Yup.string().required(),
  email: Yup.string().email().required(),
  category: Yup.string().required(),
  password: Yup.string().min(8).required(),
});

export const initialValues = {
  last_name: '',
  first_name: '',
  birthday: '',
  email: '',
  category: '',
  password: '',
};
