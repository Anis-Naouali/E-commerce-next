import React from 'react'


const signup = () => {


  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img src="https://i.pinimg.com/1200x/55/61/7d/55617d321f690bee67b399d767843a5f.jpg" alt="Login Image" width={500} height={400} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="mt-2 text-gray-600">
              Enter your details below            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label  defaultValue={"name"} htmlFor="email" className="block font-bold text-gray-700">
                Name              </label>
              <input
                id="name"
                type="name"
                placeholder="Enter your name"
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
                Create account 
                 </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default signup