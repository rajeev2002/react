import restaurants from "../utils/mockData";
import Restaurant from "./Restaurant";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const filterRestaurants = () =>
    setListOfRestaurants(
      listOfRestaurants.filter((rest) => rest.info.avgRating > 4.1)
    );

  return (
    <div className="body">
      <div className="filter">
        <button className="fiter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
