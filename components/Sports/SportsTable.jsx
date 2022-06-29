import { deleteSport } from '../../api/sport';
import { format } from 'date-fns';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

const SportsTable = () => {
  const { data } = useQuery(`/sports`);

  const renderSport = ({_id, name, manager_name, foundation_date}, index) => {
    return (
      <tr key={`sport-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{manager_name}</td>
        <td>{format(new Date(foundation_date), 'dd-MM-yyyy')}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteSport} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Sport</th>
          <th>Manager secție</th>
          <th>Data înființării</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderSport)}</tbody>
      </table>
    </div>
  );
};

export default SportsTable;
