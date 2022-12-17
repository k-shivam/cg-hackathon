import React, {useState, useRef} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

const Contact = props => {
    const fullName = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirm = useRef()
    
    const countries = ["India", "Australia", "England", "Pakistan", "China"]

    const handleSubmit = (event) => {
        console.log(`
        fullName: ${fullName}
        email: ${email}
        password: ${password}
        passwordConfirm: ${passwordConfirm}
    `);
    event.preventDefault();
    }

  return (
    <div className='flex h-screen bg-gray-500 w-screen items-center justify-center'>
        <Card>
            <h1 className='text-3xl'>Signup</h1>
            <form className='mt-4' onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="full_name">
                  Full Name
            </label>
            <input
              ref={fullName}
              id="full_name"
              placeholder="Full name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            </form>
        </Card>
    </div>
  );
};

export default Contact;
