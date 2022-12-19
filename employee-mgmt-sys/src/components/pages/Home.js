import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';


const Home = props => {
    const [userData, setUserData] = useState([])
    const {user} = localStorage

    const fetchAllUsers = () =>{
        axios.get('http://localhost:3001/users')
        .then((resp) =>{
            setUserData(resp.data)
        })
        .catch((err) =>{
            alert(err)
        })
    }

    useEffect(()=>{
        fetchAllUsers()
    }, [])

    const handleDeleteClick = (id) =>{
        axios.delete(`http://localhost:3001/users/${id}`)
        .then((resp)=>{
            alert("success")
        })
        .catch((err)=>{
            alert(err)
        })
        fetchAllUsers()
    }

  return (
    <div>
        <h3>Home View</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">id</th>
                <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
                {userData.map((ele, index) =>
                    <tr key={ele.id}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.number}</td>
                        <td>{ele._id}</td>
                        <td>
                            {user?<Link className="btn btn-primary m-2" to={`/user/view/${ele._id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>:null}
                            <Link className="btn btn-primary m-2" to={`/user/edit/${ele._id}`}>Edit</Link>
                            <Link className='btn btn-danger m-2'onClick={()=>handleDeleteClick(ele._id)}>Delete</Link>
                        </td>
                    </tr>
            )
            }
            </tbody>            
    </table>
    </div>
  );
};

export default Home;
