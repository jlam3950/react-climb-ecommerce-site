import React from "react";
import FavoritesList from "../features/favorites/favoritesList"


const Favorites = () => {
  return (
    <>
        <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Favorites</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div
        className="container mx-auto container_gear d-flex justify-content-center"
        style={{ width: "100vw" }}
      >
        <div className="row">
          <FavoritesList />
        </div>
        
      </div>
    </>
  );
};

export default Favorites;
