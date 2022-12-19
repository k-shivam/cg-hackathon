import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route ,Link, Routes, Navigate} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import PageNotFound from "./components/pages/PageNotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="list">
        <Navbar/>
        </div>
        <Routes>
          <Route exact path="/" element={<div className='container'>
        <div className='py-4'>
        <h3>Home Page</h3>
        <p className='lead'>
        Hi, This is simple website to add users and see list of users after you are signed in.
        <br/>
        <br/>
        After going to list page you can see the detail of a particular user. Take actions like edit, or can delete
        the user from the list.
        <br/>
        <br/>
        But before that you have to create an account, and if account is already there you need to sign in.
        </p>
        </div>
    </div>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/user/add" element={<AddUser/>}/>
          <Route exact path="/user/edit/:id" element={<EditUser/>}/>
          <Route exact path="/user/view/:id" element={<User/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
