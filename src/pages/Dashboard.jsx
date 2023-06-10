
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { approveTeam, getTeamsByID } from "../redux/slices/Teams/teamActions";
import { Button } from "@material-tailwind/react";

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

  const handleApproveTeam = (id, isApprove) => {
    const dt = dispatch(approveTeam({id: 1, isApprove: false}));
    console.log("approve", dt)
  };

  return (
    <div className='font-bold text-3xl '>
      Dashboard

      <div className="mx-6 my-4">
        {/* <Button onClick={() => handleApproveTeam(teamId, true)}>approve team</Button> */}
        <Button onClick={() => handleApproveTeam(1, false)}>approve team</Button>
      </div>
    </div>
  )
}

export default Dashboard