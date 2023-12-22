import ECard from "./ECard";
import './Styyling/ECardStyling.css';
import React, { useState ,useEffect} from 'react';
import {collection , doc , getDoc} from 'firebase/firestore';
import db from "../../firebase";
const EventCard =({eventId})=>{
    const [eventDate , setEventDate ] = useState({});
    const dataRecall = async () => {
        const eventInfo= collection(db,'Events');
        const eventDoc = doc(eventInfo,eventId);
        const eventShot = await getDoc(eventDoc);
        if (eventShot.exists()) {
            const data = eventShot.data();
            setEventDate(data);
        }
    }
    useEffect(() => {
        dataRecall();
    }, [eventId]);
    return(
        <ECard
        Title={eventDate.Title}
        Location={eventDate.Location}
        Date={eventDate["Date&Time"]}
        addImg={eventDate.addImg}
        OorH={eventDate.OorH}
        
        img={eventId==="IYoSEL1HRex6J9FFtRXu" ? eventDate.img : eventId === "0QzDfza0O7lvlTZFNwFs" ? eventDate.img : eventId ==="TkUC3HdTt9doXiedi3Zh" ? eventDate.img : eventDate.img }/>
    );
};
const AllECard =()=>{
    return(
< div>
<div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0 ">
    <h2 id="Title">Discover Events</h2>
<button type="button" className="btn btn-link" id="View">View all events</button>
</div>
<div className="container mt-3">
<div className="row">
    <EventCard eventId = "IYoSEL1HRex6J9FFtRXu"/>
    <EventCard eventId = "0QzDfza0O7lvlTZFNwFs"/>
    <EventCard eventId = "TkUC3HdTt9doXiedi3Zh"/>
    <EventCard eventId = "UBW4scjKbsLPSgT2adTZ"/>  
</div>
</div>
</div>
    );
}
export default AllECard;