

import { useEffect, useState } from "react";
import { collection, getDocs , updateDoc  } from "@firebase/firestore";



import { db } from "../../firebase";


import"./GlobalConference.css"



const GlobalConference = () => {

    const [conferences, setConferences] = useState([]);
    const conferencesRef = collection(db, "users");

    useEffect(() => {
      async function getConferences() {
          try {
              const data = await getDocs(conferencesRef);
              const filteredData = data.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
              }));
              setConferences(filteredData);
          } catch (error) {
              console.error(error);
          }
      }
      getConferences();
  },[]);
   

    return (
      <div className="CP">
        <div className="conference-section">
          <div className="container">
            {conferences.map((conference) => (
              <div
                key={conference.id}
                className="CRow row justify-content-center row-cols-1 row-cols-xs-auto row-cols-sm-1 row-cols-md-1  row-cols-lg-auto row-cols-xl-auto row-cols-xxl-2 "
              >
                <div className="col CInfo">
                  <img src={conference.statusPicture} alt="image"></img>
                  <div className="CTitle">{conference.title}</div>
                  <div className="CDisruption">{conference.description}</div>
                  <div className="CMembers">
                    <img src={conference.listPicture} alt="members-list"></img>
                    <div>are attending</div>
                  </div>
                </div>

                <div className="col CTicket">
                  <div className="CTicket-header">
                    <h1 className="CTTitle"> Book a conference</h1>
                  </div>
                  <div className="ticket">
                    <div className="cardWrap">
                      <div className="CCard CCardLeft">
                        <div className="CDate-time">
                          <div className="CDate">
                            <span>Date</span>
                            <h2>{conference.date}</h2>
                          </div>
                          <div className="CTime">
                            <span>time</span>
                            <h2>{conference.time}</h2>
                          </div>
                        </div>
                        <div className="CAddress">
                          <span>Address</span>
                          <h2>2{conference.address}</h2>
                        </div>
                        <div className="CShare-button">
                          <button className="CShare">
                            <i className="bi bi-share-fill"></i> Share
                          </button>
                        </div>
                      </div>
                      <div className="CCard CCardRight">
                        <div className="CNumber"></div>
                        <div className="CBook-button">
                          <img className="CQR" src={conference.QRCode} alt=""></img>
                          <button className="CBook">
                            <i className="bi bi-ticket-fill"></i> Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
} 


export default GlobalConference;