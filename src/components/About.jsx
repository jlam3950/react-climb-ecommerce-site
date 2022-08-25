import React from "react";
import APIfetch from "../features/about/APIfetch";
import About2 from '../images/About2.jpg';

const About = () => {
  return (
    <>
      <h1 className="py-4">About</h1>

      <div className="container-sm mx-auto px-2 about_container">
         <p className = 'mx-3'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi odio itaque dignissimos cum, totam deserunt corrupti vero animi sed libero minus molestias esse nemo soluta doloremque sint et repellat labore, iusto sunt! Architecto, dolore deleniti. Cumque cupiditate tempore impedit sed rerum laboriosam nesciunt, earum saepe quasi esse sint debitis.
         </p>
         <img src = { About2 } alt = {''} className = 'about w-100'></img>
        </div>
      <div className="container text-center">
          <div>
              <APIfetch />
          </div>
      </div>
    </>
  );
};

export default About;
