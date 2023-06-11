import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import badminton_banner from '../../assets/images/badminton_banner.jpg'
const Match = () => {

    const navigate = useNavigate();
    const [team1, setTeam1] = useState(0);
    const [team2, setTeam2] = useState(0);


    const handleT1 = () => {
        setTeam1(team1+1);

        console.log("team 1 ", team1)
    }

    const handleT2 = (e) => {
        setTeam2(team2 + 1);

        console.log("team 2 ", team2)
    }

    const postResult = () => {

        //  api call for posting the result
    }

    if(team1 == 36 || team2 == 36)
    {
        console.log("match ended");
        alert("match ended");
        navigate("/organizer/tournament");
    }

  return (
    <div className='p-2 space-y-4 '>
        <div className='font-bold  flex flex-row items-center justify-start space-x-4'>
            <p className='text-xl'>Match 1</p>
            <p className='bg-red-600 text-white text-sm p-1 px-2 rounded-lg'>live score</p>
        </div>
        <div className='w-full h-full '>
            <div className=''></div>
            <div>
                <img className='w-full max-h-[550px] bg-cover rounded-xl' src={badminton_banner} alt='badminton'/>
            </div>
        </div>

    
        <form className='flex flex-col space-y-4 w-full'>
        

    <div className='mx-4 flex flex-row justify-around '>
        <div className='flex flex-col items-end space-y-4 '>
            <p className='text-lg font-bold'>Team 1</p>
            <div className='flex w-full justify-center items-center space-x-4'>
                <label htmlFor="team_1">update score </label>
                <input value={team1} onChange={handleT1}  type="number" id="team_1" name="team_1" min="1" max="36" className='p-1 px-4 border-2  rounded-xl focus:border-orange-600 outline-none'>
                </input>
            </div>
        </div>

        <div className='flex flex-col items-start space-y-4'>
            <p className='text-lg font-bold'>Team 2</p>
            <div className='flex w-full justify-center items-center space-x-4'>
                <label htmlFor="team_2">update score </label>
                <input value={team2} onChange={handleT2} type="number" id="team_2" name="team_2" min="1" max="36" className='p-1 px-4 border-2  rounded-xl focus:border-orange-600 outline-none'>
                </input>
            </div>
        </div>
    </div>
        <div className='w-full flex flex-row justify-center items-center'>
        
        <button onClick={postResult} className='text-white p-2 px-4 w-1/4 bg-orange-400 hover:bg-orange-600 font-bold rounded-xl' type='submit'>End game</button>
        </div>

        </form>


        </div>
  )
}

export default Match