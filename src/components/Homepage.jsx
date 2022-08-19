import React from "react";
import Hero from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/Hero.jpg";
import Hero1 from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/Hero1.jpg";
import Hero2 from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/Hero2.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Homepage = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 class = 'hero_header'> Climb Shop </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_splash"
          src={Hero2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Homepage;
