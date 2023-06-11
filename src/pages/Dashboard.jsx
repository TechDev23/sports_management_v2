
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { approveTeam, getTeamsByID } from "../redux/slices/Teams/teamActions";
import { Button } from "@material-tailwind/react";
import { creatGame } from "../redux/slices/Admin/adminActions";

const Dashboard = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await dispatch(getTeamsByID({ id: 1 }));
        console.log('Data:', response.payload); // Access the data from the response
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  },[dispatch])

  const handleApproveTeam = async (game) => {
    try {
      const response = await dispatch(creatGame(game))
      console.log("Create team: ", response.payload)
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className='font-bold text-3xl '>
      Dashboard

      <div className="mx-6 my-4">
        {/* <Button onClick={() => handleApproveTeam(teamId, true)}>approve team</Button> */}
        <Button onClick={() => handleApproveTeam({name: "tennis"})}>create game</Button>
      </div>
    </div>
  )
}

export default Dashboard