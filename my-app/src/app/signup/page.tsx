"use client"
import React, { useState } from 'react';
import axios from 'axios';

function signup() {
  const [name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState ("user")
  const [adresse,setAdress]=useState("")
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
  
    if (role !== 'admin' && role !== 'user') {
      setErrorMessage('Invalid role');
      return; 
    }
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        name,
        LastName,
        email,
        password,
        role,
        adresse
      });
      if (response.data.message) {
        console.log('User created successfully!');
         window.location.href='/login'
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while creating the user');
    }
  };
  

  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          src="https://i.pinimg.com/1200x/55/61/7d/55617d321f690bee67b399d767843a5f.jpg"
          alt="Login Image"
          width={500}
          height={400}
        />
      </div>
      <div  className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="mt-2 text-gray-600">Enter your details below </p>
          </div>
          <form   onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                defaultValue={"name"}
                htmlFor="email"
                className="block font-bold text-gray-700"
              >
                Name{" "}
              </label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                defaultValue={"name"}
                htmlFor="email"
                className="block font-bold text-gray-700"
              >
                Last name{" "}
              </label>
              <input
                id="last-name"
                type="last-name"
                value={LastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
            onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div className="mt-4">
          <label className="block font-bold text-gray-700">User Type</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
              Admin
            </label>
          </div>
        </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-red-500 rounded-md  focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Create account
              </button>
              {errorMessage && (
            <span className="text-sm text-red-500">{errorMessage}</span>
          )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;