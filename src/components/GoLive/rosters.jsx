import { useState, useEffect } from "react";
import { AiFillEdit, AiOutlineConsoleSql } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineEditOff } from "react-icons/md";
import { useDispatch } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";

import { getTournamentFixtures, getMatchScore } from "../../redux/slices/Tournament/tournamentAction";

const Rosters = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [inputFieldStates, setInputFieldStates] = useState([]);
  const [tourFixtures, setTourFixtures] = useState([]);
  const [matchScore, setMatchScore] = useState({});
  // const tourID = localStorage.getItem("createTournamentID");
  // const matchesByRound = {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getTournamentFixtures({ id: 21 }));
        console.log("Create fixtures: ", response.payload);
        setTourFixtures(response.payload);
        
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log("all tour fixtures", tourFixtures)

  const [edit, setEdit] = useState(true);


  // Function to handle update button click for a specific input
  // Function to handle update button click
  const handleUpdateClick = (index) => {
    // Logic to handle update button click for the specific row
    const updatedRow = tourFixtures[index];
    console.log(`Update clicked for row ${index}`);
    console.log(updatedRow);

    navigate("/organizer/match");

    

  };

  // Function to handle changes in input fields
  const handleInputChange = (index, fieldIndex, event) => {
    const values = [...tourFixtures];
    values[index][fieldIndex] = event.target.value;
    setTourFixtures(values);
    console.log(values[index]);
  };


  const getScore = async(id, match_id)=>{
    const df =  await dispatch(getMatchScore({id: 21, match_id: 8})) 
    return df
  }
  // Function to render input fields and buttons dynamically
  const renderInputFieldsAndButtons = () => {
    return tourFixtures.map((data, index) => (
      <div
        key={index}
        className="flex flex-row justify-between w-ful px-4 py-4 rounded-xl items-center border-b"
      >
        {
          // setMatchScore(await dispatch(getMatchScore({id: 21, match_id: data.id})))
          console.log(getScore(21, 8))
        }
        {/* {console.log(matchScore)} */}
        <div className="text-lg">Manchester City</div>

        <div
          className={`bg-gray-50 rounded-3xl shadow-sm flex items-center ${
            !edit && "border-2"
          }`}
        >
          <input
            value={data.team_id1}
            onChange={(event) => handleInputChange(index, 0, event)}
            className="w-[55px] rounded-l-3xl py-2 text-right pr-2 outline-none"
            disabled={edit}
          />
          <h1 className="h-full bg-gray-50">:</h1>
          <input
            value={data.team_id2}
            onChange={(event) => handleInputChange(index, 1, event)}
            className="w-16 rounded-r-3xl py-2 text-left pl-2 outline-none"
            disabled={edit}
          />
        </div>

        <div className="text-lg">Manchester United</div>

        <div className="flex flex-row space-x-4 items-center">
          <button
            onClick={() => setEdit(!edit)}
            className="border border-orange-500 text-orange-500 py-4 px-4 font-bold rounded-xl shadow-sm  transition-all"
          >
            {edit ? <MdOutlineEditOff /> : <AiFillEdit />}
          </button>
          <button
            onClick={() => handleUpdateClick(index)}
            className="border border-blue-gray-900 text-blue-gray-900 py-4 px-4 font-bold rounded-xl shadow-sm"
          >
            <GrDocumentUpdate />
          </button>
        </div>
      </div>
    ));
  };


  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="p-2 ">
      <div className="space-y-4">
        <div>
          <p className="py-4  text-3xl w-full">Current Matches</p>

          <div className="flex flex-row justify-between">
            {/* <div className='flex flex-row space-x-4 flex-start'>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>All</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 1</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 2</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 3</button>
        
        </div> */}
            <div className="bg-gray-100 py-2 px-4 rounded-xl text-blue-gray-900">
              {date}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-3/4 py-4 px-4 rounded-xl space-y-4 border-2">
            <div className="font-poppins p-1 px-2 font-bold w-fit rounded-xl">
              Round 1
            </div>
            <div className="space-y-4">{renderInputFieldsAndButtons()}</div>
          </div>

          {/* <div className="w-3/4 py-4 px-4 rounded-xl space-y-4 border-2">
            <div className="font-poppins p-1 px-2 font-bold w-fit rounded-xl">
              Round 2
            </div>
            <div className="space-y-4">{renderInputFieldsAndButtons()}</div>
          </div>

          <div className="w-3/4 py-4 px-4 rounded-xl space-y-4 border-2">
            <div className="font-poppins p-1 px-2 font-bold w-fit rounded-xl">
              Round 3
            </div>
            <div className="space-y-4">{renderInputFieldsAndButtons()}</div>
          </div> */}


        </div>
      </div>
    </div>
  );
};

export default Rosters;
