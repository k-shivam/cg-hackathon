import React from 'react';
import userData from '../../users';
import {Link } from 'react-router-dom';


const Home = props => {
  return (
    <div>
        <h3>Home View</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope='col'>Website</th>
                <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
                {userData.map((ele, index) =>
                    <tr key={ele.id}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                        <td>{ele.website}</td>
                        <td>
                            <Link className="btn btn-primary m-2" to={`/user/view/${ele.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
                            <Link className="btn btn-primary m-2" to={`/user/edit/${ele.id}`}>Edit</Link>
                            <Link className='btn btn-danger m-2'onClick={()=>console.log('delete')}>Delete</Link>
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
