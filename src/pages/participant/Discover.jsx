/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react'

const Discover = () => {

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    console.log(pass);
  }

  const addParticipant = ()=> {
    setEmail(email);
    setPassword(pass);

    console.log("email is : ", email);
    console.log("password is : ", pass);
  }

  const isCreateUser = !email || !pass;


  return (
    <div class=" flex items-center justify-center min-w-screen min-h-screen h-full">
    <p className="absolute left-1 top-1 font-bold text-2xl" >Logo</p>
  <form class=" w-1/3 h-3/5 bg-white shadow-lg rounded px-8 pt-6 pb-8 space-y-6 flex flex-col ">
  
  <div className=" flex items-center justify-center"><p className="text-center font-bold text-3xl border-b-2 w-1/2">Sign in</p></div>
    <div class="mb-4 space-y-3">
      <label class="block text-gray-700 text-xl font-bold mb-2" for="username">
        Email
      </label>
      <input class="text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" id="username" type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
    </div>
    <div class="mb-6 space-y-3">
      <label class="block text-gray-700 text-xl font-bold mb-2" for="password">
        Password
      </label>
      <input class="text-xl shadow appearance-none border focus:border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-500 focus:shadow-outline transition-all" id="password" type="password" placeholder="******************" value={pass} required onChange={handlePassChange} />
      <p classNames="text-red-500 text-xs italic"  >Please choose a password.</p>
    </div>
    <div class="flex flex-col items-center justify-between space-y-4">
      <button onClick={addParticipant} disabled= {isCreateUser} className={`w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${isCreateUser && "opacity-50 cursor-not-allowed" }`} type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        New to Sports? Sign up
      </a>
    </div>
  </form>
</div>

  )
}

export default Discover