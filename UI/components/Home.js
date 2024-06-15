import video from "../assets/bgvideo.mp4";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const openMailClient = () => {};
  return (
    <>
      <div className={classes["main"]}>
        <div className={classes["header"]}>
          <div className={classes["header_top"]}>
            <div className={classes["logo_container"]}>
              <div className={classes["logo"]}>
                <img
                  src="https://www.siemens.com/img/svg/logo-dark-3958fff2.svg"
                  alt="Siemens"
                />
              </div>
            </div>
            <div className={classes["right"]}>
              <div className={`${classes.region} ${classes.mail}`}>
                <div className={classes["selector-region"]}>
                  <i
                    className={`fa-solid fa-earth-americas ${classes.mail}`}
                  ></i>
                  <span className={classes["mail"]}>India</span>
                </div>
              </div>
              <a className={classes["mail"]} onClick={openMailClient}>
                <i className={`fa-solid fa-envelope ${classes["mail"]}`}></i>
                <span className={classes["mail"]}>Contact</span>
              </a>
              <div className={classes["search"]}>
                <input
                  type={classes["text"]}
                  className={classes["search-box"]}
                  placeholder="Search..."
                />
                <button className={classes["search-btn"]}>
                  <i className={classes["ph-magnifying-glass-bold"]}></i>
                </button>
                <button className={classes["close-btn"]}>
                  <i className={classes["ph-x-bold"]}></i>
                </button>
              </div>
            </div>
          </div>

          <div className={classes["second_lane"]}>
            <nav className={classes["first_nav"]}>
              <ul className="zero mail">
                <a href="index.html">Home</a>
              </ul>
              <ul className="mail">
                <a href="https://siemensapc.sharepoint.com/:x:/r/teams/SD-FrameworkAD001/_layouts/15/doc2.aspx?sourcedoc=%7BA6A93113-893D-4304-8B9B-461D465F6159%7D&file=New%20Hardware%20Recd-%20Laptops%20&%20Desktops%20Preparation%20.xlsx=&action=default&mobileredirect=true">
                  Preparation
                </a>
              </ul>
            </nav>
            <nav className={classes["second_nav"]}>
              <ul className="mail">
                <a href="https://siemensapc.sharepoint.com/:x:/r/teams/SD-FrameworkAD001/_layouts/15/doc2.aspx?sourcedoc=%7BCC842796-D642-4354-A476-0BE42B754E76%7D&file=Vendor%20Call%20Logging%20Data.xlsx&wdLOR=c0AE3947F-178A-4B68-B584-E60E66B53798&action=default&mobileredirect=true&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1717927226128&web=1">
                  Vendor Call-log
                </a>
              </ul>
              <ul className="mail">
                <Link to="hardware">Hardware Allocation</Link>
                {/* <a href="http://">Hardware Allocation</a> */}
              </ul>
              <ul className="mail">
                <Link to="stock">Stocks</Link>
                {/* <a href="http://">Stocks</a> */}
              </ul>
            </nav>
          </div>
        </div>
        <div className={classes["center_content"]}>
          <div className={classes["header_container"]}>
            <h1>
              <span className={classes["h1_content"]}>
                Thinking Automation Ahead Webinar Series
              </span>
            </h1>
          </div>
          <div className={classes["responsiveLayout"]}>
            <div className={classes["home_text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ab iste assumenda repellat, eius, maxime porro sapiente voluptas
              pariatur sunt sed doloremque tempore quos? Ullam voluptatum minima
              alias eaque architecto.
            </div>
            <div className={classes["container-button"]}>
              <button type="button">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>
        <footer className={classes["last"]}>
          <button type={classes["button"]}>
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
      <div className={classes["center"]}>
        {/* Video element */}
        <video
          className={classes["background-video"]}
          autoPlay
          loop
          muted
          poster=""
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

const Home1 = () => {
  return <div className="header"></div>;
};

export default Home;
