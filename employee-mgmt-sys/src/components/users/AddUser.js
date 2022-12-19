import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddUser = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        number: "",
        password:""
    })

    const onSubmit = async (e) =>{
        navigate('/home')
        e.preventDefault();
        await axios.post(`http://localhost:3001/users`, {name:user.name, number:user.number, password:user.password})
        .then((resp) =>{
            setUser(resp.data)
        })
        .catch((err)=>{
            alert(err)
        })

        console.log(user)
    }

    const {name, number, password } = user
    const onInputChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
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
                            placeholder="Enter your Number"
                            name="number"
                            value={number}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Password"
                            name="password"
                            value={password}
                            onChange={e=>onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddUser;
