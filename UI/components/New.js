import React from "react";
import  "./New.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const openMailClient = () => {
    // Handle opening mail client logic here
  };

  return (
    <div className="main">
      <div className="header">
        <div className="header_top">
          <div className="logo_container">
            <div className="logo">
              <img
                src="https://www.siemens.com/img/svg/logo-dark-3958fff2.svg"
                alt="Siemens"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="right">
          <div className="top-btn">
            <button className="tag">Save</button>
          </div>
          <div className="close">
            <FontAwesomeIcon icon={faXmark} className="fa-2x" />
          </div>
        </div>
        <div className="form">
          <div className="heading">Adding New Asset</div>
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
                <FontAwesomeIcon icon={["fas", "plus"]} />
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
          <div className="data">
            <div className="options">
              <label htmlFor="">Status:</label>
            </div>
            <div className="status">
              <button className="tab">MIS</button>
              <button className="tab">Buyback</button>
              <button className="tab">Disposed</button>
              <button className="tab">New Purchase/to be continued</button>
              <button className="tab">Permanently returned to MIS</button>
            </div>
          </div>
          <div className="data">
            <div className="options">
              <label htmlFor="">Location:</label>
            </div>
            <div className="location">
              <button className="tab">Home</button>
              <button className="tab">MIS</button>
              <button className="tab">MIS-Compactor room</button>
              <button className="tab">Mezzanine</button>
              <button className="tab">Buyback</button>
            </div>
          </div>
          <div className="optional">
            <h3>
              Asset Belongs to:
              <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </h3>
            <div className="data">
              <div className="options">
                <label htmlFor="">Asset Owner:</label>
                <input type="text" placeholder="Enter the unique number" />
              </div>
            </div>
            <div className="data">
              <div className="options">
                <label htmlFor="">Cost Center:</label>
                <input type="text" placeholder="Enter the unique number" />
              </div>
            </div>
            <div className="data">
              <div className="options">
                <label htmlFor="">Received Date</label>
                <input type="date" placeholder="Enter the unique number" />
              </div>
            </div>
            <div className="data">
              <div className="options">
                <label htmlFor="">Condition:</label>
              </div>
              <div className="status">
                <button className="tab">Excellent</button>
                <button className="tab">Good</button>
                <button className="tab">Fair</button>
                <button className="tab">Bad</button>
              </div>
              <div className="data">
                <div className="options">
                  <label htmlFor="Note">Note</label>
                  <textarea name="Note" id="Note"></textarea>
                </div>
              </div>
              <div className="data">
                <div className="options">
                  <label htmlFor="">MIS Store Location</label>
                  <input type="text" placeholder="Enter the unique number" />
                </div>
              </div>
            </div>
          </div>
          <div className="optional">
            <h3>
              Killdisk
              <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </h3>
            <div className="data">
              <div className="options">
                <label htmlFor="">Killdisk Date</label>
                <input type="date" placeholder="Enter the unique number" />
              </div>
              <div className="attach">
                <label htmlFor="file">Attach</label>
                <input type="file" name="" id="" />
              </div>
            </div>
          </div>
          <div className="optional">
            <h3>
              Dispose
              <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </h3>
            <div className="data">
              <div className="options">
                <label htmlFor="">Dispose Date</label>
                <input type="date" placeholder="Enter the unique number" />
              </div>
            </div>
          </div>
          <div className="optional">
            <h3>
              Order Information related
              <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </h3>
            <div className="data">
              <div className="options">
                <label htmlFor="">PO No.:</label>
                <input type="text" placeholder="Enter the unique number" />
              </div>
            </div>
            <div className="data">
              <div className="options">
                <label htmlFor="">Order:</label>
                <input type="text" placeholder="Enter the unique number" />
              </div>
            </div>
            <div className="data">
              <div className="options">
                <label htmlFor="">Purchase No.</label>
                <input type="date" placeholder="Enter the unique number" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <button>Save</button>
          </div>
        </div>
      </div>

      <footer className="last">
        <button type="button">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openMailClient}
          >
            Contact us
          </a>
        </button>
      </footer>
    </div>
  );
};

export default App;
