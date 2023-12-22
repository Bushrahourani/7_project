import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Correct the import path if needed

const BottomCard = ({
  group,
  joinStatus,
  setJoinStatus,
  updateGroupMembers,
}) => {
  const handleJoinLeave = async () => {
    const newStatus = joinStatus ? "Leaved" : "Joined";
    const groupRef = doc(db, "groups", group.id);
    const newMembersNum = joinStatus
      ? group.membersNum - 1
      : group.membersNum + 1;

    try {
      await updateDoc(groupRef, {
        membersNum: newMembersNum,
        buttonValue: newStatus,
      });

      setJoinStatus((prevStatus) => ({
        ...prevStatus,
        [group.id]: newStatus === "Joined",
      }));

      // Call the update function from the parent component
      updateGroupMembers(group.id, newMembersNum);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div className="card-footer">
      <button
        type="button"
        className={`join-group ${joinStatus ? "joined" : ""}`}
        onClick={handleJoinLeave}
      >
        {joinStatus ? "Leave Group" : "Join Group"}
      </button>
    </div>
  );
};

export default BottomCard;
