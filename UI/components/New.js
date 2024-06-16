import React, { useState } from "react";
import "./New.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpenAsset, setIsOpenAsset] = useState(false);
  const [isOpenKilldisk, setIsOpenKilldisk] = useState(false);
  const [isOpenDispose, setIsOpenDispose] = useState(false);
  const [isOpenOrderInfo, setIsOpenOrderInfo] = useState(false);

  const openMailClient = () => {
    // Handle opening mail client logic here
  };

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
            <h3 onClick={() => toggleDropdown("Asset")}>
              Asset Belongs to:
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`dropdown-icon ${isOpenAsset ? "rotate-icon" : ""}`}
              />
            </h3>
            {isOpenAsset && (
              <div className="dropdown-container">
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
            )}
          </div>
          <div className="optional">
            <h3 onClick={() => toggleDropdown("Killdisk")}>
              Killdisk
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`dropdown-icon ${
                  isOpenKilldisk ? "rotate-icon" : ""
                }`}
              />
            </h3>
            {isOpenKilldisk && (
              <div className="dropdown-container">
                <div className="data">
                  <div className="options">
                    <label htmlFor="">Killdisk Date</label>
                    <input type="date" placeholder="Enter the unique number" />
                  </div>
                </div>
                <div className="attach">
                  <label htmlFor="file">Attach</label>
                  <input type="file" name="" id="" />
                </div>
              </div>
            )}
          </div>
          <div className="optional">
            <h3 onClick={() => toggleDropdown("Dispose")}>
              Dispose
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`dropdown-icon ${
                  isOpenDispose ? "rotate-icon" : ""
                }`}
              />
            </h3>
            {isOpenDispose && (
              <div className="dropdown-container">
                <div className="data">
                  <div className="options">
                    <label htmlFor="">Dispose Date</label>
                    <input type="date" placeholder="Enter the unique number" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="optional">
            <h3 onClick={() => toggleDropdown("OrderInfo")}>
              Order Information related
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`dropdown-icon ${
                  isOpenOrderInfo ? "rotate-icon" : ""
                }`}
              />
            </h3>
            {isOpenOrderInfo && (
              <div className="dropdown-container">
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
            )}
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

{
  /* // import React, { useState } from "react";
// import "./New.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const App = () => { */
}
{
  /* //   const [formData, setFormData] = useState({ */
}
{
  /* //     issueTo: "",
//     serialNumber: "",
//     type: "",
//     model: "",
//     expires: "",
//     nodeName: "",
//     assetOwner: "",
//     costCenter: "",
//     receivedDate: "",
//     condition: "",
//     note: "",
//     misStoreLocation: "",
//     killdiskDate: "",
//     disposeDate: "",
//     poNumber: "",
//     order: "",
//     purchaseNo: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target; */
}
{
  /* //     setFormData((prevData) => ({ */
}
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here, e.g., send data to backend
//     console.log("Form submitted with data:", formData);
//     // Reset form fields if needed
//     setFormData({
//       issueTo: "",
//       serialNumber: "",
//       type: "",
//       model: "",
//       expires: "",
//       nodeName: "",
//       assetOwner: "",
//       costCenter: "",
//       receivedDate: "",
//       condition: "",
//       note: "",
//       misStoreLocation: "",
//       killdiskDate: "",
//       disposeDate: "",
//       poNumber: "",
//       order: "",
//       purchaseNo: ""
//     });
//   };

//   const openMailClient = () => {
//     // Handle opening mail client logic here
//   };

//   return (
//     <div className="main">
//       <div className="header">
//         <div className="header_top">
//           <div className="logo_container">
//             <div className="logo">
//               <img
//                 src="https://www.siemens.com/img/svg/logo-dark-3958fff2.svg"
//                 alt="Siemens"
//               />
//             </div>
//           </div>
//           <div className="right">
//             <button className="tag">Save</button>
//             <FontAwesomeIcon icon={faTimes} className="fa-solid" />
//           </div>
//         </div>
//       </div>
//       <div className="center">
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="heading">Adding New Asset</div>
//           <div className="data">
//             <div className="options">
//               <label htmlFor="issueTo">Issue to:</label>
//               <input
//                 type="text"
//                 id="issueTo"
//                 name="issueTo"
//                 value={formData.issueTo}
//                 onChange={handleChange}
//                 placeholder="Enter unique number"
//               />
//             </div>
//           </div>
//           {/* Additional form fields omitted for brevity */}
//           <div className="bottom">
//             <button type="submit" className="save-button">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//       <footer className="footer">
//         <button type="button" onClick={openMailClient}>
//           Contact us
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default App;
