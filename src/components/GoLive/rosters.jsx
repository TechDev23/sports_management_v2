/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTournamentFixtures,
  getMatchScore,
  postMatchScore,
  postMatchResult,
  createTournamentFixtures,
} from "../../redux/slices/Tournament/tournamentAction";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spinner,
} from "@material-tailwind/react";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

function ScoreDialog({
  open,
  handleClose,
  handleScoreChange,
  team1Score,
  team2Score,
  handlePostMatchScore,
  postScoreState,
}) {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Input
            color="orange"
            label="team1_score"
            size="lg"
            value={team1Score}
            onChange={(e) => handleScoreChange("team1", e.target.value)}
          />
          <Input
            color="orange"
            label="team2_score"
            size="lg"
            value={team2Score}
            onChange={(e) => handleScoreChange("team2", e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="orange"
            onClick={handlePostMatchScore}
            fullWidth
          >
            {postScoreState.isLoading ? (
              <Spinner color="amber" />
            ) : (
              "Update Score"
            )}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
function WinnerDialog({
  open,
  handleClose,
  winnerId,
  setWinnerId,
  handlePostWinner,
  postResultState,
}) {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Input
            color="orange"
            label="winner_id"
            size="lg"
            value={winnerId}
            onChange={(e) => setWinnerId(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="orange"
            onClick={handlePostWinner}
            fullWidth
          >
            {postResultState.isLoading ? (
              <Spinner color="amber" />
            ) : (
              "Set Winner"
            )}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}

function Match({ match, postScoreState, postResultState }) {
  // console.log("match from match", match.id)
  const dispatch = useDispatch();
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState("");
  const [winnerId, setWinnerId] = useState("");
  const [scoreDialogOpen, setScoreDialogOpen] = useState(false);
  const [winnerDialogOpen, setWinnerDialogOpen] = useState(false);

  const tourID = localStorage.getItem("createdTournamentID");

  const handleOpenScoreDialog = () => {
    setScoreDialogOpen(true);
  };

  const handleCloseScoreDialog = () => {
    setScoreDialogOpen(false);
  };

  const handleOpenWinnerDialog = () => {
    setWinnerDialogOpen(true);
  };

  const handleCloseWinnerDialog = () => {
    setWinnerDialogOpen(false);
  };

  const handleScoreChange = (team, score) => {
    if (team === "team1") {
      setTeam1Score(score);
    } else if (team === "team2") {
      setTeam2Score(score);
    }
  };

  // handle submit score
  const handlePostMatchScore = async () => {
    console.log("Team1 score: ", team1Score);
    console.log("Team2 score: ", team2Score);
    console.log("data: ", match.id);
    const data = {
      id: tourID,
      match_id: match.id,
      team1_score: team1Score,
      team2_score: team2Score,
    };
    // call post match score here
    // tourID match_id
    try {
      await dispatch(postMatchScore(data));
      console.log("post score state", postScoreState);
      if (postScoreState.isSuccess) {
        handleCloseScoreDialog();
      }
    } catch (error) {
      console.log("Error while posting score");
    }
  };
  // handle post winner
  const handlePostWinner = async ({ match_id }) => {
    console.log("Winner id", winnerId);
    console.log("match_id", match_id);
    const data = {
      id: tourID,
      match_id : match.id,
      winner_id: parseInt(winnerId),
    };
    try {
      await dispatch(postMatchResult(data));
      if (postResultState.isSuccess) {
        handleCloseWinnerDialog();
      }
    } catch (error) {
      console.log("Error while posting match winner");
    }
  };

  return (
    <>
      <div
        key={match.id}
        className="flex flex-row rounded-lg items-center justify-evenly gap-2"
      >
        <div>
          <Input label="team_id1" value={match.team_id1} color="orange" />
        </div>
        <div>
          <p className="p-2 bg-orange-600 text-white rounded-md"> vs </p>
        </div>
        <div>
          <Input label="team_id2" value={match.team_id2} color="orange" />
        </div>
        <div>
          <Button variant="text" color="amber" onClick={handleOpenScoreDialog}>
            Score
          </Button>
          <Button variant="text" color="green" onClick={handleOpenWinnerDialog}>
            winner
          </Button>
        </div>
      </div>

      <ScoreDialog
        open={scoreDialogOpen}
        handleClose={handleCloseScoreDialog}
        handleScoreChange={handleScoreChange}
        team1Score={team1Score}
        team2Score={team2Score}
        handlePostMatchScore={handlePostMatchScore}
        postScoreState={postScoreState}
      />

      <WinnerDialog
        open={winnerDialogOpen}
        handleClose={handleCloseWinnerDialog}
        winnerId={winnerId}
        setWinnerId={setWinnerId}
        handlePostWinner={handlePostWinner}
        postResultState={postResultState}
      />
    </>
  );
}

export default function Rosters() {
  const {
    postMatchResult: postResultState,
    createTournamentFixtures: createFixtureState,
    getTournamentFixtures: getTourFixState,
    postMatchScore: postScoreState,
  } = useSelector((state) => state.tournament);

  const dispatch = useDispatch();
  const [tourFixtures, setTourFixtures] = useState([]);
  const tourID = localStorage.getItem("createdTournamentID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getTournamentFixtures({ id: tourID }));
        console.log("Create fixtures: ", response.payload);
        setTourFixtures(response.payload);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const mappedMatches = tourFixtures.reduce((matchesByRound, fixture) => {
    const { round_number } = fixture;
    if (!matchesByRound[round_number]) {
      matchesByRound[round_number] = [];
    }
    matchesByRound[round_number].push(fixture);
    return matchesByRound;
  }, []);

  const handleCreateFixtures = async () => {
    await dispatch(createTournamentFixtures({ id: tourID }));
    console.log("create fixture staet", createFixtureState);
    const response = await dispatch(getTournamentFixtures({ id: tourID }));
    console.log("Create fixtures: ", response.payload);
    setTourFixtures(response.payload);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button
          onClick={handleCreateFixtures}
          variant="outlined"
          color="orange"
          className={`flex items-center gap-3`}
        >
          Create fixtures
          <ArrowPathIcon
            strokeWidth={2}
            className={`h-5 w-5 ${
              createFixtureState.isLoading ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>
      {mappedMatches.map((roundMatches, index) => (
        <div
          key={index}
          className="min-w-screen py-5 rounded border border-gray-600"
        >
          <p className="ml-2 text-gray-500">Roster Round {index}</p>
          <div className="flex flex-col p-2 space-y-3">
            {roundMatches.map((match) => (
              <Match
                key={match.id}
                match={match}
                postScoreState={postScoreState}
                postResultState={postResultState}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}



