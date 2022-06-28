import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  manager_name: Yup.string().required(),
  foundation_date: Yup.string().required(),
  
});

export const initialValues = {
  name: '',
  manager_name: '',
  foundation_date: '',
  
};
