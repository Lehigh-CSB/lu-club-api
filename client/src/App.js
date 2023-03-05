import { BrowserRouter, BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import StudentLogin from './components/Login/StudentLogin';
import TeachLogin from './components/Login/TeachLogin';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>


        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Dashboard />}/>
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/professor/login/" element={<TeachLogin />} />
            
          </Routes>
        </BrowserRouter>




    </div>
  );
}

export default App;
