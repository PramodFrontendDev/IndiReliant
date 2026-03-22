import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about-main">
        <div className="container">
            <div className="about">
                <div className="about-content">
                    <h1>About Us</h1>
                    <h3>15 Years of Experience</h3>
                    <p>Indi Reliant is a growing construction firm committed to delivering reliable, cost-effective, and high-quality construction services. From infrastructure projects to commercial projects, we focus on excellence, safety, and timely delivery.</p>
                    <button>Contact Us</button>
                </div>
                <div className="about-img">
                    <img src={aboutImage} alt="About Us" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;