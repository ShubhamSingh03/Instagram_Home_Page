// Profiles in Recommendation

const UserRecommendation = ({instaLink,profileimg, username, followers}) => {
  return (
    <>
    <div className="flex mb-4">
      <div>
        <img src={profileimg} alt="" className="rounded-full w-8 h-8 cursor-pointer" />
      </div>
      <div className="pl-2 flex flex-col justify-center">
        <a href={instaLink}>
          <p className="font-bold text-xs cursor-pointer">{username}</p>
        </a>      
        <h3 className="font-normal tracking-tighter text-gray-400 text-xs">Followed by {followers} more</h3>
      </div>
      <div className="absolute right-1/4">
        <a href={instaLink} className="text-linkColor font-semibold text-xs  pl-16">Follow</a>
      </div>
    </div>
    </>
  )
}

export default UserRecommendation