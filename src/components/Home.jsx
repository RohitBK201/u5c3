import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useState } from "react";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  const [ply,setply]= useState([])

  useEffect(()=>{
    getdata();
  },[])

  const getdata = async ()=>{

    const data = await fetch("http://localhost:8080/employee").then((d)=>d.json());

    setply(data)

  }

  const ttl = ply.length

  const [trm,settrm] = useState(0);

  const [prm,setprm] = useState(0);

  const [tnw,settnw] = useState(0);

  


  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees: <span className="totalemp">{ttl}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{trm}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{prm}</span>
        </div>
        <div>
          Total New: <span className="total_new">{tnw}</span>
        </div>
      </div>
    </>
  );
};
