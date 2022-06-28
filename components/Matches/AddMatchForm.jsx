import { Formik, Form, Field } from 'formik';
import { AreaSelect, Input, PlayerSelect } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/match';
import { createMatch } from '../../api/match';
import { router, toaster } from '../../lib';

const AddMatchForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createMatch(data);
      toaster.success('Meciul a fost creat');
      router.push('/admin/matches');
    } catch (err) {
      toaster.error('Meciul nu a putut fi creat.');
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
            <PlayerSelect label="Primul jucător" name="player1" />
            <PlayerSelect label="Al doilea jucător" name="player2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="date" label="Data">
              <Field placeholder="Data" name="date" as={Datepicker} />
            </Fieldset>
            <AreaSelect />
            {/* <Fieldset name="location" label="Locatia">
              <Field placeholder="Locatia" name="location" as={Input} />
            </Fieldset> */}
          </div>
          <Fieldset name="arbiter_name" label="Arbitrul">
            <Field placeholder="Arbitrul" name="arbiter_name" as={Input} />
          </Fieldset>
          <Fieldset name="match_type" label="Tipul meciului/turneul">
            <Field placeholder="Tipul meciului/turneul" name="match_type" as={Input} />
          </Fieldset>
          <Submit className="button full accent">Add</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMatchForm;
