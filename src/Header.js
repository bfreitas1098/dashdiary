import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="md:flex md:items-center md:justify-between px-10 mb-20">
      <div className="min-w-0 flex-1">
        <img src={logo} alt="DashDiary logo" className="logo" />
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white2 px-4 py-3 text-sm font-semibold text-body shadow-sm ring-1 ring-inset ring-lightGray hover:bg-lightOrange hover:text-body"
        >
          Log a Race
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white2 shadow-sm hover:bg-darkOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:primary"
        >
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
