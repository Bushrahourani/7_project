import { click } from "@testing-library/user-event/dist/click";
import "./ExploreGroupCard.css";




import { useEffect, useState } from "react";
import { collection, getDocs , updateDoc  } from "@firebase/firestore";



import { db } from "../../firebase";






const ExploreGroupCard = () => {

    const [groups, setGroups] = useState([]);
    const groupsRef = collection(db, "exploreGroups");

    useEffect(() => {
      async function getGroups() {
          try {
              const data = await getDocs(groupsRef);
              const filteredData = data.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
              }));
              setGroups(filteredData);
          } catch (error) {
              console.error(error);
          }
      }
      getGroups();
  },[]);
    

    return (
      <div className="EGPage">
        <div className=" container EGText-center">
        <div className="EGExplore-groups row ">Explore Groups</div>
          <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 ">
            
              {groups.map((group, cardId) => (
                <div className=" col EGCol" key={group.id}>
                <div className="EGCard">
                    <div className="EGBackground-img" style={{ backgroundImage: `url(${group.statusPicture})` }}>
                      <img className="EGAvatar-img" src={group.avatarPicture}   alt="avatar" />
                    </div>
                  <div className="EGCard-body">
                    <div className="EGCard-title">  {group.title}</div>
                    <div className="EGGroup-status" > {group.status === "Public" ? (<i className="bi bi-globe EGIcon"></i>) : (<i className="bi bi-lock EGIcon"></i>)} {group.status} Group</div>
                    <div className="EGStatistical-info row">
                      <div className="EGMembers-num col-3">
                        <div className="EGNumber" >{group.membersNum}</div>
                        <div className="EGText">Members</div>
                      </div>

                      <div className="EGCost-per-day-number col-3">
                        <div className="EGNumber">{group.postPerDay}</div>
                        <div className="EGText">Post per day</div>
                      </div>
                    </div>
                      <div className="EGMembers-list">
                        <img className="EGMember-list-img" src={group.listPicture} alt="member-list" />
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


export default ExploreGroupCard;