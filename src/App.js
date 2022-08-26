import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import General from './General';
import Datatables from './Datatables';
import Addadmin from './Addadmin';
import Addproduct from './Addproduct';
import User from './User';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Home" element={<Home />} />
                <Route path='/General' element={<General/>}/>
                <Route path='/Addadmin' element={<Addadmin/>}/>
                <Route path='/Addproduct' element={<Addproduct/>}/>
                <Route path='/Datatables' element={<Datatables/>}/>
            </Routes>
        </>

    );
}

export default App;
