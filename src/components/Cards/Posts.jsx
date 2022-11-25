import Axios from "axios"
import { useEffect, useState } from "react"
import { HiOutlineDotsHorizontal} from "react-icons/hi";
import LowerSection from "./LowerSection/LowerSection";
import { VscSmiley } from "react-icons/vsc";
import randomInteger from 'random-int';

const Posts = ({quotesDetails}) => {
		const url = "https://randomuser.me/api/"
		const[details, setDetails] = useState({})
	
		const fetchDetails = async () =>{
			const {data} = await Axios.get(url)
			const details = data.results[0];
			console.log(details);
			setDetails(details);
		}
		useEffect(()=>{
			fetchDetails()
		}, [])
  return (
    <>
    <div className="rounded-md shadow-md bg-white text-black border border-gray-300 border-b-0 laptop:w-3/4 mb-6">
	<div className="flex items-center justify-between p-3 pb-1">
		<div className="flex items-center space-x-3">
			<img src={details.picture?.large} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
			<div className="flex flex-col justify-around gap-[.13rem]">
				<h2 className="text-sm font-semibold leading-3">{details.login?.username}</h2>
				<span className="inline text-[0.6rem] leading-3 text-gray-400">{details.location?.city}, {details.location?.state}</span>
			</div>
		</div>
		<button title="Open options" type="button">
            <HiOutlineDotsHorizontal size={"20px"}/>
		</button>
	</div>
	<div>
	<FeedImage/>
	</div>
	<div className="p-3">
		<LowerSection details={details} />
	</div>
    <div className="border-t border-gray-200">
        <div className="flex justify-between items-center px-4 py-2">
        <VscSmiley size={"30px"} className="cursor-pointer"/>
        <input type="text" placeholder="Add a comment..." className="w-full bg-transparent border-none rounded text-sm p-2 text-black outline-none" />
        <button className="text-linkUnActiveColor font-semibold text-sm  pl-16 focus:text-linkColor">Post</button>
        </div>
    </div>
</div>
    </>
  )
}

const FeedImage = () =>{
	return(
		<>
		</>
	)
}

export default Posts

