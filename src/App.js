import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SideBar from "./Components/Sidebar";
import Dashboard from './Components/Dashboard';
import AddStudents from './Components/AddStudents';
import AllStudents from './Components/AllStudents';
import EditStudents from './Components/EditStudents';

function App() {

  let data1 = {earning:"20,000",annual:"2,40,000",task:"20",pending:26}
  return <>
    <Router>
        <div style={{display:"grid",gridTemplateColumns:"17% 83%"}}>
        <div><SideBar/></div>
        <div>
          <Routes>
                <Route path ='/dashboard' element={<Dashboard value={data1}/>}/>
                <Route path = '/all-students' element={<AllStudents/>}/>
                <Route path = '/add-students' element={<AddStudents/>}/>
                <Route path = '/edit-students/:id' element={<EditStudents/>}/>
                <Route path ='/' element={<Dashboard value={data1}/>}/>
          </Routes>
        </div>
        </div>
    </Router>
  </>
}

export default App;
