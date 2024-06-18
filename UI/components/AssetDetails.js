import React from "react";
import classes from "./AssetDetails.module.css";
import Detail from "../utils/Detail";

const AssetDetails = ({ asset, onClose }) => {
  const printHandler = () => {
    window.print();
  };

  return (
    <section className={classes.assetDetailsPopup}>
      <div className={classes.backdrop}></div>
      <form className={classes.assetDetails}>
        <div className={classes.headerActions}>
          <div className={classes.closeBtn} onClick={onClose}>
            X
          </div>
          <button
            type="button"
            className={classes.printBtn}
            onClick={printHandler}
          >
            Print
          </button>
        </div>
        <header className={classes.header}>
          <h2>SIEMENS</h2>
          <div className={classes.headerDetails}>
            <Detail label="Issue Date: " value="26.03.2024" />
            <Detail label="PO NO: " value="" />
            <Detail label="Order No: " value="" />
          </div>
        </header>
        <div className={classes.heading}>
          <h2>Hardware Allocation & Receipt Form</h2>
        </div>
        <div className={classes.allocationDetails}>
          <Detail label="Issue To: " value={asset.issuedTo} />
          <Detail label="Desk Location: " value={asset.deskLocation} />
          <Detail label="Type: " value={asset.type} />
          <Detail label="Model: " value={asset.model} />
          <Detail label="Node Name: " value={asset.nodeName} />
          <Detail label="Serial Number: " value={asset.serialNumber} />
          <Detail label="Allocation: " value={asset.allocation} />
          <Detail label="Period: " value={asset.period} />
        </div>
        <div className={classes.table}>
          <div className={classes.gridHeader}>
            <div className={classes.headerCell}>Item</div>
            <div className={classes.headerCell}>QTY</div>
            <div className={classes.headerCell}>Issued</div>
          </div>
          <RowDetails assessory="CPU" assessories={asset.assessories} />
          <RowDetails assessory="LCD Monitor" assessories={asset.assessories} />
          <RowDetails
            assessory="Docking Station"
            assessories={asset.assessories}
          />
          <RowDetails assessory="Keyboard" assessories={asset.assessories} />
          <RowDetails assessory="Mouse" assessories={asset.assessories} />
          <RowDetails
            assessory="Power Adapter (Laptop)"
            assessories={asset.assessories}
          />
          <RowDetails
            assessory="Power Adaptor (Docking station)"
            assessories={asset.assessories}
          />
          <RowDetails assessory="Laptop Bag" assessories={asset.assessories} />
          {/* <RowDetails
            assessory="Modular Battery"
            assessories={asset.assessories}
          /> */}
          {/* <RowDetails assessory="Laptop Lock" assessories={asset.assessories} /> */}
          <RowDetails
            assessory="Internal HDD/ External HDD"
            assessories={asset.assessories}
          />
          <RowDetails assessory="Headphone" assessories={asset.assessories} />
          <RowDetails assessory="Cardreader" assessories={asset.assessories} />
          <RowDetails assessory="Printer" assessories={asset.assessories} />
          <RowDetails assessory="Mobile" assessories={asset.assessories} />
        </div>
        <div className={classes.hidden}>
          <div className={classes.sign}>
            <div className={classes.our}>
              <h3>Sameer Deo</h3>
              <h3>Name & Sign of Issuing Person:</h3>
            </div>
            <div className={classes.give}>
              <h3></h3>
              <h3>Name & Sign of Carrying Person:</h3>
            </div>
          </div>
          <div className={classes.instruc}>
            <p>
              I hereby confirm that I have received the above-mentioned items.
            </p>
            <p>
              System Status:[Connected/NotConnected(if not connected specify the
              reason)]
            </p>
          </div>
          <div className={classes.user}>
            <h3>Name & Sign of receiving person:</h3>
          </div>
        </div>
      </form>
    </section>
  );
};

const RowDetails = ({ assessory, assessories }) => {
  return (
    <div className={classes.data}>
      <div className={classes.dataCell}>{assessory}</div>
      <div className={classes.dataCell}>{assessories[assessory] || "-"}</div>
      <div className={classes.dataCell}>{assessories.type || "-"}</div>
    </div>
  );
};

export default AssetDetails;
