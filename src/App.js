import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Profile from "./components/Profile";
import PendingRequest from "./components/PendingRequest";
import Task from "./components/Task";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Profiledetails from "./components/Profiledetails";
import ResetPassword from "./components/ResetPassword";

function App() {

  return <>
  <BrowserRouter>
 <div id="wrapper">
  <SideBar/>
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/adduser" element={<AddUser/>}/>
    <Route path="/PendingRequest" element={<PendingRequest/>}/>
    <Route path="/Profile" element={<Profile/>}>
      <Route path="details" element={<Profiledetails/>}></Route>
      <Route path="resetpassword" element={<ResetPassword/>}></Route>
      </Route>
    <Route path="/task" element={<Task/>}/>
    <Route path="*" element={<Navigate to="/dashbord"/>}/>
  </Routes>
  </div>
  </BrowserRouter>
  </>
}

export default App;
