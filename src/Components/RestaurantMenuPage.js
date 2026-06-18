import React, { useEffect, useState } from "react";

const MENU_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4541093&lng=80.3504691&restaurantId=435684";

const RestaurantMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL);

      const text = await data.text();

      console.log("STATUS =", data.status);
      console.log("TEXT =", text.substring(0, 200));

      if (!text || text.startsWith("<!DOCTYPE")) {
        console.log("Proxy returned HTML instead of JSON");

        // Temporary mock data
        setResInfo({
          data: {
            cards: [
              {},
              {},
              {
                card: {
                  card: {
                    info: {
                      name: "Pizza Hut",
                      cuisines: ["Pizza", "Fast Food"],
                      costForTwoMessage: "₹350 for two",
                    },
                  },
                },
              },
            ],
          },
        });

        return;
      }

      const json = JSON.parse(text);
      setResInfo(json);

    } catch (err) {
      console.error(err);
    }
  };

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwoMessage}</p>
    </div>
  );
};

export default RestaurantMenuPage;