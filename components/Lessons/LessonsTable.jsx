import { useQuery } from '../../hooks';
import { format } from 'date-fns';

const LessonsTable = () => {
  const { data } = useQuery(`/lessons`);

  const renderLesson = ({ name, coach, date, location }, index) => {
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
          <i className="fa fa-trash invisible" />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Titlu lectie</th>
          <th>Antrenor</th>
          <th>Data</th>
          <th>Locatie</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderLesson)}</tbody>
      </table>
    </div>
  );
};

export default LessonsTable;
