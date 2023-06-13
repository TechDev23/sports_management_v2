import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Spinner,
  } from "@material-tailwind/react";
  import {
    ArrowLongRightIcon,
  } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinTournament } from "../../redux/slices/Participants/participantsActions";
import { useNavigate, useParams } from "react-router-dom";
  export default function Apply() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id: tourId } = useParams()
    const [teamName, setTeamName] = useState("")
    const participantData = localStorage.getItem("participant");
    const { id: pid } = participantData ? JSON.parse(participantData) : {};

    const joinTournamentState = useSelector(state => state.participants.joinTournament);
    // console.log("particiapnt", pid)
    // console.log("touranment id", parseInt(tourId))
    // console.log("Team name", teamName)
    console.log("Join Tournament", joinTournamentState)
    
    const handleJoinTournament = async()=>{
        
        try {
          const response = await dispatch(joinTournament({tournament_id: parseInt(tourId), student_id:pid, team_name: teamName }))
          console.log("Join team: ", response.payload)
        } catch (error) {
          console.log('Error:', error);
        }
    }

    return (
      <div className="flex justify-center items-center h-full">
      {
        joinTournamentState.isSuccess ? 
        <>
          <div className="flex items-center justify-center flex-col w-full">
            <p>Successfully joined</p>
            <Button variant="outlined" color="orange"  onClick={()=>navigate(`/participant/discover`)}
            className="flex items-center justify-center gap-2 group border-none"
            > See More such tournaments <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5 inline group-hover:translate-x-2 transition-all" /> </Button>
          </div>
        </>
        :
        <>
       
      <Card color="transparent" shadow={true} className="p-4">
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input value={teamName} onChange={(e)=>setTeamName(e.target.value)} color="orange"  size="lg" label="Team Name" />
          </div>
          <Checkbox
            color="orange"
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    className="font-medium transition-colors hover:text-orange-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={handleJoinTournament} className="flex items-center justify-center mt-6" color="orange" fullWidth>
            {joinTournamentState.isLoading ? <Spinner color="amber"/> : "Register"}
          </Button>
        </form>
      </Card>

        </>
      }
      </div>
        
    );
  }