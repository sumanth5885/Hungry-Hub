import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./FoodItem.css"
import { StoreContext } from "../../context/StoreContext"

const FoodItem = ({item}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={url+"/images/"+item.image} alt="" />
        {
          !cartItems[item._id] ? <img className="add" onClick={()=>{addToCart(item._id)}} src={assets.add_icon_white} alt="" /> : <div className="food-item-counter">
            <img onClick={()=> {removeFromCart(item._id)}} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[item._id]}</p>
            <img onClick={()=> {addToCart(item._id)}} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
      </div>
      
    </div>
  )
}

export default FoodItem
