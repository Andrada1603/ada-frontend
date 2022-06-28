import { Formik, Form, Field } from 'formik';
import { Input } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/abonament';
import { createAbonament } from '../../api/abonament';
import { router, toaster } from '../../lib';

const AddAbonamentForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createAbonament(data);
      toaster.success('Abonamentul a fost creat');
      router.push('/admin/abonaments')
    } catch (err) {
      toaster.error('Abonamentul nu a putut fi creat.');
    }
  };

  return (
    <div className="form-container">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="flex gap-4 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="abonament_type" label="Tip abonament">
              <Field
                id="abonament_type"
                placeholder="Tip abonament"
                name="abonament_type"
                as={Input}
                autoFocus
              />
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="starting_date" label="Data de inceput">
              <Field placeholder="Data de inceput" name="starting_date" as={Datepicker} />
            </Fieldset>
            <Fieldset name="period" label="Perioada">
              <Field placeholder="Perioada" name="period" as={Input} />
            </Fieldset>
          </div>
          <Fieldset name="price" label="Pret">
            <Field placeholder="Pret" name="price" as={Input} />
          </Fieldset>
          <Submit className="button full accent">Add</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAbonamentForm;
