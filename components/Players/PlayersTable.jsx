import { useRouter } from 'next/router';
import { deletePlayer } from '../../api/player';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

const PlayersTable = () => {
  const router = useRouter();
  const { data } = useQuery(`/players`);

  const renderPlayer = ({ _id, first_name, last_name, birthday, email, category }, index) => {
    const handleClick = (id) => router.push(`/admin/players/${id}`)

    return (
      <tr key={`player-${first_name}-${last_name}`} onClick={() => handleClick(_id)}>
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
      <h4 className='mb-4'> Au fost gasiti {data?.pageParams.count} jucători în baza de date </h4>
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
