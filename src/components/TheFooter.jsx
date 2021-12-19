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
        <div className="container pt-3 ps-5">
          <section className="mb-4 ms-4">
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
          className="text-center text-dark py-4"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          © 2021 Copyright: My Shop
        </div>
      </footer>
    </div>
  );
}

export default TheFooter;
