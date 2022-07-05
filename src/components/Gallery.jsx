import React, { useState } from "react";
import galleryImg1 from "../img/la cuvee/gallery/1.jpg";
import galleryImg2 from "../img/la cuvee/gallery/2.jpg";
import galleryImg3 from "../img/la cuvee/gallery/3.jpg";
import galleryImg4 from "../img/la cuvee/gallery/4.jpg";
import galleryImg5 from "../img/la cuvee/gallery/5.jpg";
import galleryImg6 from "../img/la cuvee/gallery/6.jpg";
import galleryImg7 from "../img/la cuvee/gallery/7.jpg";
import galleryImg8 from "../img/la cuvee/gallery/8.jpg";

const Gallery = () => {
  const [showImg, setShowImg] = useState(false);
  const [img, setImg] = useState(null);

  const toggleModal = (galleryImg) => {
    setShowImg(!showImg);
    setImg(galleryImg);
  };
  const BigImg = () => (
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
        onClick={() => toggleModal(null)}
      ></button>
      <div style={{ width: "80vw", height: "45vw", zIndex: 1070 }}>
        <img
          width="100%"
          height="100%"
          style={{ border: "3px solid black" }}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
      </div>
      {showImg && <BigImg />}
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                width="100%"
                height="100%"
                onClick={() => toggleModal(galleryImg1)}
                src={galleryImg1}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                width="100%"
                height="100%"
                onClick={() => toggleModal(galleryImg2)}
                src={galleryImg2}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg3)}
                src={galleryImg3}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg4)}
                src={galleryImg4}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg5)}
                src={galleryImg5}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg6)}
                src={galleryImg6}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg7)}
                src={galleryImg7}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <img
                className="img-fluid"
                onClick={() => toggleModal(galleryImg8)}
                src={galleryImg8}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
