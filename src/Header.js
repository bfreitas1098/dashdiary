import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="DashDiary logo" className="logo" />
    </header>
  );
};

export default Header;
