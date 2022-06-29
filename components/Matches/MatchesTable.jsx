import { deleteMatch } from '../../api/match';
import { format } from 'date-fns';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

const MatchesTable = () => {
  const { data } = useQuery(`/matches`);

  const renderMatch = ({_id, player1, player2, date, location, sport }, index) => {
    return (
      <tr key={`player1-${player1}player2-${player2}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {player1.last_name}, {player1.first_name}
          </strong>
        </td>
        <td>
          <strong>
            {player2.last_name}, {player2.first_name}
          </strong>
        </td>
        <td>{format(new Date(date), 'dd-MM-yyyy')} </td>
        <td>{location.address}</td>
        <td>{sport}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteMatch} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h4 className='mb-4'> Au fost gasite {data?.pageParams.count} meciuri în baza de date </h4>
      <table>
        <thead>
          <th>#</th>
          <th>Echipa gazdă</th>
          <th>Echipa vizitator</th>
          <th>Data</th>
          <th>Locație</th>
          <th>Sportul</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderMatch)}</tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
