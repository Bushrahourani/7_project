import React, { useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

import "./TopDestinations.css";
const TopDestinations = () => {
  const [desData, setDesData] = useState({
    city1: "",
    city2: "",
    city3: "",
    city4: "",
    type1: "",
    type2: "",
    type3: "",
    type4: "",
    car: "",
    cat: "",
    desert: "",
    tree: "",
  });

  const desDataId = "CR3Vk7vXAxDwy90swguY";

  useEffect(() => {
    const fetchDesData = async () => {
      const docRef = doc(db, "Destinations", desDataId);
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setDesData({
            city1: data.city1,
            city2: data.city2,
            city3: data.city3,
            city4: data.city4,
            type1: data.type1,
            type2: data.type2,
            type3: data.type3,
            type4: data.type4,
            car: data.car,
            cat: data.cat,
            desert: data.desert,
            tree: data.tree,
          });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDesData();
  }, [desDataId]);

  return (
    <div classname="TopDestinations">
      <div className="titleTD container">
        TopDestinations
      </div>
      <div className="destinations-container">
        {desData ? (
          <>
            <div>
              <img
                src={desData.desert}
                alt="California"
                className="destination-img"
              />
              <h2>{desData.city1}</h2>
              <p>{desData.type1}</p>
            </div>
            <div>
              <img
                src={desData.tree}
                alt="Los Angeles"
                className="destination-img"
              />
              <h2>{desData.city2}</h2>
              <p>{desData.type2}</p>
            </div>
            <div>
              <img src={desData.cat} alt="London" className="destination-img" />
              <h2>{desData.city3}</h2>
              <p>{desData.type3}</p>
            </div>
            <div>
              <img src={desData.car} alt="London" className="destination-img" />
              <h2>{desData.city4}</h2>
              <p>{desData.type4}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TopDestinations;
