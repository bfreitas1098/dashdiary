import logo from "./logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="md:flex md:items-center md:justify-between px-10 mb-20">
      <div className="min-w-0 flex-1">
        <img src={logo} alt="DashDiary logo" className="logo" />
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white2 px-3 py-2 text-sm font-semibold text-body shadow-sm ring-1 ring-inset ring-gray hover:bg-hovWhite"
        >
          Log a Race
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:primary"
        >
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
