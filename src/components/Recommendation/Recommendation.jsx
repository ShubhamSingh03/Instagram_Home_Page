import List from "./List";
import ProfileBar from "./ProfileBar";
import UserRecommendation from "./UserRecommendation";

const Recommendation = () => {
  return (
    <>
    <section className="mt-8 ml-4 hidden laptop:block">
        <div>
            {/* Profile Card  */}
            <ProfileBar/>

            <div className="flex justify-between mt-2">
                <p className="font-semibold text-gray-400">Suggestions For You</p>
                <a href="#" className="text-xs font-semibold">See All</a>
            </div>

            {/* Profiles in Recommendation */}
            <div className="mt-4">
                <UserRecommendation profileimg={"https://rb.gy/aqfe2l"} 
                    username={"hiteshchoudharyofficial"} 
                    followers={"shubham_bhoj_ + 22"} 
                    instaLink={"https://rb.gy/ezek1s"}
                />

                <UserRecommendation profileimg={"https://rb.gy/raanaw"} 
                    username={"mahi7781"} 
                    followers={"virat.kohli + 91"} 
                    instaLink={"https://rb.gy/jccxsj"}
                />

                <UserRecommendation profileimg={"https://rb.gy/u8dlwg"}
                    username={"realkrsna"}
                    followers={"seedhemaut + 4"}
                    instaLink={"https://rb.gy/csodrd"}
                />

                <UserRecommendation profileimg={"https://rb.gy/bk72wv"}
                    username={"therealprithvi"}
                    followers={"tovinothomas + 11"}
                    instaLink={"https://rb.gy/x2trxp"}
                />

                <UserRecommendation profileimg={"https://rb.gy/ivqvnu"}
                    username={"soulesportsofficial"}
                    followers={"tsm_ind + 51"}
                    instaLink={"https://rb.gy/v72sbk"}
                />
            </div>

            {/* List of Links */}
            <List/>
        </div>
    </section>
    </>
  )
}

export default Recommendation