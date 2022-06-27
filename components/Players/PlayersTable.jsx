import { useQuery } from '../../hooks';

const PlayersTable = () => {
  const { data } = useQuery(`/players`);

  const renderPlayer = ({ first_name, last_name, birthday, email, category }, index) => {
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
