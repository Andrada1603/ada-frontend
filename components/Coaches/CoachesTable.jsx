import { deleteCoach } from '../../api/coach';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

let euro = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "LEI",

});

const CoachesTable = () => {
  const { data } = useQuery(`/coaches`);
  const renderCoach = ({ _id, first_name, last_name, email, coach_category, salary }, index) => {
    
    return (
      <tr key={`player-${first_name}-${last_name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {last_name}, {first_name}
          </strong>
        </td>
        <td>{email}</td>
        <td>{coach_category}</td>
        <td>{euro.format(salary)}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteCoach} />
        </td>
      </tr>
    );
    
  };

  return (
    <div>

      <h4 className='mb-4'> Au fost gasiti {data?.pageParams.count} antrenori în baza de date </h4>
      <table>
        <thead>
          <th>#</th>
          <th>Nume</th>
          <th>Email</th>
          <th>Categorie</th>
          <th>Salariu</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderCoach)}</tbody>
      </table>
    </div>
  );
};

export default CoachesTable;
