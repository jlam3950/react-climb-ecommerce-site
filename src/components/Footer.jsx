import React from "react";
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className="container-fluid mt-auto g-0">
      <footer
        className="text-center text-lg-star"
        // style={{ background: "#db6930" }}
      >
        <div className="container d-flex justify-content-center py-3">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
           < FaFacebook />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
            < FaInstagram />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
            < FaTwitter />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
            < FaGithub />
          </button>
        </div>
        <div
          className="text-center text-black p-2"
          // style= {{background: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2022 Copyright:
          <a className="text-black" href="https://github.com/jlam3950">
            Jeff L
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
