import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from "react-router-dom"
import { Privaterct } from "./components/auth/private";

function App() {
  return (
    <div className="App">
      <Navbar />
      

      {/* <EmployeeList/> */}
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/employees" element={<EmployeeList/>}/>  
      <Route path="/admin" element={<Privaterct><Admin/></Privaterct>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/employees/:id" element={<EmployeeDetails/>}/>
      <Route path="/" element={<Home/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;



