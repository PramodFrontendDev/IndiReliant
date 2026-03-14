import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="container">
        <div className="header">
          <Logo />
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;