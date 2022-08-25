import React, { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
// import { FaStar } from "react-icons/fa";

const APIfetch = () => {
  const url = 'https://testimonialapi.toolcarton.com/api';
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
          console.log(res);
          setReviews(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, [url])

  return (

    <>
      <h4 className="reviews my-2">Climb Shop Testimonials:</h4>
      <Carousel data-interval='1000'>
        {reviews.map(review => (
          <Carousel.Item key={review.id}>
          <div className = 'img_container'>
            <img
              className="d-block w-100 testimonialImages"
              // className="testimonialImages reviewImg d-block w-100"
              src={review.avatar}
              alt={review.author}
            />
          </div>
            <Carousel.Caption>
              <div>
              <h3 className = 'text-dark about_name'>{review.name}</h3>
              <p className = 'text-dark'>{review.message} </p>
              <p className = 'text-dark font-weight-bold'>
               Store Rating : {review.rating}
              </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default APIfetch;