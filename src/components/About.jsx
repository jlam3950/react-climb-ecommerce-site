import React from "react";
import APIfetch from "../features/about/APIfetch";

const About = () => {
  return (
    <>
      <h1 className="py-4">About</h1>

      <div className="container text-center py-1">
        <div class="row">
          <div className = 'carousel_container'>
            <APIfetch />
          </div>
          <div class="col-12 mx-auto about_container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum,
            dignissimos blanditiis sunt eaque beatae cumque, obcaecati saepe
            nulla dolore quod, aut eligendi similique ex ab mollitia voluptates
            minima assumenda consequatur! Ex nobis perferendis quod beatae sint
            quasi magni praesentium eligendi voluptatibus aliquam harum earum
            placeat repellat corporis minima impedit adipisci possimus
            necessitatibus dolor laboriosam neque facilis, dolores esse
            officiis! Nulla ipsam esse quasi ex consequatur corrupti aperiam
            facere sint nemo, laboriosam earum ipsum animi? Dolor officiis quasi
            fugiat culpa recusandae saepe minima, quo reprehenderit optio sint
            iusto itaque a aut maiores dolores nisi quaerat magnam velit amet
            voluptatum fugit accusantium ipsa reiciendis autem?
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
