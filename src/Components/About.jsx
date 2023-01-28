import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <nav>
          <div className="nav-1">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/about">
              ABOUT
            </Link>
            <Link className="link" to="/">
              FEATURES
            </Link>
          </div>
          <div className="logo">
            <img src="./Images/logo.png" alt="" />
          </div>
          <div className="nav-2">
            <Link className="link" to="/">
              SCREENSHOT
            </Link>
            <Link className="link" to="/">
              BLOG
            </Link>
            <Link className="link btn" to="/">
              DOWNLOAD
            </Link>
          </div>
        </nav>
        <h2>ABOUT OUR APP</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="showcase">
          <div className="portion">
            <img src="./Images/android-phone.png" alt="" />
          </div>
          <div className="portion">
            <div className="design">
              <div className="nothing">
                <i className="fa-solid fa-circle-check check"></i>
                <h3>Creative design</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="design">
              <div className="nothing">
                <i className="fa-solid fa-circle-check check"></i>
                <h3>easy to use</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="design">
              <div className="nothing">
                <i className="fa-solid fa-circle-check check"></i>
                <h3>Best user experince</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
