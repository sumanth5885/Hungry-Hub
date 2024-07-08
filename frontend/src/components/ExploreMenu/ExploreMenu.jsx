import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Welcome to our food delivery service, where culinary excellence meets
        convenience! Our platform offers a diverse selection of dishes from your
        favorite local restaurants, delivered straight to your doorstep with
        just a few clicks.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, i) => {
          {
            return (
              <div
                onClick={() => {
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  );
                }}
                key={i}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          }
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
