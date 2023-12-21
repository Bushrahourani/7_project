import './App.css';
import Navbar from './components/Navbar';
import { GiAchievement } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className='search-text'>
          <h2 style={{color:'white'}} className='find'>Find Events near you </h2>
          <p style={{color:'white'}} className='find-2'>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
        </div>
        <div className='search-events bg-light d-flex flex-column justify-content-between  p-5'>
          <h4>We will help you to find all</h4>
          <div className='input-group'>
          <input type='text' placeholder='What'  className='form-control'/>
          <select class="form-select" aria-label="Default select example">
  <option selected>Where</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
          <button class="btn btn-primary" type="button" id="button-addon1">search</button>
          </div>

        </div>
        <div className='row w-75 justify-content-evenly categories'>
          <div className='col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded'>
          <img src='https://cdn-icons-png.flaticon.com/512/4387/4387887.png' className='category-icon'/>

              <p className='text-center'>Arts & Entertainment</p>
          </div>
          <div className='col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded'>
          <img src='https://cdn-icons-png.flaticon.com/512/6348/6348058.png' className='category-icon'/>

              <p className='text-center'>Bussiness & Conferences</p>
          </div>
          <div className='col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded'>
          <img src='https://cdn-icons-png.flaticon.com/512/5988/5988246.png' className='category-icon'/>

              <p className='text-center'>PNY E-Gaming Fest</p>
          </div>
          <div className='col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded'>
          <img src='https://www.svgrepo.com/download/120476/clock.svg' className='category-icon'/>

              <p className='text-center'>Events & Parties</p>
          </div>
          <div className='col col-2 bg-light category d-flex flex-column justify-content-center align-items-center p-5 rounded'>
          <img src='https://cdn-icons-png.flaticon.com/512/2933/2933245.png' className='category-icon'/>

              <p className='text-center'>Sports & Wellness</p>
          </div>


        </div>
      </header>
      <main className='filling '></main>
      <footer className='row  bg-light'>
        <div className='col col-3'>
        <img src="./logo192.png" alt="logo" className="logo m-5" />
        <p className='ms-5 '>Match way these she avoids seeing death their fat off.</p>
        </div>
        <div className='col col-3 mt-5'>
        <h5 className='my-3'>Download</h5>
          <p>
          <SiWebmoney />
            Web Browser</p>
          <p>
          <IoLogoWindows />
            Windows</p>
          <p>
          <FaApple />
macOS</p>
          <p>
          <MdOutlinePhoneIphone />
            IOS & Android</p>
        </div>
        <div className='col col-3 mt-5'>
        <h5>About</h5>
          <p>About social</p>
          <p>Security</p>
          <p>Customer support</p>
          <p>Partners</p>
          <p>Careers - <b>Join Us!</b></p>
        </div>
        <div className='col col-3 mt-5'>
        <h5 className='my-3'>Resources</h5>
          <p>Join</p>
          <p>Help Center</p>
          <p>Developers</p>
          <p>Status</p>
          <p>Communities</p>
        </div>
      </footer>
      <hr className='m-0 text-secondary '/>
      <div className='row bg-light d-flex justify-content-between w-100'>
        <div className='col col-6 d-flex '>
        <p className='m-3'>Support</p>
        <p className='m-3'>Docs</p>
        <p className='m-3'>Terms of Usage</p>
        <p className='m-3'>Privacy</p>

        </div>
        <div className='col col-6'>
        <p className='m-3 text-end'>© 2023 Websitca All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
