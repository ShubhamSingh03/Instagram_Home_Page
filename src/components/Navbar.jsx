import logo from "../assets/logo.png";
import profileimg from "../assets/profile_img.jpg"

export const Navbar = () => {
  return (
    <>
    <section className="flex justify-around max-w-full bg-white py-3 tablet:px-40 border-b-2 border-gray-200">
    <div className="flex items-end">
        <img src={logo} alt="logo" className="w-40 -ml-12 tablet:ml-0 tablet:w-24 " />
    </div>
    <div className="flex">
    <fieldset className="mr-20 hidden tablet:flex">
        <label htmlFor="Search" className="hidden">Search</label>
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                </button>
            </span>
            <input type="search" name="Search" placeholder="Search" className="w-32 py-2 pl-10 text-sm rounded-md largeMobileScreens:w-64 focus:outline-none dark:bg-gray-800 bg-[#EFEFEF] dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
        </div>
    </fieldset>
    <div className="flex items-center cursor-pointer">
        <div className="ml-0 hidden tablet:flex">
            <svg aria-label="Home" className="icons" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
        </div>
        <div className="ml-5 absolute right-0 largeMobileScreens:static">
            <svg aria-label="Direct" className="icons" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
        </div>
        <div className="ml-5 hidden tablet:flex">
            <svg aria-label="New post" className="icons" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
        </div>
        <div className="ml-5 hidden tablet:flex">
            <svg aria-label="Find People" className="icons" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
        </div>
        <div className="ml-5 hidden tablet:flex">
            <svg aria-label="Activity Feed" className="icons" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
        </div>
        <div className='hidden tablet:flex'>
            <div className="dropdown dropdown-end">
                <button>
                    <img src={profileimg} alt="" className="rounded-full w-[24px] ml-6"/>
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
                    <li><a>Profile</a></li>
                    <li><a>Saved</a></li>
                    <li><a>Settings</a></li>
                    <hr/>
                    <li >Log Out</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}