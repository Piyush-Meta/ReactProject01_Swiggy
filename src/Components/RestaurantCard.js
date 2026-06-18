import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info || {};

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = info;

 return (
  <div className="restaurant-card">
    <img
      className="restaurant-image"
      src={CDN_URL + cloudinaryImageId}
      alt={name}
    />

    <div className="restaurant-content">
      <h3>{name}</h3>

      <p>{cuisines?.slice(0, 3).join(", ")}</p>

      <div className="rating-row">
        <span>⭐ {avgRating}</span>
        <span>{sla?.deliveryTime} mins</span>
      </div>

      <p>{costForTwo}</p>
    </div>
  </div>
);
};

export default RestaurantCard;