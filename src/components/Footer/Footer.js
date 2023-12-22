import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="row  bg-light">
        <div className="col col-3">
          <img src="./logo192.png" alt="logo" className="logo m-5" />
          <p className="ms-5 ">
            Match way these she avoids seeing death their fat off.
          </p>
        </div>
        <div className="col col-3 mt-5">
          <h5 className="my-3">Download</h5>
          <p>
       
            Web Browser
          </p>
          <p>
         
            Windows
          </p>
          <p>
           
            macOS
          </p>
          <p>
           
            IOS & Android
          </p>
        </div>
        <div className="col col-3 mt-5">
          <h5>About</h5>
          <p>About social</p>
          <p>Security</p>
          <p>Customer support</p>
          <p>Partners</p>
          <p>
            Careers - <b>Join Us!</b>
          </p>
        </div>
        <div className="col col-3 mt-5">
          <h5 className="my-3">Resources</h5>
          <p>Join</p>
          <p>Help Center</p>
          <p>Developers</p>
          <p>Status</p>
          <p>Communities</p>
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

export default Footer;