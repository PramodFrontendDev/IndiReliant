import "./Footer.css";
import Logo from "../Logo/Logo";

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
                  <a href="">Service one</a>
                </li>
                <li>
                  <a href="">Service one</a>{" "}
                </li>
                <li>
                  <a href="">Service one</a>{" "}
                </li>
                <li>
                  <a href="">Service one</a>{" "}
                </li>
                <li>
                  <a href="">Service one</a>{" "}
                </li>
                 <li>
                  <a href="">Service one</a>{" "}
                </li>
                 <li>
                  <a href="">Service one</a>{" "}
                </li>
              </ul>
            </div>
            <div className="services">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Linkin</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Reddit</a>
                </li>
                <li>
                  <a href="">Contact Us </a>
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
