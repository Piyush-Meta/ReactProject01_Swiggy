import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import  Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
console.log("Shimmer =", Shimmer);
const Body = () => {
  const [listofRestau,setListofRestau] = useState([]);
  const [filteredRestaunt, setFilteredRestaunt] = useState([]);
  useEffect(() => {
   fetchData();
  }, []);

  const [SearchText, setSearchText] = useState("");
console.log("rendered");
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4541093&lng=80.3504691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestau(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false) return (
  <h1>Looks like you are offline!! Please check your internet connection</h1>
  );
  //CONDITIONAL RENDERING
  if(listofRestau.length === 0){
    return <Shimmer/>;
  }
  return (
    <div className="body">
      <div className="filter">
        <input type="text"
         className="search-box" 
         placeholder="Search for restaurants..." 
          value= {SearchText} 
          onChange={(e) => setSearchText(e.target.value)}/>
        <button className ="search-btb" onClick ={() => {
          //filter the restraurants card and upfdate the UI
         const filteredRest = listofRestau.filter((restaurant) => restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase()));
         setFilteredRestaunt(filteredRest);
        }}> Search</button>
        <button className="filter-btn"
        onClick = {() => {
          const filteredList = listofRestau.filter(
            (restaurant) => restaurant.info.avgRating > 4.3
          );
          setListofRestau(filteredList);
        }   
                 // Logic for filtering top-rated restaurants
      }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className =" res-container">
      {filteredRestaunt.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          resData={restaurant}
        />
      ))}
    </div>
    </div>
  );
};

export default Body;