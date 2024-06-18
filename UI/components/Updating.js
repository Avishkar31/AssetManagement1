// import React, { useState } from "react";
// import classes from "./Updating.css"; // Assuming you are using CSS Modules
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faXmark,
//   faCaretDown,
//   faPlus
// } from "@fortawesome/free-solid-svg-icons";

// const App = () => {
//   const [isOpenAsset, setIsOpenAsset] = useState(false);
//   const [isOpenKilldisk, setIsOpenKilldisk] = useState(false);
//   const [isOpenDispose, setIsOpenDispose] = useState(false);
//   const [isOpenOrderInfo, setIsOpenOrderInfo] = useState(false);

//   const toggleDropdown = (dropdown) => {
//     switch (dropdown) {
//       case "Asset":
//         setIsOpenAsset(!isOpenAsset);
//         break;
//       case "Killdisk":
//         setIsOpenKilldisk(!isOpenKilldisk);
//         break;
//       case "Dispose":
//         setIsOpenDispose(!isOpenDispose);
//         break;
//       case "OrderInfo":
//         setIsOpenOrderInfo(!isOpenOrderInfo);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleClose = () => {
//     if (window.confirm("You want to close this tab?")) {
//       window.location.href = "/stock"; // Redirect to the stock page
//     }
//   };

//   return (
//     <div className={classes.main}>
//       <div className={classes.header}>
//         <div className={classes["header-top"]}>
//           <div className={classes["logo-container"]}>
//             <div className={classes.heading}>Updating Asset</div>
//           </div>
//         </div>
//       </div>
//       <div className={classes.center}>
//         <div className={classes.right}>
//           <div className={classes["top-btn"]}>
//             <button className={classes["save-btn"]}>Save</button>
//           </div>
//           <div className={classes.close} onClick={handleClose}>
//             <FontAwesomeIcon
//               icon={faXmark}
//               className={`fa-2x ${classes["close-icon"]}`}
//             />
//           </div>
//         </div>
//         <div className={classes.form}>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Issue to:</label>
//               <input type="text" placeholder="Enter the unique number" />
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Serial Number</label>
//               <input type="text" placeholder="Enter the model Number" />
//               <span>
//                 <FontAwesomeIcon icon={faPlus} />
//               </span>
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Type:</label>
//               <input type="text" placeholder="" />
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Model</label>
//               <input type="text" placeholder="Enter the unique number" />
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Expires</label>
//               <input type="text" placeholder="Enter the unique number" />
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Node Name</label>
//               <input type="text" placeholder="Enter the unique number" />
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Status:</label>
//             </div>
//             <div className={classes.status}>
//               <button className={classes.tab}>MIS</button>
//               <button className={classes.tab}>Buyback</button>
//               <button className={classes.tab}>Disposed</button>
//               <button className={classes.tab}>
//                 New Purchase/to be continued
//               </button>
//               <button className={classes.tab}>
//                 Permanently returned to MIS
//               </button>
//             </div>
//           </div>
//           <div className={classes.data}>
//             <div className={classes.options}>
//               <label htmlFor="">Location:</label>
//             </div>
//             <div className={classes.location}>
//               <button className={classes.tab}>Home</button>
//               <button className={classes.tab}>MIS</button>
//               <button className={classes.tab}>MIS-Compactor room</button>
//               <button className={classes.tab}>Mezzanine</button>
//               <button className={classes.tab}>Buyback</button>
//             </div>
//           </div>
//           <div className={classes.optional}>
//             <h3 onClick={() => toggleDropdown("Asset")}>
//               Asset Belongs to:
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 className={`dropdown-icon ${
//                   isOpenAsset ? classes["rotate-icon"] : ""
//                 }`}
//               />
//             </h3>
//             {isOpenAsset && (
//               <div className={classes["dropdown-container"]}>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Asset Owner:</label>
//                     <input type="text" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Cost Center:</label>
//                     <input type="text" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Received Date</label>
//                     <input type="date" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Condition:</label>
//                   </div>
//                   <div className={classes.status}>
//                     <button className={classes.tab}>Excellent</button>
//                     <button className={classes.tab}>Good</button>
//                     <button className={classes.tab}>Fair</button>
//                     <button className={classes.tab}>Bad</button>
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="Note">Note</label>
//                     <textarea name="Note" id="Note"></textarea>
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">MIS Store Location</label>
//                     <input type="text" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className={classes.optional}>
//             <h3 onClick={() => toggleDropdown("Killdisk")}>
//               Killdisk
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 className={`dropdown-icon ${
//                   isOpenKilldisk ? classes["rotate-icon"] : ""
//                 }`}
//               />
//             </h3>
//             {isOpenKilldisk && (
//               <div className={classes["dropdown-container"]}>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Killdisk Date</label>
//                     <input type="date" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.attach}>
//                   <label htmlFor="file">Attach</label>
//                   <input type="file" name="" id="" />
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className={classes.optional}>
//             <h3 onClick={() => toggleDropdown("Dispose")}>
//               Dispose
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 className={`dropdown-icon ${
//                   isOpenDispose ? classes["rotate-icon"] : ""
//                 }`}
//               />
//             </h3>
//             {isOpenDispose && (
//               <div className={classes["dropdown-container"]}>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Dispose Date</label>
//                     <input type="date" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className={classes.optional}>
//             <h3 onClick={() => toggleDropdown("OrderInfo")}>
//               Order Information related
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 className={`dropdown-icon ${
//                   isOpenOrderInfo ? classes["rotate-icon"] : ""
//                 }`}
//               />
//             </h3>
//             {isOpenOrderInfo && (
//               <div className={classes["dropdown-container"]}>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">PO No.:</label>
//                     <input type="text" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Order:</label>
//                     <input type="text" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//                 <div className={classes.data}>
//                   <div className={classes.options}>
//                     <label htmlFor="">Purchase No.</label>
//                     <input type="date" placeholder="Enter the unique number" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className={classes.bottom}>
//             <button className={classes["save-btn"]}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
