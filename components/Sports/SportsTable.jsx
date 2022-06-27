import { useQuery } from '../../hooks';

const SportsTable = () => {
  const { data } = useQuery(`/sports`);

  const renderSport = ({ name, manager_name, foundation_date}, index) => {
    return (
      <tr key={`sport-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{manager_name}</td>
        <td>{new Date(foundation_date).getMonth()}.{new Date(foundation_date).getFullYear()}</td>
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
          <th>Sport</th>
          <th>Manager sectie</th>
          <th>Data infiintarii</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderSport)}</tbody>
      </table>
    </div>
  );
};

export default SportsTable;
