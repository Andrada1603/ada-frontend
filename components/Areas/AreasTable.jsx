import { deleteArea } from '../../api/area';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';

const AreasTable = () => {
  const { data } = useQuery(`/areas`);

  const renderArea = ({_id, name, address, dimension}, index) => {
    return (
      <tr key={`area-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{address}</td>
        <td>{dimension} mp</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteArea} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Denumire</th>
          <th>Adresa</th>
          <th>Dimensiune</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderArea)}</tbody>
      </table>
    </div>
  );
};

export default AreasTable;
