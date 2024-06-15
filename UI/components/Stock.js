import { useEffect, useState } from "react";
import classes from "./Stock.module.css";
// import { AssetData } from "./Dashboard";
import AssetForm from "./AssetForm";
import AssetDetails from "./AssetDetails";
import AssetDetails from "./Stock";
import { useNavigate } from "react-router-dom";


const addAssetHandler = (newAsset) => {
  setIsFromOpen(false);
  setAssests([...assets, newAsset]);
  const newAssetList = [...assets, newAsset];
  setFilteredAssets(
    newAssetList.filter((asset) =>
      JSON.stringify(asset).toLowerCase().includes(searchText)
    )
  );
};

const Hardware = () => {
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [assets, setAssests] = useState([]);
  const navigate = useNavigate();
  const openMailClient = () => {};

  const openForm = () => {
    setIsFromOpen(true);
  };

  const fetchAllAssets = async () => {
    try {
      const res = await fetch("http://localhost:8080/asset/all-assets");
      const data = await res.json();
      const recentAssets = data.assets.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setAssests(recentAssets.slice(0, 2) || []);
    } catch (err) {
      console.log("error occured -> ", err);
    }
  };

  const handleTagAsset = () => {
    navigate("/stock/new");
  };

  useEffect(() => {
    fetchAllAssets();
  }, []);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.header_top}>
            <div className={classes.logo_container}>
              <div className={classes.logo}>
                <img
                  src="https://www.siemens.com/img/svg/logo-dark-3958fff2.svg"
                  alt="Siemens"
                />
              </div>
            </div>
            <div className={classes.right}>
              <i title="Extract file" className="fa-solid fa-cubes"></i>
            </div>
          </div>
          <div className={classes.header_2}>
            <div className={classes.top_btn}>
              <button className={classes.tag} onClick={handleTagAsset}>
                Tag Assets
              </button>
            </div>
            <nav className={classes.list2}>
              <ul>
                <li>
                  Asset
                  <ul className={classes.dropdown}>
                    <li>All Asset</li>
                    <li>MIS</li>
                    <li>Buyback</li>
                    <li>Disposed</li>
                    <li>New Purchase/To be continued</li>
                    <li>MIS Compactor</li>
                    <li>Mezzanine</li>
                  </ul>
                </li>
                <li>
                  Accessories
                  <ul className={classes.dropdown}>
                    <li>Monitors</li>
                    <li>Mouse</li>
                    <li>Keyboard</li>
                    <li>Iphone</li>
                  </ul>
                </li>
                <li>Peoples</li>
                <li>Settings</li>
                <li>Request</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={classes.center}>
          {/* <div className={classes.firstRow}>
          <button className={classes.tag}>Tag Asset</button>
          <div className={classes.search}>
            <input
              className={classes.input}
              type="text"
              name=""
              id=""
              placeholder="Search Here"
            />
          </div>
        </div> */}
          <div className={classes.secLan}>
            <div className={classes.secondRow}>
              <div className={classes.heading}>
                <h4>Recently Updated</h4>
              </div>
            </div>
            <div className={classes.pai1}>
              <div className={classes.heading}>
                <h4>Asset by team</h4>
              </div>
            </div>
          </div>
          <div className={classes.thirdRow}>
            <div className={classes.underThird}>
              <div className={classes.heading}>
                <h4>Recently Killdisk</h4>
              </div>
            </div>
            <div className={classes.underThird}>
              <div className={classes.heading}>
                <h4>Total Retired</h4>
              </div>
            </div>
            <div className={classes.underThird}>
              <div className={classes.heading}>
                <h4>Today's Hardware Allocation</h4>
              </div>
            </div>
            <div className={classes.underThird}>
              <div className={classes.heading}>
                <h4>Recently Killdisk</h4>
              </div>
            </div>
          </div>
          <div className={classes.Lastlan}>
            <div className={classes.fourthRow}>
              <div className={classes.heading}>
                <h4>India</h4>
              </div>
            </div>
            <div className={classes.last2}>
              <div className={classes.heading}>
                <h4>Recent Updated Accessories</h4>
              </div>
            </div>
          </div>
        </div>

        <footer className={classes.last}>
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
    </>
  );
};

const Stock = () => {
  return <Hardware />;
};

export default Stock;
