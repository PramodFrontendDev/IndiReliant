import "./Footer.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-top">
            <h2>Sign Up to Get Latest News / Updates</h2>
            <div className="signup-mail">
              <input placeholder="Enter Email" type="email" />
              <button>Submit</button>
            </div>
          </div>
          <div className="footer-middle">
            <div className="logo">
              <Logo />
            </div>
            <div className="services">
              <h3>Sectors</h3>
              <ul>
                <li>
                  <Link to="/">Service one</Link>
                </li>
                <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
                <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
                <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
                <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
                 <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
                 <li>
                  <Link to="/">Service one</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="services">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">Linkin</Link>
                </li>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Reddit</Link>
                </li>
                <li>
                  <Link to="/">Contact Us </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>©2026 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
