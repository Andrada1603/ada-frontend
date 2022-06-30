import { useRouter } from 'next/router';
import { deletePlayer } from '../../api/player';
import { useQuery } from '../../hooks';
import Button from '../Button';
import DeleteRow from '../DeleteRow';

const PlayersTable = () => {
  const router = useRouter();
  const { data } = useQuery(`/players`);

  const downloadData = () => alert('downloading');

  const renderPlayer = ({ _id, first_name, last_name, birthday, email, category }, index) => {
    const handleClick = (id) => router.push(`/admin/players/${id}`);

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
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary"><i className="fa fa-plus mr-4" />Adaugă jucător</Button>
        <Button className="button full secondary"><i className="fa fa-download mr-4" />Descarcă datele</Button>
      </div>
      {/* <h4 className="text-lg mb-4 cursor-pointer" onClick={downloadData}>
        Descarcă datele
      </h4> */}
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
      {/* <h4 className="my-4"> Au fost gasiti {data?.pageParams.count} jucători în baza de date.</h4> */}
    </div>
  );
};

export default PlayersTable;
