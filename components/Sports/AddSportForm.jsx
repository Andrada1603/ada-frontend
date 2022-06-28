import { Formik, Form, Field } from 'formik';
import { Input } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/sport';
import { createSport } from '../../api/sport';
import { router, toaster } from '../../lib';

const AddSportForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createSport(data);
      toaster.success('Sectia sportiva a fost creata');
      router.push('/admin/sports')
    } catch (err) {
      toaster.error('Sectie sportiva nu a putut fi creata.');
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
            <Fieldset name="name" label="Sportul">
              <Field
                id="name"
                placeholder="Sportul"
                name="name"
                as={Input}
                autoFocus
              />
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="manager_name" label="Numele managerului">
              <Field id="manager_name" placeholder="Numele managerului" name="manager_name" as={Input} autoFocus />
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="foundation_date" label="Data infintarii">
              <Field placeholder="Data infintarii" name="foundation_date" as={Datepicker} />
            </Fieldset>
          </div>

          <Submit className="button full accent">Add</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddSportForm;
