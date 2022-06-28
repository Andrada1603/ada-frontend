import { Formik, Form, Field } from 'formik';
import { CoachSelect, Input } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/lesson';
import { createLesson } from '../../api/lesson';
import { router, toaster } from '../../lib';

const AddLessonForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createLesson(data);
      toaster.success('Lectia a fost creata');
      router.push('/admin/lessons')
    } catch (err) {
      toaster.error('Lectia nu a putut fi creata.');
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
            <Fieldset name="name" label="Titlu lectie">
              <Field
                id="name"
                placeholder="Titlul lectiei"
                name="name"
                as={Input}
                autoFocus
              />
            </Fieldset>
            <CoachSelect />
            {/* <Fieldset name="coach" label="Antrenor">
              <Field id="coach"
                placeholder="Antrenor"
                name="coach"
                as={Input} autoFocus />
            </Fieldset> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="date" label="Data lectiei">
              <Field placeholder="Data" name="date" as={Datepicker} />
            </Fieldset>
            <Fieldset name="location" label="Locatie">
              <Field placeholder="Locatie" name="location" as={Input} />
            </Fieldset>
          </div>
          <Fieldset name="description" label="Descriere">
            <Field placeholder="Descriere" name="description" as={Input} />
          </Fieldset>
          <Submit className="button full accent">Add</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddLessonForm;
