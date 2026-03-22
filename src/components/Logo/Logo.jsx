import logo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;