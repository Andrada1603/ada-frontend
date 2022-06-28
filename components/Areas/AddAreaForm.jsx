import { Formik, Form, Field } from 'formik';
import { Input } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/area';
import { createArea } from '../../api/area';
import { router, toaster } from '../../lib';

const AddAreaForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createArea(data);
      toaster.success('Sala a fost creata');
      router.push('/admin/areas')
    } catch (err) {
      toaster.error('Sala nu a putut fi creata.');
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
            <Fieldset name="name" label="Denumire">
              <Field
                id="name"
                placeholder="Denumire"
                name="name"
                as={Input}
                autoFocus
              />
            </Fieldset>
            <Fieldset name="dimension" label="Dimensiune">
              <Field id="dimension" placeholder="Dimensiune" name="dimension" as={Input} autoFocus />
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="address" label="Adresa">
              <Field placeholder="Adresa" name="address" as={Input} />
            </Fieldset>
          </div>
          <Submit className="button full primary">Adaugă</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAreaForm;
