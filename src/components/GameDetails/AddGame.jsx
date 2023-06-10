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
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Select from 'react-select'
import { createGame } from "../../redux/slices/Admin/AdminSlice";
const minDistance = 1;

const AddGame = () => {
  const dispatch = useDispatch();
  const { fetchGames: allGames } = useSelector((state) => state.admin);
  console.log("fetchGames", allGames) 

  const [value2, setValue2] = useState([0, 5]);

  const [compName, setCompName] = useState("");
  const [sport, setSport] = useState("");
  const [sportId, setSportId] = useState("");
  const [gender, setGender] = useState("");
  const [fees, setFees] = useState("");
  const [rounds, setRounds] = useState(1);
  const [qualifyCriteria, setQualifyCriteria] = useState("");
  const [info, setInfo] = useState("");
  const [age, setAge] = useState(0);

  

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  const handleAgeIncrement = () => {
    setAge(age + 1);
  };

  const handleAgeDecrement = () => {
    if (age === 1) {
      setAge(age);
    } else {
      setAge(age - 1);
    }
  };

  const handleRoundIncrement = () => {
    setRounds(rounds + 1);
  };

  const handleRoundDecrement = () => {
    if (rounds === 1) {
      setRounds(1);
    } else {
      setRounds(rounds - 1);
    }
  };

  const handleCompNameChange = (e) => {
    setCompName(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.label);
    setSportId(e.value);
    console.log("sport", sport, sportId)
  };

  const handleGenderChange = (e) => {
    console.log(gender);
    setGender(e);
  };

  const options = allGames.value.map((item) => ({
    label: item.name,
    value: item.id.toString(),
  }));


  const handleAddGame = ()=>{
    const toSubmit = {
      name: compName,
      description: info, 
      max_teams: 2,
      team_size: 4,
      total_matches: 1,
      isActive: true,
      organizer_id: 1,
      game_id: 1,
      start_date: "2023-05-29T07:12:56.222Z",
      end_date: "2023-05-29T07:12:56.222Z"
    }
    const af = dispatch(createGame(toSubmit))
    console.log("after submit", af)
  }

  return (
    <div>
      <div className="min-w-screen space-y-4 py-5">
        <div className="w-2/3 gap-x-2">
          <Input
            value={compName}
            onChange={handleCompNameChange}
            label="Enter the name of competition"
            className="min-w-1/3"
            color="orange"
          />
        </div>
        <div className="w-4/5 text-sm">
          <Select onChange={handleSportChange} options={options}/>
        </div>
        <div className=" min-w-screen flex flex-row items-start content-center  justify-start">
          <ButtonGroup
            value={gender}
            onChange={handleGenderChange}
            className="flex row divide-orange-600  bg-orange-400 p-1 rounded-md space-x-2"
          >
            q
            <Button
              value={"male"}
              onClick={() => handleGenderChange("male")}
              className="hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400"
            >
              Male
            </Button>
            <Button
              value={"female"}
              onClick={() => handleGenderChange("female")}
              className="hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400"
            >
              Female
            </Button>
            <Button
              value={"mix"}
              onClick={() => handleGenderChange("mix")}
              className="hover:shadow-none rounded-md bg-orange-400 text-white hover:bg-white hover:text-orange-400 focus:bg-white selection:bg-white focus:text-orange-400"
            >
              Mix up
            </Button>
          </ButtonGroup>
        </div>
        <div className="w-4/5 flex flex-row items-center justify-center space-x-5">
          <div className="w-1/2">
            <Input
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              label="Participation Fees"
              color="orange"
            />
          </div>

          <div className="px-2 text-sm w-1/2 flex flex-row flex-grow text-gray-500 space-x-2 items-center justify-around rounded-md">
            <p className="w-full border px-2 py-2 rounded-md">
              Age restriction
            </p>
            <div className=" flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
              <button
                onClick={handleAgeDecrement}
                className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                -
              </button>
              <input
                type="number"
                value={age}
                min="1"
                onChange={(e) => setAge(e.target.value)}
                className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
              />
              <button
                onClick={handleAgeIncrement}
                className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-row space-x-5">
          <div className="w-1/2">
            <Input label="Enter the prize pool for the game" color="orange" />
          </div>
        </div>
        <div className="text-sm w-1/2 flex flex-row text-gray-500 space-x-2 items-center ">
          <p className="w-3/5 px-2 py-2 border rounded-md">
            Number of participants in a team
          </p>
          <Box sx={{ width: "50%" }}>
            <Slider
              getAriaLabel={() => "Minimum distance shift"}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              color="primary"
              // sx={{style: {color:"#ffc20c", bgcolor:"#ffc20c"}}}
              disableSwap
            />
          </Box>
        </div>
        <div className="text-sm w-2/4 flex flex-row text-gray-500 space-x-2 items-center">
          <p className="w-3/5 px-2 py-2 border rounded-md">
            Total number of rounds
          </p>
          <div className="flex items-center border border-gray-300 rounded-md p-1 hover:border-orange-400 focus-within:border-orange-400">
            <button
              onClick={handleRoundDecrement}
              className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <input
              type="number"
              value={rounds}
              onChange={(e) => setRounds(e.target.value)}
              className="w-6 text-gray-900 flex-row mx-2 bg-transparent text-center focus:outline-none"
            />
            <button
              onClick={handleRoundIncrement}
              className="p-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
        <div className="w-3/5">

          {/* <Select
            label="Qualification method for each round"
            color="orange"
            value={qualifyCriteria}
            onChange={(e) => setQualifyCriteria(e.target.value)}
          >
            <Option>Qualify the previous round</Option>
            <Option>Win 2 matches</Option>
            <Option>Be in the top 4</Option>
          </Select> */}

        </div>
        <div className="w-full flex flex-row">
          <Textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className=""
            color="orange"
            placeholder="Any additional information to be shared like Rules, Rounds, etc"
          />
        </div>
        

        <div className='flex flex-row justify-end space-x-4'>
          
        <Button onClick={handleAddGame} color="orange">Add game</Button>
      </div>    
      </div>
    </div>
  );
};

export default AddGame;
