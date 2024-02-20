const CloseBtn = ({ handleToggleMenu }: { handleToggleMenu: Function }) => {
  return (
    <button
      onClick={() => handleToggleMenu()}
      type="button"
      className="font-amatic-sc font-bold flex flex-col leading-3 lg:leading-4 relative group justify-between"
    >
      <span
        className={`origin-center text-white lg:text-primary rotate-45 scale-x-125 translate-y-2 group-hover:text-9xl group-hover:leading-3 text-8xl leading-3 lg:leading-4   lg:group-hover:text-8xl lg:group-hover:leading-4 group-hover:rotate-0 group-hover:scale-x-100 group-hover:-translate-y-3 transition-all ease-in-out duration-200`}
      >
        —
      </span>
      <span className="absolute top-1/2 left-0 -translate-y-1/2 text-2xl text-white lg:text-primary invisible opacity-0 group-hover:text-3xl group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-200 group-hover:duration-500 group-hover:delay-200 w-full text-center font-bold group-hover:pt-3">
        Close
      </span>
      <span
        className={`origin-center text-white lg:text-primary -rotate-45 scale-x-125 -translate-x-1 -translate-y-1 lg:-translate-x-1 lg:-translate-y-2 group-hover:text-9xl group-hover:leading-3 text-8xl leading-3 lg:leading-4 lg:group-hover:text-8xl lg:group-hover:leading-4 group-hover:rotate-0 group-hover:scale-x-100 group-hover:translate-y-5 group-hover:translate-x-0 transition-all ease-in-out duration-200`}
      >
        —
      </span>
    </button>
  );
};

export default CloseBtn;
