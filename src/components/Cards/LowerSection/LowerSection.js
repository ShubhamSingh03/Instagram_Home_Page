import { useEffect, useState } from "react";
import Axios from "axios"
import { IoMdHeartEmpty} from "react-icons/io";
import { IoChatbubbleOutline, IoPaperPlaneOutline} from "react-icons/io5";
import { VscBookmark } from "react-icons/vsc";
import "./LowerSection.css";
import randomInteger from 'random-int';

//{/* Lower Section Of Post (Just Below of Image) */}
const LowerSection = ({details}) => {
  return (
    <>
        <div className="flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<button type="button" title="Like post" className="flex items-center justify-center">
                    <IoMdHeartEmpty size={"28px"} className="hoverEffect"
                        onMouseMove  ={({target})=>target.style.color="gray"}
                        onMouseOut ={({target})=>target.style.color="black"}
                    />
				</button>
				<button type="button" title="Add a comment" className="flex items-center justify-center">
					<IoChatbubbleOutline size={"25px"} style={{transform: "scaleX(-1)"}}
                        onMouseMove  ={({target})=>target.style.color="gray"}
                        onMouseOut ={({target})=>target.style.color="black"}
                    />
				</button>
				<button type="button" title="Share post" className="flex items-center justify-center">
					<IoPaperPlaneOutline size={"25px"} style={{transform: "rotate(0deg)"}}
                        onMouseMove  ={({target})=>target.style.color="gray"}
                        onMouseOut ={({target})=>target.style.color="black"}
                    />
				</button>
			</div>
			<button type="button" title="Bookmark post" className="flex items-center justify-center">
				<VscBookmark size={"25px"}
                    onMouseMove  ={({target})=>target.style.color="gray"}
                    onMouseOut ={({target})=>target.style.color="black"}
                />
			</button>
		</div>

		{/* random images for "LIKED BY:" from unsplash -static */}
        <div className="flex flex-wrap items-center pt-3 pb-1 pl-1">
			<div className="flex items-center space-x-2">
				<div className="flex -space-x-1">
					<img alt="" className="w-5 h-5 rounded-full" src="https://source.unsplash.com/40x40/?portrait?6" />
					<img alt="" className="w-5 h-5 rounded-full" src="https://source.unsplash.com/40x40/?portrait?5" />
					<img alt="" className="w-5 h-5 rounded-full" src="https://source.unsplash.com/40x40/?portrait?7" />
				</div>
				<span className="text-sm">Liked by
					<span className="font-semibold lowercase" > {details.name?.first}</span> and
					<span className="font-semibold"> {randomInteger(10, 1000)} others</span>
				</span>
			</div>
		</div>

		{/* Random no. of comments & hours */}
		<div className="space-y-1 pl-1 pt-2">
		    <p className="text-sm">
				<span className="text-sm font-semibold">{details.login?.username}</span> <QuotesApi/></p>
            <p  className="w-full bg-transparent text-sm text-gray-400 hover:text-gray-300 cursor-pointer">
                View all {randomInteger(10, 100)} comments
            </p>
            <p className="bg-transparent text-[10px] text-gray-400 pt-1">{randomInteger(10)} HOURS AGO</p>
		</div>
    </>
  )
}

// Radnom Quotes as an Status Component
const QuotesApi = () =>{
	const url = "https://api.quotable.io/random?minLength=40&maxLength=70"
		const[quotesDetails, setQuotesDetails] = useState([])
		const fetchDetails = async () =>{
			const {data} = await Axios.get(url)
			const quotesDetails = data.content;
			console.log(quotesDetails);
			setQuotesDetails(quotesDetails);
		}
		useEffect(()=>{
			fetchDetails()
		}, [])
	return(
		<span>{quotesDetails}</span>
	)
}

export default LowerSection