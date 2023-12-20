import { click } from "@testing-library/user-event/dist/click";
import "./ExploreGroupCard.css";



import GroupImage1 from "./images/NP1.png";
import GroupImage2 from "./images/NP2.png";
import GroupImage3 from "./images/NP3.png";


import GroupAvatar1 from "./images/groupsAvatar.png"
import GroupAvatar2 from "./images/groupsAvatar.png"
import GroupAvatar3 from "./images/groupsAvatar.png"


import membersList1 from "./images/membersList1.png";
import membersList2 from "./images/membersList2.png";
import membersList3 from "./images/membersList3.png";



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
    
  const images = [
    {status: GroupImage1, avatar:GroupAvatar1},
    {status: GroupImage2, avatar:GroupAvatar2},
    {status: GroupImage3, avatar:GroupAvatar3},
  ]


  const listImages = [
    membersList1,
    membersList2,
    membersList3,
  ];

    return (
      <div className="EGPage">
        <div className=" container EGText-center">
        <div className="EGExplore-groups row ">Explore Groups</div>
          <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 ">
            
              {groups.map((group, cardId) => (
                <div className=" col EGCol" key={group.id}>
                <div className="EGCard">
                  {images.map((image,index) => {
                      if(cardId === index){
                        return (
                          <div className="EGBackground-img" key={index} style={{ backgroundImage: `url(${image.status})` }}>
                              <img className="EGAvatar-img" src={image.avatar}   alt="avatar" />
                          </div>
                        )
                      }
                      })}
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
                    {listImages[cardId] && (
                      <div className="EGMembers-list">
                        <img
                          className="EGMember-list-img"
                          src={listImages[cardId]}
                          alt="member-list"
                        />
                      </div>
                    )}
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