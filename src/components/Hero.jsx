import React, { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleModal = () => {
    setShowVideo(!showVideo);
  };
  const YoutubeEmbed = () => (
    <div
      className="modal"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div className="overlay"></div>
      <button
        type="button"
        className="btn-close btn-close-white close-modal-btn"
        aria-label="Close"
        onClick={toggleModal}
      ></button>
      <iframe
        style={{ zIndex: 1070 }}
        width="80%"
        height="70%"
        src="https://www.youtube.com/embed/GlrxcuEDyF8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  return (
    <section id="hero" className="d-flex align-items-center">
      {showVideo && <YoutubeEmbed />}
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>la cuvée</span>
            </h1>
            <h2>Delivering great food for more than 18 years!</h2>

            <div className="btns">
              <a
                href="#menu"
                className="btn-menu animated fadeInUp scrollto hero-menu-btn"
              >
                Our Menu
              </a>
              {/* <a
                href="#book-a-table"
                className="btn-book animated fadeInUp scrollto"
              >
                Book a Table
              </a> */}
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="play-btn"
              style={{ cursor: "pointer" }}
              onClick={toggleModal}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
