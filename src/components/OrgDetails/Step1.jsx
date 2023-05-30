import { Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../redux/slices/UserSlice";
const Step1 = () => {
  // const { username } = useSelector((state) => state.user.value) || "";
  const { user } = useSelector((state)=> state)
  if(user.isLoading){
    return <h1>Loading....</h1>
  }
  const dispatch = useDispatch();
  return (
    <>
      {/* <div>step1 {username}</div> */}
      {/* {
        user.value && user.value.map((user, index)=>{
          return (
            <>
              <p>{user.name}</p>
            </>
          )
        })
      }
      <Button onClick={() => dispatch(fetchStudents())}> FetchStudents </Button> */}
      step 1
    </>
  );
};

export default Step1;
