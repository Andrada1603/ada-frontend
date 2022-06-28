import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  dimension: Yup.string().required(),
  address: Yup.string().required(),
  
});

export const initialValues = {
  name: '',
  dimension: '',
  address: ''
};
