import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  player1: Yup.string().required(),
  player2: Yup.string().required(),
  date: Yup.string().required(),
  location: Yup.string().required(),
  arbiter_name: Yup.string().required(),
  match_type: Yup.string()
  
});

export const initialValues = {
  player1: '',
  player2: '',
  date: '',
  location: '',
  arbiter_name: '',
  match_type: ''
};
