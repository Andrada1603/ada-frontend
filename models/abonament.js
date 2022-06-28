import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  abonament_type: Yup.string().required(),
  starting_date: Yup.string().required(),
  period: Yup.string().required(),
  price: Yup.string().required(),
  
});

export const initialValues = {
  abonament_type: '',
  starting_date: '',
  period: '',
  price: ''
};
