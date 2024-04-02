import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="md:flex md:items-center md:justify-between px-10 mb-20">
      <div className="min-w-0 flex-1">
        <Link to="/">
          <img src={logo} alt="DashDiary logo" className="logo" />
        </Link>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white2 px-4 py-3 text-sm font-semibold text-body shadow-sm ring-1 ring-inset ring-lightGray hover:text-primary hover:ring-1 hover:ring-inset hover:ring-primary"
        >
          Log a Race
        </button>
        <Link to={props.page}>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white2 hover:text-lightOrange hover:ring-1 hover:ring-inset hover:ring-lightOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:primary"
          >
            {props.btn}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
