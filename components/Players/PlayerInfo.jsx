import { fullName } from '../../functions';
import { format } from 'date-fns';

const PlayerInfo = ({ id, first_name, last_name, birthday, email, category, ...props }) => {
  return (
    <>
      <div className="player-info">
        <h3 className="text-3xl text-primary">{fullName({ first_name, last_name })}</h3>
        <div class= "text-xs text-white py-1 px-2 rounded uppercase text-center cursor-default font-semibold bg-primary"> Activ </div>
        {/* YOUR CODE HERE */}
        <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
          <img class='avatar h-72 w-full md:w-80 rounded-md' src='/images/smile.jpg' align= 'left'
            alt='PlayerPhoto'></img>
            <h3 align='right'> <strong> Informații </strong> </h3>
          <div class="flex flex-col">
          <span class='text-primary' align='right' vertical-align='top'> <strong> Nume: </strong> </span>
            <span align='right'> {last_name} </span>
            </div>
          <span class='text-primary' align='right'> <strong> Prenume: </strong> </span>
          <span align='right'> {first_name} </span>
          <span class='text-primary' align='right'> <strong> Data nașterii: </strong> </span>
          <span align='right'>{format(new Date(birthday), 'dd-MM-yyyy')} </span>
          <span class='text-primary' align='right'> <strong> Contact: </strong> </span>
          <span align='right'> {email} </span>
          <span class='text-primary' align='right'> <strong> Categorie sportivă: </strong> </span>
          <span align='right'> {category} </span>
          <div class='flex items-center justify-between w-60 px-3 py-2 rounded text-white bg-primary font-semibold'>
            <p class='py-1'> Rating </p>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default PlayerInfo;
