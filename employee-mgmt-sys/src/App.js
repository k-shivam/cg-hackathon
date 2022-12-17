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

function App() {
  return (
    <div className="App">
      <Router>
      <div className="list">
        <Navbar/>
        </div>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/user/add" element={<AddUser/>}/>
          <Route exact path="/user/edit/:id" element={<EditUser/>}/>
          <Route exact path="/user/view/:id" element={<User/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
