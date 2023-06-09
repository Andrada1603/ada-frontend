import toast from 'react-hot-toast';

export const success = (message) => {
  if (/<\/?[a-z][\s\S]*>/i.test(message)) {
    return false;
  }

  return toast.success(message);
};

export const error = (message) => {
  if (/<\/?[a-z][\s\S]*>/i.test(message)) {
    message = 'S-a produs o eroare, vă rugăm reîncercați';
  }

  return toast.error(message);
};

const toaster = {
  ...toast,
  success,
  error,
};

export default toaster;
