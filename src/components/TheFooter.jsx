import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function TheFooter() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#242424" }}
      >
        <form>
          <div className="row d-flex justify-content-center  pt-4 pe-5  align-items-center">
            <div className="col-auto pt-3">
              <p className="pt-1  text-white mt-4 ps-0">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="col-md-4">
              <div className="form-outline mb-0 mt-4 ms-2 ">
                <input type="email" id="form5Example25" className="form-control" placeholder="Enter Your Email Address" />
              </div>
            </div>

            <div className="col-auto mb-5 mt-4 mb-md-0 ms-1">
              <button type="submit" className="btn btn-success mb-0">
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          © 2021 Copyright: My Shop
        </div>
      </footer>
    </div>
  );
}

export default TheFooter;
