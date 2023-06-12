/* eslint-disable no-unused-vars */
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  Input,
  Option,
  ButtonGroup,
  Button,
  Textarea,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { createTournament } from "../../redux/slices/Tournament/tournamentAction";

const minDistance = 1;

const AddGame = () => {
  const dispatch = useDispatch();
  const { fetchGames: allGames } = useSelector((state) => state.admin);
  const { createTournament: createTrmnt } = useSelector(
    (state) => state.tournament
  );
  console.log("creat tour", createTrmnt);
  const orgID = localStorage.getItem("orgID");
  console.log("orgid", orgID);

  const [value2, setValue2] = useState([0, 5]);

  const [compName, setCompName] = useState("");
  const [sport, setSport] = useState("");
  const [sportId, setSportId] = useState("");
  const [teamSize, setTeamSize] = useState(null);
  const [totalMatches, setTotalMatches] = useState(null);
  const [maxTeams, setMaxTeams] = useState(null);
  const [info, setInfo] = useState("");

  const [startDate, setStartDate] = useState(""); // state for start date
  const [endDate, setEndDate] = useState(""); // state for end date
  const [startTime, setStartTime] = useState(""); // state for start date
  const [endTime, setEndTime] = useState(""); // state for end date

  console.log("start time", startTime);
  console.log("start date", startDate);
  console.log("end date", endDate);
  console.log("end time", endTime);
  const handleCompNameChange = (e) => {
    setCompName(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.label);
    setSportId(e.value);
    console.log("sport", sport, sportId);
  };

  const options =
    allGames.value?.map((item) => ({
      label: item.name,
      value: item.id.toString(),
    })) || [];

  const handleAddGame = async () => {
    const combinedStartDateTime = startDate + "T" + startTime + ":00.000Z";
    console.log(combinedStartDateTime);
    const combinedEndDateTime = endDate + "T" + endTime + ":00.000Z";
    console.log(combinedEndDateTime);
    const toSubmit = {
      name: compName,
      description: info,
      max_teams: maxTeams,
      team_size: teamSize,
      total_matches: totalMatches,
      isActive: true,
      organizer_id: orgID,
      game_id: sportId,
      start_date: combinedStartDateTime,
      end_date: combinedEndDateTime,
    };
    try {
      await dispatch(createTournament(toSubmit));
      createTrmnt.isSuccess;
    } catch (error) {
      console.log("Error while creating tournament frontend", error);
    }
  };

  return (
    <div className="min-w-screen space-y-4 py-5">
      {createTrmnt.isSuccess ? (
        <>
          <div className="flex items-center justify-center mx-auto text-xl font-bold font-poppins">
            Details Saved
          </div>
        </>
      ) : (
        <>
          <div className="w-2/3 gap-x-2">
            <Input
              value={compName}
              onChange={handleCompNameChange}
              label="Enter the name of Tournament"
              className="min-w-1/3"
              color="orange"
            />
          </div>
          <div className="w-4/5 text-sm">
            <Select
              placeholder="Select game"
              onChange={handleSportChange}
              options={options}
            />
          </div>
          <div className="w-3/5 flex flex-row space-x-5">
            <Input
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              label="Team Size"
              color="orange"
            />
            <Input
              value={maxTeams}
              onChange={(e) => setMaxTeams(e.target.value)}
              label="Maximum Team"
              color="orange"
            />
            <Input
              value={totalMatches}
              onChange={(e) => setTotalMatches(e.target.value)}
              label="Total Matches to be played"
              color="orange"
            />
          </div>
          <div className="w-2/3 flex flex-row">
            <Textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              className=""
              label="Tournament Description"
              color="orange"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start my-3 gap-4">
              <div className="w-76 flex flex-col">
                <Typography variant="h4" className="text-base font-normal">
                  Start Date:
                </Typography>
                <Input
                  type="date"
                  value={startDate}
                  className="w-2/5"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="w-76 flex flex-col">
                <Typography variant="h4" className="text-base font-normal">
                  Start Time:
                </Typography>
                <Input
                  type="time"
                  value={startTime}
                  className="w-2/5"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-start my-3 gap-4">
              <div className="w-76 flex flex-col">
                <Typography variant="h4" className="text-base font-normal">
                  End Date:
                </Typography>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="w-76 flex flex-col">
                <Typography variant="h4" className="text-base font-normal">
                  End Time:
                </Typography>
                <Input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start space-x-4">
            <Button onClick={handleAddGame} color="orange">
              {createTrmnt.isLoading ? (
                <Spinner color="amber" />
              ) : (
                "Create tournament"
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddGame;
