import { Field, useFormikContext } from 'formik';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Dropdown from './Dropdown';

const CoachSelect = () => {
  const { setFieldValue } = useFormikContext();
  const { data: coaches, status } = useQuery('/coaches');
  const showCoach = ({ _id, first_name, last_name }) => (
    <option key={`coach_${_id}`} value={_id}>
      {last_name}, {first_name}
    </option>
  );

  const handleChange = (value) => {
    setFieldValue('coach', value);
  };

  return (
    status === 'success' && (
      <Fieldset name="coach" label="Antrenor">
        <Field
          id="coach"
          name="coach"
          placeholder="Selectează antrenorul"
          as={Dropdown}
          onSelect={handleChange}
        >
          {coaches?.pages?.map(showCoach)}
        </Field>
      </Fieldset>
    )
  );
};

export default CoachSelect;
