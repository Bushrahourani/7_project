import React, { useState } from 'react';
const ECard  =(props)=>{
  const [interested, setInterested] = useState(false);

  const handleInterestClick = () => {
    setInterested((prevInterested) => !prevInterested);
  };
    return( 
   <div className="col-md-3">
   <div className="card">
   <img className="card-img-top" src={props.img}alt="Card image"/>
   <a type="button" className="btn btn-primary">{props.addImg}</a>
   <span className="badge bg-danger">{props.OorH}</span>
   <div className="card-body">
   <h4 className="cardTitle">{props.Title}</h4>
   <p className="textStyling"> <i className="bi bi-calendar-check pe-1"></i> {props.Date}</p>
   <div id="Location-style">
   <p className="textStyling"><i className="bi bi-geo-alt pe-1"></i> {props.Location}</p>
   </div>
   <div className="DiscoverEvent-list">
     <img className="DiscoverEvent-list-img" src={props.listpeople} alt="member-list" />
         </div>
   <div id="edit">
   <button
  type="button"
  className={`btn btn-outline-success ${interested ? 'btn-success' : ''}`} onClick={handleInterestClick}>
  <i className='fas fa-thumbs-up'></i> Interested
</button>
  <button className="material-icons-button">
  <i className="material-icons">&#xe80d;</i>
  </button>
  </div>
  </div>
  </div>
</div>
);
}
export default ECard;