import { useEffect, useState } from "react";
import AddGame from './AddGame';
import { fetchGames } from '../../redux/slices/Admin/AdminSlice'
import { useDispatch, useSelector } from "react-redux";

const TournamentTracking = () => {

  const dispatch = useDispatch();
  const adminState = useSelector((state)=>state.admin.fetchGames)
  const [adminFetchGames, setAdminFetchGames] = useState(adminState)
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  useEffect(()=>{
    setAdminFetchGames(adminFetchGames)
  },[adminFetchGames])
  return (

    <div className='font-bold text-2xl p-2'>New Tournament
      <div className="mt-5 border-2 px-2">
      <h2 className="font-bold text-3xl" >Select Games</h2>
      <div className="mt-5 "></div>
      
        <div>
          <AddGame/>

        </div>
      
      </div>
    </div>
  )
}

export default TournamentTracking
