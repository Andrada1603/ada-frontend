import { fullName } from '../../functions';
import { format } from 'date-fns';

const PlayerInfo = ({ id, first_name, last_name, birthday, email, category, ...props }) => {
  return (
    <>
      <div className="player-info">
        <h3 className="text-3xl text-primary">{fullName({ first_name, last_name })}</h3>
        {/* YOUR CODE HERE */}
        <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
          <h3> <strong> Informații </strong> </h3>
          <span class='text-primary'> <strong> Nume: </strong> </span>
          <span> {last_name} </span>
          <span class='text-primary'> <strong> Prenume: </strong> </span>
          <span> {first_name} </span>
          <span class='text-primary'> <strong> Data nașterii: </strong> </span>
            <span>{format(new Date(birthday), 'dd-MM-yyyy')} </span>
          <span class='text-primary'> <strong> Contact: </strong> </span>
          <span> {email} </span>
          <span class='text-primary'> <strong> Categorie sportivă: </strong> </span>
          <span> {category} </span>

          <div class='flex items-center justify-between w-60 px-3 py-2 rounded text-white bg-accent font-semibold'>
            <p class='py-1'> Rating </p>
            </div>
          <pre>{JSON.stringify(props, null, 3)}</pre>
        </div>
      </div>
      
    </>
  );
};

export default PlayerInfo;
