
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  
  const [emp,setEmp] = useState([])
  
  useEffect(()=>{
    getdata();
  },[])

  const getdata = async ()=>{

    const data = await fetch("http://localhost:8080/employee").then((d)=>d.json());

    setEmp(data)

  }

  const navigate = useNavigate();

  
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
     

        {
        emp.map((e)=>(

          
          <div className="employee_card" key={e.id} onClick={()=>{

            navigate(`/employees/${e.id}`)

          }}>
        
          <img className="employee_image"  src={e.image}/>
          <span className="employee_name"> {e.employee_name} </span>
          <span className="employee_title"> {e.title} </span>
        
        </div>

        
        ))}
     

      
    </div>
  );
};
