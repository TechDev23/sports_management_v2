
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
const Participants = () => {
  
  return (
    <div className="flex flex-row w-full space-x-5">
      <div className="flex-col w-full p-2">
        <h2 className='font-bold text-3xl'>Active Tournament</h2>
        
        <div className=' bg-gray-100 shadow-lg rounded-md  my-5 py-5'>

      <div className="flex flex-row justify-between items-center  px-10">

        <div className="flex flex-col gap-2 items-start">
          <p className="text-[15px] font-semibold ">Team Name</p>

          <div className="flex flex-row items-start gap-20">
            <div className="flex flex-col gap-2">
              <span className=" text-[14px] text-gray-700 font-medium">TOURNAMENT</span>
              <span className="rounded-full -mt-1 bg-gray-200 border-gray-400 border-[1px] px-6 py-1 text-[12px]">Badminton</span>
            </div>

            <span className="text-[13px] text-green-400">10 Members</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Accept
          </button>
          <button
            type="button"
            className="border border-yellow-300 bg-yellow-800 text-white rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
          >
            Reject
          </button>
        </div>

      </div>



    </div>
    </div>
    

{/**side component completion checking */}

    </div>
)
}
export default Participants;
