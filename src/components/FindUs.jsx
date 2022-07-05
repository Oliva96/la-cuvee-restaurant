import React from "react";

const FindUs = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Find Us</p>
        </div>
      </div>

      <div data-aos="fade-up">
        {/* <iframe
          title="google map"
          style={{ width: "100%", height: "450px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        ></iframe> */}
        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1339252771086!2d-80.21510458461161!3d25.766139614704592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b76dceac3daf%3A0x76eb15afe33a46ba!2zTGEgQ3V2w6ll!5e0!3m2!1ses-419!2sus!4v1657045775599!5m2!1ses-419!2sus"
          style={{ width: "100%", height: "450px" }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>1101 SW 8th St, Miami, FL 33130</p>
            </div>

            <div className="open-hours">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>
                Monday:<br></br>
                5:00 PM - 22:00 PM
              </p>
              <p>
                Tuesday:<br></br>
                Closed
              </p>
              <p>
                Wednesday:<br></br>
                5:00 PM - 22:00 PM
              </p>
              <p>
                Thursday:<br></br>
                5:00 PM - 0:00 AM
              </p>
              <p>
                Friday:<br></br>
                11:00 AM - 1:00 AM
              </p>
              <p>
                Saturday:<br></br>
                3:00 AM - 1:00 AM
              </p>
              <p>
                Sunday:<br></br>
                5:00 AM - 7:00 PM
              </p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 305 799-9387</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
