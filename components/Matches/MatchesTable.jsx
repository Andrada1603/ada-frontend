import { useQuery } from '../../hooks';

const MatchesTable = () => {
  const { data } = useQuery(`/matches`);

  const renderMatch = ({ player1, player2, date, location, match_type }, index) => {
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
        <td>{date} </td>
        <td>{location.address}</td>
        <td>{match_type}</td>
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
          <th>Echipa gazda</th>
          <th>Echipa vizitator</th>
          <th>Data</th>
          <th>Locatie</th>
          <th>Campionatul</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderMatch)}</tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
