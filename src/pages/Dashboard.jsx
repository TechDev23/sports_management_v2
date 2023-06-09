import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { approveTeam, getTeamsByID } from "../redux/slices/Teams/teamActions";
import { creatGame } from "../redux/slices/Admin/adminActions";
import { fetchAllPlayers } from "../redux/slices/Participants/participantsActions";

import badminton from "../assets/images/badminton.jpg";

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { fetchOrganizationByID } from "../redux/slices/Organizer/organizerActions";
import {
  fetchTournaments,
  getTournamentByID,
  getTournamentEntries,
  getTournamentFixtures,
} from "../redux/slices/Tournament/tournamentAction";

const Dashboard = () => {
  const navigate = useNavigate();

  const [allTours, setAllTours] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchTournaments({isActive: true}));
        console.log("Data:", response.payload); // Access the data from the response
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleOnClick = async (data) => {
    try {
      const response = await dispatch(getTournamentFixtures(data));
      console.log("Create fixtures: ", response.payload);
      const matchesByRound = {};

      // Iterate over the matches and group them by round_number
      response.payload.forEach((match) => {
        const { round_number } = match;

        // If the round_number key doesn't exist in the matchesByRound object,
        // create an empty array for that round_number
        if (!matchesByRound.hasOwnProperty(round_number)) {
          matchesByRound[round_number] = [];
        }

        // Push the match object to the respective round_number array
        matchesByRound[round_number].push(match);
      });

      // At this point, matchesByRound will contain separate arrays for each round_number
      console.log("matchbyround", matchesByRound);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="font-bold text-3xl  p-4">
      {/* <Button onClick={() => handleOnClick({ id: 21 })}>Test</Button> */}

      <div className="border-b-2 w-full">
        <p className="bg-gray-100 p-2 px-4 w-fit rounded-xl mt-2 mb-2 text-blue-gray-900">
          Tournaments
        </p>
      </div>

      <Card className="mt-10 w-80 shadow-lg">
        {/* <CardHeader color="blue-gray" className="relative h-46">
          <img src={badminton} alt="img-blur-shadow" layout="fill" />
        </CardHeader> */}
        <CardBody>
          <div className="flex flex-row justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Badminton
            </Typography>
            <Typography
              variant="h6"
              color="green"
              className="mb-2 bg-green-50 py-1 px-3  rounded-xl w-fit"
            >
              Active
            </Typography>
          </div>
          <Typography>
            event started at <span>{}</span>
          </Typography>

          <Typography>the great game to play</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-center items-center">
            <Button
              onClick={() => navigate("/organizer/tournament")}
              className="bg-orange-500 hover:bg-orange-700 hover:drop-shadow- hover:drop-shadow-none font-bold text-white items-center"
            >
              View Matches
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
