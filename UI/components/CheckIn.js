import React, { useState } from "react";
import "./New.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCaretDown,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpenAsset, setIsOpenAsset] = useState(false);
  const [isOpenKilldisk, setIsOpenKilldisk] = useState(false);
  const [isOpenDispose, setIsOpenDispose] = useState(false);
  const [isOpenOrderInfo, setIsOpenOrderInfo] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "Asset":
        setIsOpenAsset(!isOpenAsset);
        break;
      case "Killdisk":
        setIsOpenKilldisk(!isOpenKilldisk);
        break;
      case "Dispose":
        setIsOpenDispose(!isOpenDispose);
        break;
      case "OrderInfo":
        setIsOpenOrderInfo(!isOpenOrderInfo);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    if (window.confirm("You want to close this tab?")) {
      window.location.href = "/stock"; // Redirect to the stock page
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div className="header-top">
          <div className="logo-container">
            <div className="heading">CheckInAsset</div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="right">
          <div className="top-btn">
            <button className="save-btn">Save</button>
          </div>
          <div className="close" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="fa-2x close-icon" />
          </div>
        </div>
        <div className="form">
          <div className="data">
            <div className="options">
              <label htmlFor="">Issue to:</label>
              <input type="text" placeholder="Enter the unique number" />
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Serial Number</label>
              <input type="text" placeholder="Enter the model Number" />
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Type:</label>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Model</label>
              <input type="text" placeholder="Enter the unique number" />
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Expires</label>
              <input type="text" placeholder="Enter the unique number" />
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Node Name</label>
              <input type="text" placeholder="Enter the unique number" />
            </div>
          </div>
          <div class="data">
            <div class="options">
              <label for="">Status:</label>
            </div>
            <div class="status">
              <button class="tab">MIS</button>
              <button class="tab">Buyback</button>
              <button class="tab">Disposed</button>
              <button class="tab">New Purchase/to be continued</button>
              <button class="tab">Permanently returned to MIS</button>
            </div>
          </div>
          <div class="data">
            <div class="options">
              <label for="">Location:</label>
            </div>
            <div class="location">
              <button class="tab">Home</button>
              <button class="tab">MIS</button>
              <button class="tab">MIS-Compactor room</button>
              <button class="tab">Mezzanine</button>
              <button class="tab">Buyback</button>
            </div>
          </div>
          <div class="data">
            <div class="options">
              <label for="">Condition:</label>
            </div>
            <div class="location">
              <button class="tab">Home</button>
              <button class="tab">MIS</button>
              <button class="tab">MIS-Compactor room</button>
              <button class="tab">Mezzanine</button>
              <button class="tab">Buyback</button>
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">CheckIn Date</label>
              <input type="date" placeholder="Enter the unique number" />
            </div>
          </div>
          <div className="bottom">
            <button className="save-btn">CheckIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
