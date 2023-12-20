import { click } from "@testing-library/user-event/dist/click";
import "./GroupCard.css";


import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc } from "@firebase/firestore";

import { db } from "../../firebase";

import GroupImage1 from "./images/NP1.png";
import GroupImage2 from "./images/NP2.png";
import GroupImage3 from "./images/NP3.png";
import GroupImage4 from "./images/NP4.png";
import GroupImage5 from "./images/NP5.png";

import GroupAvatar1 from "./images/groupsAvatar.png"
import GroupAvatar2 from "./images/groupsAvatar.png"
import GroupAvatar3 from "./images/groupsAvatar.png"
import GroupAvatar4 from "./images/groupsAvatar.png"
import GroupAvatar5 from "./images/groupsAvatar.png"

import membersList1 from "./images/membersList1.png";
import membersList2 from "./images/membersList2.png";
import membersList3 from "./images/membersList3.png";
import membersList4 from "./images/membersList4.png";
import membersList5 from "./images/membersList5.png";

const GroupCard = () => {
  const [groups, setGroups] = useState([]);
  const [joinStatus, setJoinStatus] = useState({});
  const groupsRef = collection(db, "groups");

  useEffect(() => {
    const getGroups = async () => {
      try {
        const data = await getDocs(groupsRef);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          joined: false, // Assuming a 'joined' field in your Firestore documents
        }));

        setGroups(filteredData);

        let initialStatus = {};
        filteredData.forEach((group) => {
          initialStatus[group.id] = group.joined;
        });
        setJoinStatus(initialStatus);
      } catch (error) {
        console.error(error);
      }
    };

    getGroups();
  }, []);

  // Function to update the number of members for a specific group
  const updateGroupMembers = (groupId, newMemberCount) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId ? { ...group, membersNum: newMemberCount } : group
      )
    );
  };

  const images = [
    {status: GroupImage1, avatar:GroupAvatar1},
    {status: GroupImage2, avatar:GroupAvatar2},
    {status: GroupImage3, avatar:GroupAvatar3},
    {status: GroupImage4, avatar:GroupAvatar4},
    {status: GroupImage5, avatar:GroupAvatar5},
  ]


  const listImages = [
    membersList1,
    membersList2,
    membersList3,
    membersList4,
    membersList5,
  ];

  return (
    <div className="page-Group-Card">
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
          {groups.map((group, cardId) => (
            <div className="col GC-col" key={group.id}>
              <div className="GCard ">
              {images.map((image,index) => {
                      if(cardId === index){
                        return (
                          <div className="GCBackground-img" key={index} style={{ backgroundImage: `url(${image.status})` }}>
                              <img className="GCAvatar-img" src={image.avatar}   alt="avatar" />
                          </div>
                        )
                      }
              })}
                <div className="GCard-body">
                  <div className="GCard-title">{group.title}</div>
                  <div className="GCGroup-status">
                    {group.status === "Public" ? (
                      <i className="bi bi-globe GCIcon"></i>
                    ) : (
                      <i className="bi bi-lock  GCIcon"></i>
                    )}
                    {group.status} Group
                  </div>
                  <div className="GCStatistical-info row">
                    <div className="GCMembers-num col-3">
                      <div className="GCNumber">{group.membersNum}</div>
                      <div className="GCText">Members</div>
                    </div>
                    <div className="post-per-day-number col-3">
                      <div className="GCNumber">{group.postPerDay}</div>
                      <div className="GCText">Post per day</div>
                    </div>
                  </div>
                  {listImages[cardId] && (
                    <div className="GCMembers-list">
                      <img
                        className="GCMember-list-img"
                        src={listImages[cardId]}
                        alt="Member list"
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
};

export default GroupCard;
