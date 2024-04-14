import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurants = () =>
    setListOfRestaurants(
      listOfRestaurants.filter((rest) => rest.info.avgRating > 4.1)
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

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
