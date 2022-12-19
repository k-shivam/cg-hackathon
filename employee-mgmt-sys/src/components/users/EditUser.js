import axios from "axios";
import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () =>{
    let navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name:"",
        email: "",
        number:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${id}`)
        .then((resp)=>{
            setUser(resp.data)
        })
        .catch((err) =>{
            alert(err)
        })
    },[])

    const onSubmit = async (e) =>{
        navigate('/home')
        axios.patch(`http://localhost:3001/users/${id}`, {"name":user.name, number:user.number, email:user.email})
        .then((resp)=>{
            setUser(resp.data)
        })
        .catch((err)=>{
            alert(err)
        })
        e.preventDefault();
    }

    const {name, number, email} = user
    const onInputChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e =>onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Email"
                            name="email"
                            value={email}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your number"
                            name="number"
                            value={number}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            
        </div>
    )
}

export default EditUser;
