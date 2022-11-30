import UserModal from "./UserModal";
const UpperSection = ({ details }) => {
  return (
    <>
      <div className="flex items-center justify-between p-3 pb-1">
        <div className="flex items-center space-x-3">
          <img
            src={details.picture?.large}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
          />
          <div className="flex flex-col justify-around gap-[.13rem]">
            <h2 className="text-sm font-semibold leading-3">
              {details.login?.username}
            </h2>
            <span className="inline text-[0.6rem] leading-3 text-gray-400">
              {details.location?.city}, {details.location?.state}
            </span>
          </div>
        </div>

        {/* Modal on horizontal bars */}
        <UserModal />
      </div>
    </>
  );
};

export default UpperSection;
