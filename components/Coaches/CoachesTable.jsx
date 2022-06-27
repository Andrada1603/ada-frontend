import { useQuery } from '../../hooks';

const CoachesTable = () => {
  const { data } = useQuery(`/coaches`);

  const renderCoach = ({ first_name, last_name, email, coach_category, salary }, index) => {
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
        <td>{salary} LEI</td>
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
