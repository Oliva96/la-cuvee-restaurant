import React from "react";
import img1 from "../img/menu/lobster-bisque.jpg";
import img2 from "../img/menu/bread-barrel.jpg";
import img3 from "../img/menu/cake.jpg";
import img4 from "../img/menu/caesar.jpg";
import img5 from "../img/menu/tuscan-grilled.jpg";
import img6 from "../img/menu/mozzarella.jpg";
import img7 from "../img/menu/greek-salad.jpg";
import img8 from "../img/menu/spinach-salad.jpg";
import img9 from "../img/menu/lobster-roll.jpg";

const Menu = () => {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-6 menu-item filter-starters">
            <img src={img1} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Bisque</a>
              <span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={img2} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Bread Barrel</a>
              <span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src={img3} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Crab Cake</a>
              <span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and
              tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={img4} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Caesar Selections</a>
              <span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={img5} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Tuscan Grilled</a>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red
              pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src={img6} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a>
              <span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={img7} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Greek Salad</a>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={img8} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Spinach Salad</a>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon
              vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={img9} className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Roll</a>
              <span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
