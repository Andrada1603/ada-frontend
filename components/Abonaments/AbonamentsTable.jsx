import { deleteAbonament } from '../../api/abonament';
import { useQuery } from '../../hooks';
import { format } from 'date-fns';
import DeleteRow from '../DeleteRow';

const AbonamentsTable = () => {
  const { data } = useQuery(`/abonaments`);

  const renderArea = ({_id, abonament_type, starting_date, period, price }, index) => {
    return (
      <tr key={`area-${price}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {abonament_type}
          </strong>
        </td>
        <td>{format(new Date(starting_date), 'dd-MM-yyyy')}</td>
        <td>{period} zile</td>
        <td>{price} LEI</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteAbonament} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Tip abonament</th>
          <th>Data inceput</th>
          <th>Perioada</th>
          <th>Pret</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderArea)}</tbody>
      </table>
    </div>
  );
};

export default AbonamentsTable;
