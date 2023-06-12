import  { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { fetchTournaments } from '../../redux/slices/Tournament/tournamentAction';


function Feed() {

    const dispatch = useDispatch();
    const [allTours, setAllTours] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
          try {
            const response = await dispatch(fetchTournaments({isActive: true}));
            console.log('All tournaments:', response.payload); // Access the data from the response
            setAllTours(response.payload)
          } catch (error) {
            console.log('Error:', error);
          }
        };

        fetchData();
      },[dispatch])
    
    
    return (
        <div>
            <section className=" bg-white body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap sm:flex-row flex-col mb-12">
                            <h1 className="sm:w-2/5 text-black font-bold title-font text-2xl  sm:mb-0">Discover Tournament</h1>
                        </div>

                        <div className='-mt-10 mb-10 flex flex-row justify-between items-center'>
                            <div className='flex flex-col text-[17px] text-gray-700'>
                                <p>5 Matching sports</p>
                                <span className='text-[12px]'>Based on filter</span>
                            </div>

                            <button>
                                <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        
                    {
                        allTours.map((data, index)=>(
                            <>
                            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://static.vecteezy.com/system/resources/previews/001/984/587/original/cricket-tournament-match-design-concept-free-vector.jpg" />
                            </div>
                            <div className='flex flex-row justify-between items-center mt-4 '>
                                <h2 className="text-xl font-medium title-font text-black">{data.name}</h2>

                                <p className='text-[12px] text-orange-700'>Starts from 29th July</p>
                            </div>

                            <p className="text-base leading-relaxed mt-2">Cricket is a popular sport played between two teams of eleven players on an oval field. Teams take turns batting and fielding, with the objective of scoring more runs than the opposition.</p>
                            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-3 py-1 border p-5 mt-3 border-orange-500 rounded-md">
                                View More
                            </button>
                        </div>
                            </>
                        ))
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feed