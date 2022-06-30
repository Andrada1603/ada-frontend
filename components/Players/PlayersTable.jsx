import { useRouter } from 'next/router';
import { deletePlayer } from '../../api/player';
import { useInfiniteQuery } from '../../hooks';
import Button from '../Button';
import DeleteRow from '../DeleteRow';
import EditRow from '../EditRow';

const PlayersTable = () => {
  const router = useRouter();
  const { data } = useInfiniteQuery(`/players`);

  const renderPlayer = ({ _id, first_name, last_name, birthday, email, category }, index) => {
    const handleClick = (id) => router.push(`/admin/players/${id}`);

    return (
      <tr key={`player-${_id}-${first_name}-${last_name}`} onClick={() => handleClick(_id)}>
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
          <div className="flex gap-4 items-center">
            <DeleteRow id={_id} action={deletePlayer} />
            <EditRow id={_id} />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary">
          <i className="fa fa-plus mr-4" />
          Adaugă jucător
        </Button>
        <Button className="button full secondary">
          <i className="fa fa-download mr-4" />
          Descarcă datele
        </Button>
      </div>
      <table>
        <thead>
          <th>#</th>
          <th>Nume</th>
          <th>Anul nașterii</th>
          <th>Categorie</th>
          <th>Email</th>
          <th></th>
        </thead>
        <tbody>{data?.pages[0].map(renderPlayer)}</tbody>
      </table>
      <Button className="button full secondary my-4">Incarca mai mult</Button>
      {/* <h4 className="my-4"> Au fost gasiti {data?.pageParams.count} jucători în baza de date.</h4> */}
    </div>
  );
};

export default PlayersTable;
