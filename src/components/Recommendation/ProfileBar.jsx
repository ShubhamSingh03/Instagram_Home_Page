import profileimg from "../../assets/profile_img.jpg";

// Profile Card 
const ProfileBar = () => {
  return (
    <>
    <div className="flex">
        <div>
            <img src={profileimg} alt="" className="rounded-full w-14 h-14 cursor-pointer" />
        </div>
        <div className="pl-4 flex flex-col justify-center">
            <a href="https://rb.gy/h92miy">
                <p className="font-bold text-sm cursor-pointer">bgmi_lit_clips</p>
            </a> 
            <h3 className="uppercase font-normal tracking-tighter text-gray-400">Battlegrounds Mobile I...</h3>
        </div>
        <a href="#" className="text-linkColor font-semibold text-xs flex items-center pl-8">Switch</a>
    </div>
    </>
  )
}

export default ProfileBar