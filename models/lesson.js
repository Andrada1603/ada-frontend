import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  coach: Yup.string().required(),
  date: Yup.string().required(),
  location: Yup.string().required(),
  description: Yup.string()

});

export const initialValues = {
  name: '',
  coach: '',
  date: '',
  location: '',
  description:''

};
