import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {

  const {id} = useParams();

  const [user,setuser] = useState([]);

  useEffect(()=>{getdata();},[])

  const getdata = async ()=>{

    const data = await fetch(`http://localhost:8080/employee/${id}`).then((d)=>d.json())

    setuser(data)
  }

  console.log(user)

  const arr= user.tasks;

  return (
    <div className="user_details">
      <img className="user_image" src={`${user.image}`} />
      <h4 className="user_name"> {user.employee_name}</h4>
      <span className="user_salary">${`${user.salary}`}</span>
      <span className="tasks">
         {arr}
      </span>
      Status: <b className="status">{user.status}</b>
      Title: <b className="title">{user.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
