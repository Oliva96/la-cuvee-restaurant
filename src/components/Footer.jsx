import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-container">
            <div className="footer-info">
              <h3>la cuvée</h3>
              <p>
                1101 SW 8th St, Miami, <br></br>
                FL 33130, USA<br></br>
                <br></br>
                <strong>Phone:</strong> +1 305 799-9387<br></br>
                <strong>Email:</strong> info@example.com<br></br>
              </p>
              <div
                className="social-links mt-3"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>

                  <a href="#hero"> Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>

                  <a href="#about"> About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>

                  <a href="#menu"> Menu</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>

                  <a href="#events"> Events</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>La Cuvée</span>
          </strong>
          . 2022
        </div>
        <div className="credits">All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
