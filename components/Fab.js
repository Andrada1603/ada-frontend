import Link from 'next/link';

const Fab = ({ href, icon }) => {
  return (
    <Link href={href}>
      <a
        className={`menu-item px-8 py-2 cursor-pointer no-underline fixed
            z-90
            bottom-8
            right-8
            drop-shadow-lg
            flex justify-center items-center
            hover:drop-shadow-2xl hover:animate-bounce
            duration-300`}
      >
        <i className={icon + ' fa-4x text-accent hover:drop-shadow-2xl'} />
      </a>
    </Link>
    // <button
    //   {...props}
    //   className={`fixed
    //   z-90
    //   bottom-10
    //   right-8
    //   bg-blue-600
    //   w-20 h-20
    //   rounded-full
    //   drop-shadow-lg
    //   flex justify-center items-center
    //   text-white text-4xl
    //   hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce
    //   duration-300`}
    // >
    //   &#9993;
    // </button>
  );
};

export default Fab;
