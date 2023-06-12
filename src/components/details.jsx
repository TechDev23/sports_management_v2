// import { Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTournamentByID } from "../redux/slices/Tournament/tournamentAction";



export default function Details() {
  const [tourDetails, setTourDetails] = useState({})
  const dispatch = useDispatch();
  const tourID = localStorage.getItem("createdTournamentID")
  useEffect(()=>{
    const fetchData = async () => {
        const response = await dispatch(getTournamentByID({ id: tourID }));
        // console.log('Data:', response.payload); // Access the data from the response
        setTourDetails(response.payload);
    };
    fetchData();
  },[dispatch])

  console.log(tourDetails)

  return (
    <div className="min-h-screen min-w-screen">
     <div>
      <p className="text-gray-900 font-bold text-xl"> </p>
     </div>

     <div>

     </div>
    </div>
  );
}
