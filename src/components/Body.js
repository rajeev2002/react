import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
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

  const searchRestaurants = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((rest) =>
        rest.info.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          ></input>
          <button className="search-btn" onClick={searchRestaurants}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {filteredRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
