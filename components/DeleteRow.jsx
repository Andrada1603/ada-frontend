import { useState } from 'react';
import { AreYouSure } from '.';

const DeleteRow = ({ onClick }) => {
  const [isOpen, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };
  const show = () => {
    setOpen(true);
  };

  const iAmSure = () => {
    hide();
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <>
      <i className="fa fa-trash invisible" onClick={show} />
      <AreYouSure isOpen={isOpen} hide={hide} iAmSure={iAmSure}>
        Atenție! Această acțiune nu este reversibilă.
      </AreYouSure>
    </>
  );
};

export default DeleteRow;
