import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

// components

import CardStats from "../cards/CardStats";

export default function HeaderStats() {

  const [count, setCount] = useState(0)

  async function getNewRegNum() {

    

    if (1) {
      const querySnapshot = await getDocs(collection(db, "newMembers2022_23"));
      querySnapshot.forEach((doc) => {
          
          setCount(count+1)
      });
      
    } else {
      throw new Error('No user logged in');
    }
  }

  useEffect(() => {
    
    getNewRegNum()
    
    
  }, [])
  

  return (
    <>
      {/* Header */}
      <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Registered"
                  statTitle={count}
                  // statArrow="up"
                  // statPercent="3.48"
                  // statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  // statIconName="far fa-chart-bar"
                  // statIconColor="bg-red-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-sky-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
