import "./App.css";
import Navbar from "./components/Navbar";
import Popup from "reactjs-popup";
import { SiWebmoney } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useEffect, useState } from "react";
import "./footer.css";
import {db} from './firebase.config';

function App() {
  const msg = {
    download: {
      web: "Download our browser version",
      windows: "Download our windows version",
      mac: "Download our mac version",
      ios: "Download our ios version",
      android: "Download our android version",
    },
    about: {
      social: "About social",
      security: "Security",
      customer: "Customer support",
      partners: "Partners",
      careers: "Careers - Join Us!",
    },
    resources: {
      join: "Join",
      help: "Help Center",
      developers: "Developers",
      status: "Status",
      communities: "Communities",
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="search-text">
          <h2 style={{ color: "white" }} className="find">
            Find Events near you{" "}
          </h2>
          <p style={{ color: "white" }} className="find-2">
            Let's uncover the best places to eat, drink, and shop nearest to
            you.
          </p>
        </div>
        <div className="search-events bg-light d-flex flex-column justify-content-between  p-5">
          <h4>We will help you to find all</h4>
          <div className="input-group">
            <input type="text" placeholder="What" className="form-control" />
            <select class="form-select" aria-label="Default select example">
              <option selected>Where</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn btn-primary" type="button" id="button-addon1">
              search
            </button>
          </div>
        </div>
        <div className="row w-75 justify-content-evenly categories">
          <div className="col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4387/4387887.png"
              className="category-icon"
              alt="icon"
            />

            <p className="text-center">Arts & Entertainment</p>
          </div>
          <div className="col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6348/6348058.png"
              className="category-icon"
              alt="icon"

            />

            <p className="text-center">Bussiness & Conferences</p>
          </div>
          <div className="col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5988/5988246.png"
              className="category-icon"
              alt="icon"

            />

            <p className="text-center">PNY E-Gaming Fest</p>
          </div>
          <div className="col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded">
            <img
              src="https://www.svgrepo.com/download/120476/clock.svg"
              className="category-icon"
              alt="icon"

            />

            <p className="text-center">Events & Parties</p>
          </div>
          <div className="col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png"
              className="category-icon"
              alt="icon"

            />

            <p className="text-center">Sports & Wellness</p>
          </div>
        </div>
      </header>
      <main className="filling "></main>
      <footer className="row  bg-light">
        <div className="col col-3">
          <img src="./logo192.png" alt="logo" className="logo m-5" />
          <p className="ms-5 ">
            Match way these she avoids seeing death their fat off.
          </p>
        </div>
        <div className="col col-3 mt-5">
          <h5 className="my-3">Download</h5>
          <Popup
            trigger={
              <p>
                <SiWebmoney />
                Web Browser
              </p>
            }
            position="right center"
          >
            <div className="popup">{msg.download.web}</div>
          </Popup>
          <Popup
            trigger={
              <p>
                <IoLogoWindows />
                Windows
              </p>
            }
            position="right center"
          >
            <div className="popup">{msg.download.windows}</div>
          </Popup>
          <Popup
            trigger={
              <p>
                <FaApple />
                macOS
              </p>
            }
            position="right center"
          >
            <div className="popup">{msg.download.mac}</div>
          </Popup>
          <Popup
            trigger={
              <p>
                <MdOutlinePhoneIphone />
                IOS & Android
              </p>
            }
            position="right center"
          >
            <div className="popup">{msg.download.mac}</div>
          </Popup>
        </div>
        <div className="col col-3 mt-5">
          <h5>About</h5>
          <Popup trigger={<p>About social</p>} position="right center">
            <div className="popup">{msg.about.social}</div>
          </Popup>
          <Popup trigger={<p>Security</p>} position="right center">
            <div className="popup">{msg.about.security}</div>
          </Popup>
          <Popup trigger={<p>Customer support</p>} position="right center">
            <div className="popup">{msg.about.customer}</div>
          </Popup>
          <Popup trigger={<p>Partners</p>} position="right center">
            <div className="popup">{msg.about.partners}</div>
          </Popup>
          <Popup
            trigger={
              <p>
                Careers - <b>Join Us!</b>
              </p>
            }
            position="right center"
          >
            <div className="popup">{msg.about.careers}</div>
          </Popup>
        </div>
        <div className="col col-3 mt-5">
          <h5 className="my-3">Resources</h5>
          <Popup trigger={<p>Join</p>} position="right center">
            <div className="popup">{msg.resources.join}</div>
          </Popup>
          <Popup trigger={<p>Help Center</p>} position="right center">
            <div className="popup">{msg.resources.help}</div>
          </Popup>
          <Popup trigger={<p>Developers</p>} position="right center">
            <div className="popup">{msg.resources.developers}</div>
          </Popup>
          <Popup trigger={<p>Status</p>} position="right center">
            <div className="popup">{msg.resources.status}</div>
          </Popup>
          <Popup trigger={<p>Communities</p>} position="right center">
            <div className="popup">{msg.resources.communities}</div>
          </Popup>
        </div>
      </footer>
      <hr className="m-0 text-secondary " />
      <div className="row bg-light d-flex justify-content-between w-100">
        <div className="col col-6 d-flex ">
          <p className="m-3">Support</p>
          <p className="m-3">Docs</p>
          <p className="m-3">Terms of Usage</p>
          <p className="m-3">Privacy</p>
        </div>
        <div className="col col-6">
          <p className="m-3 text-end">© 2023 Websitca All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
