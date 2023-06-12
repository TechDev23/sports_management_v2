import { useEffect, useState } from "react";
import AddGame from './AddGame';
import { fetchGames } from '../../redux/slices/Admin/adminActions'
import { useDispatch, useSelector } from "react-redux";

const TournamentTracking = () => {

  const dispatch = useDispatch();
  const adminState = useSelector((state)=>state.admin.fetchGames)
  const [adminFetchGames, setAdminFetchGames] = useState(adminState)

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  useEffect(()=>{
    setAdminFetchGames(adminFetchGames)
  },[adminFetchGames])
  return (

    <div className='font-bold text-2xl p-2'>
        <div className="mb-4">
          <AddGame/>
        </div>
    </div>
  )
}

export default TournamentTracking
