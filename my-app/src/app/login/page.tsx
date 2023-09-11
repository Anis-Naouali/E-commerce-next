"use client"

import React, { useState } from 'react';
import axios from 'axios';

function login() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      if (response.data.success) {
        console.log('Login successful!');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during login');
    }
  };

    return (
        <div className="flex flex-col items-center md:flex-row md:h-screen">
            <div className="flex items-center justify-center w-full md:w-1/2">
                <img src="https://t3.ftcdn.net/jpg/01/63/76/80/360_F_163768060_W36ynqoePqZBlkMYACWtqBVQgSHt0OXN.jpg" alt="Login Image" width={500} height={400} />
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold">Login in</h1>
                        <p className="mt-2 text-gray-600">
                            Enter your details below
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-red-500 rounded-md  focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                            >
                                Login
                            </button>
                            {errorMessage && (
                <span className="text-sm text-red-500">{errorMessage}</span>
              )}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default login