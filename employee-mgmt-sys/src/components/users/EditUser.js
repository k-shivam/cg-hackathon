import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () =>{
    let navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    const [user, setUser] = useState({
        name:"",
        username: "",
        email:"",
        phone:"",
        website:""
    })

    const onSubmit = async (e) =>{
        navigate('/home')
        e.preventDefault();
    }

    const {name, username, email, phone, website} = user
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
                            placeholder="Enter your Name"
                            name="username"
                            value={username}
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
                            placeholder="Enter your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your websit name"
                            name="website"
                            value={website}
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
