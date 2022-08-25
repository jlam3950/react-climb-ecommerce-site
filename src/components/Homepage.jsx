import React from "react";
import Hero from "../images/Hero.jpg";
import Hero1 from "../images/Hero1.jpg";
import Hero2 from "../images/Hero2.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Homepage = () => {
  return (
    <>
      <Carousel interval = {null}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 class = 'hero_header'> Climb Shop </h1>
          <p>For all of your rock climbing needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Explore. Adventure. Climb.</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Top rated climbing shop</h3>
          <p>
            Proud vendor of Black Diamond gear and apparel.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Homepage;
