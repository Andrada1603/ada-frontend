import { useRouter } from 'next/router';

const EditRow = ({ id }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/players/${id}/edit`);
  return <i className="fa fa-pen invisible hover:text-primary" onClick={handleClick} />;
};

export default EditRow;
