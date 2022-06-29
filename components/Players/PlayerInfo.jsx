import { fullName } from '../../functions';

const PlayerInfo = ({ first_name, last_name, ...props }) => {
  return (
    <>
      <div className="player-info">
        <h3 className="text-3xl text-primary">{fullName({ first_name, last_name })}</h3>
        {/* YOUR CODE HERE */}
      </div>
      {/* you may comment/delete this line  after finishing*/}
      <pre>{JSON.stringify(props, null, 3)}</pre>
    </>
  );
};

export default PlayerInfo;
