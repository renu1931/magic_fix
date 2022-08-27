import React, { useState } from "react";
// import gift_box from "../images/gift_box.png";
import Menu from "./Menu";

export default function BrideGroom() {
  const [items, setItems] = useState(Menu);
  const filterMenu = (category) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: " #fadbdb" }}>
        <div id="menu-title">
          <h1>Magic Fix Brides & Grooms</h1>
        </div>
        <div
          className="d-flex justify-content-around mx-5 py-5 py-5 mb-5"
          id="menu-btn"
        >
          <button
            className="btn"
            onClick={() => setItems(Menu)}
            style={{
              backgroundColor: items === Menu ? "rgb(245, 79, 176)" : "",
              color: items === Menu ? "#fff" : "",
            }}
          >
            All
          </button>
          <button className="btn" onClick={() => filterMenu("bride")}>
            Bride
          </button>
          <button className="btn" onClick={() => filterMenu("groom")}>
            Groom
          </button>
        </div>

        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, age } = elem;
            return (
              <div
                className="col-md-5 mx-auto mb-5"
                key={id}
                id="menu-container"
              >
                <div className="row pb-5">
                  <div className="col-md-4">
                    <img
                      src={image}
                      aria-hidden
                      alt="image-1"
                      id="menu-image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8" id="menu-heading-container">
                    <h3 id="menu-h3">{name}</h3>
                    <h5 id="menu-h5">{age}</h5>
                    <h4 id="menu-h4">{description}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
