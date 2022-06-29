import { deleteLesson } from '../../api/lesson';
import { useQuery } from '../../hooks';
import { format } from 'date-fns';
import DeleteRow from '../DeleteRow';

const LessonsTable = () => {
  const { data } = useQuery(`/lessons`);

  const renderLesson = ({ _id, name, coach, date, location }, index) => {
    console.log(coach);
    return (
      <tr key={`area-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{coach.last_name}, {coach.first_name} </td>
        <td>{format(new Date(date), 'dd-MM-yyyy')} </td>
        <td>{location.address}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteLesson} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h4 className='mb-4'> Au fost gasite {data?.pageParams.count} lecții în baza de date </h4>
      <table>
        <thead>
          <th>#</th>
          <th>Titlu lecție</th>
          <th>Antrenor</th>
          <th>Data</th>
          <th>Locație</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderLesson)}</tbody>
      </table>
    </div>
  );
};

export default LessonsTable;
