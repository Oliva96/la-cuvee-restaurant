import React, { useState } from "react";
import eventImg1 from "../img/event-birthday.jpg";
import eventImg2 from "../img/event-private.jpg";
import eventImg3 from "../img/event-custom.jpg";

const events = [
  {
    img: eventImg1,
    title: "Birthday Parties",
    price: "$189",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offerts: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    img: eventImg2,
    title: "Private Parties",
    price: "$290",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offerts: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    img: eventImg3,
    title: "Custom Parties",
    price: "$99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offerts: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

const Events = () => {
  const [event, setEvent] = useState(events[0]);
  const [numberEvent, setNumberEvent] = useState(0);

  const selectEvent = (number) => {
    setNumberEvent(number);
    setEvent(events[number]);
  };
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Organize Your Events in our Restaurant</p>
        </div>

        <div
          className="events-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={event.img} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{event.title}</h3>
                  <div className="price">
                    <p>
                      <span>{event.price}</span>
                    </p>
                  </div>
                  <p className="fst-italic">{event.description}</p>
                  <ul>
                    {event.offerts.map((offer, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle"></i> {offer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            {[0, 1, 2].map((number) => (
              <div
                key={number}
                className="selector-caruosel"
                style={numberEvent === number ? { background: "#cda45e" } : {}}
                onClick={() => selectEvent(number)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
