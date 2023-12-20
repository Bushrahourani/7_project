import "./GroupCard.css";


import { useEffect, useState } from "react";
import { collection, getDocs} from "@firebase/firestore";

import { db } from "../../firebase";

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


  return (
    <div className="page-Group-Card">
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
          {groups.map((group, cardId) => (
            <div className="col GC-col" key={group.id}>
              <div className="GCard ">
                          <div className="GCBackground-img"  style={{ backgroundImage: `url(${group.statusPicture})` }}>
                              <img className="GCAvatar-img" src={group.avatarPicture}   alt="avatar" />
                          </div>
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
                    <div className="GCMembers-list">
                      <img className="GCMember-list-img" src={group.listPicture} alt="Member list" />
                    </div>
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
