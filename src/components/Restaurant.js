import { CDN_URL } from "../utils/constants";

const Restaurant = ({ restData }) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    restData?.info;

  const { slaString } = restData?.info?.sla;

  return (
    <div className="resto-card">
      <img className="resto-img" alt={name} src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

export default Restaurant;
