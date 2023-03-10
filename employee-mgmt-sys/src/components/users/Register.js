import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password: "",
        name:"",
        number:""
    })

    const {email, password, name, number} = user

    const onInputChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e) =>{
        axios.post(`http://localhost:3001/signup`, {email:user.email, password: user.password, name:user.name, number:user.number})
        .then((resp)=>{
            setUser(resp.data)
            localStorage.setItem('user', resp.data)
            navigate('/login')
        })
        .catch((err)=>{
            alert(err)
        })
        e.preventDefault();
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
                    <br/>
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
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Number"
                            name="number"
                            value={number}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <br/>
                    <button className="btn btn-warning btn-block">Sign Up</button>
                </form>
            </div>
            </div>
    )

}

export default Register;
