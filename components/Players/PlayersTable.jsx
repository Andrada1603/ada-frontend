import { deletePlayer } from '../../api/player';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

const PlayersTable = () => {
  const { data } = useQuery(`/players`);

  const renderPlayer = ({ _id, first_name, last_name, birthday, email, category }, index) => {
    return (
      <tr key={`player-${first_name}-${last_name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {last_name}, {first_name}
          </strong>
        </td>
        <td>{new Date(birthday).getFullYear()}</td>
        <td>{category}</td>
        <td>{email}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deletePlayer} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Nume</th>
          <th>Anul nașterii</th>
          <th>Categorie</th>
          <th>Email</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderPlayer)}</tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
