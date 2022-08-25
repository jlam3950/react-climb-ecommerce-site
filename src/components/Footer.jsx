import React from "react";
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
            <a className="text-light" href="https://facebook.com">
              <FaFacebook />
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
            {" "}
            <a className="text-light" href="https://instagram.com">
              <FaInstagram />
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
          >
            <a className="text-light" href="https://twitter.com">
              <FaTwitter />
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 footerIcon"
            style={{ background: "#54456b" }}
            href="https://github.com/jlam3950"
          >
            <a className="text-light" href="https://github.com/jlam3950">
              <FaGithub />
            </a>
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
