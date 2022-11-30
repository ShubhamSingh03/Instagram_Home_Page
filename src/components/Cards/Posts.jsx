import Axios from "axios";
import { useEffect, useState } from "react";
import LowerSection from "./LowerSection/LowerSection";
import { VscSmiley } from "react-icons/vsc";
// import randomInteger from 'random-int';
import FeedImage from "./FeedImage/FeedImage";
import UpperSection from "./UpperSection/UpperSection";

// Posts component on the feed
const Posts = ({ quotesDetails }) => {
  const url = "https://randomuser.me/api/"; //random user API
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get(url);
    const details = data.results[0];
    // console.log(details);
    setDetails(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <div className="rounded-md shadow-md bg-white text-black border border-gray-300 border-b-0 laptop:w-3/4 mb-6">
        {/* Upper Section Of Post */}
        <UpperSection details={details} />

        {/* Image Section of Post */}
        <div>
          <FeedImage />
        </div>

        {/* Lower Section Of Post (Just Below of Image) */}
        <div className="p-3">
          <LowerSection details={details} />
        </div>

        {/* Add a Comment Section (bottom of Post)  */}
        <div className="border-t border-gray-200">
          <div className="flex justify-between items-center px-4 py-2">
            <VscSmiley size={"30px"} className="cursor-pointer" />
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-transparent border-none rounded text-sm p-2 text-black outline-none"
            />
            <button className="text-linkUnActiveColor font-semibold text-sm  pl-16 focus:text-linkColor">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
