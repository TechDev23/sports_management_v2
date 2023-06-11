/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerPlayer } from '../../redux/slices/Participants/participantsActions'

const Participantsignup = () => {
  const { registerPlayer: participantSignup } = useSelector((state) => state.participants);
  console.log(participantSignup)
  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  const addParticipant =async ()=> {

    const dt = await dispatch(registerPlayer({name: email, email: pass}))
    if(dt.meta.requestStatus == "fulfilled"){
      navigate('/participant/discover')
    }

  }

  const isCreateUser = !email || !pass;

  return (
    <div className=" flex items-center justify-center min-w-screen min-h-screen h-full">
    <p className="absolute left-1 top-1 font-bold text-2xl" >Logo</p>
  <form className=" w-1/3 h-3/5 bg-white shadow-lg rounded px-8 pt-6 pb-8 space-y-6 flex flex-col ">
  <div className=" flex items-center justify-center"><p className="text-center font-bold text-3xl border-b-2 w-1/2">Sign up</p></div>
    <div className="mb-4 space-y-3">
      <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="username">
        name
      </label>
      <input className="text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" id="username" type="text" placeholder="Enter name" value={email} onChange={handleEmailChange} />
    </div>
    <div className="mb-6 space-y-3">
      <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
        Email
      </label>
      <input className="text-xl shadow appearance-none border focus:border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-500 focus:shadow-outline transition-all" id="password" type="password" placeholder='email' value={pass} required onChange={handlePassChange} />
    </div>
    <div className="flex flex-col items-center justify-between space-y-4">
      <button onClick={addParticipant} disabled= {isCreateUser} className={`w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex flex-row justify-center rounded-lg focus:outline-none focus:shadow-outline ${isCreateUser && "opacity-50 cursor-not-allowed" }`} type="button">
      {participantSignup.isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c4.411 0 8 3.589 8 8h4z" />
        </svg>
      ) : (
        ''
      )}Create Account
      </button>

      <p className='text-sm font-bold text-gray-700'>Already have an account ? <button onClick={()=> navigate("/participant/login")} className="inline-block align-baseline  text-blue-500 hover:text-blue-800" href="#">
      sign in
    </button></p>

      
    </div>
  </form>
</div>

  )
}

export default Participantsignup