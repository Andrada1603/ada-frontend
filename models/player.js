import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  birthday: Yup.string().required(),
  email: Yup.string().email().required(),
  category: Yup.string().required(),
});

export const initialValues = {
  first_name: '',
  last_name: '',
  birthday: '',
  email: '',
  category: '',
};
