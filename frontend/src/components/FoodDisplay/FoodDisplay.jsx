import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import Hourglass from '../../assets/Hourglass.gif'

const FoodDisplay = ({ category }) => {
  const { food_list, isLoading } = useContext(StoreContext);

  if (isLoading) return <img src={Hourglass} alt="" />

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={i} item={item}></FoodItem>;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
