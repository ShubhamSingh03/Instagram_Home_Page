import { HiOutlineDotsHorizontal } from "react-icons/hi";
const UserModal = () => {
  return (
    <>
      <div className="modalBtn">
        <label htmlFor="my-modal-4" className="cursor-pointer">
          <HiOutlineDotsHorizontal size={"20px"} />
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle " />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative w-96 h-92  p-0" htmlFor="">
            <div className="grid grid-cols-1 grid-rows-6 text-center w-full gap-1 text-sm cursor-pointer">
              <h3 className="text-red-500 font-bold border-b py-3">Report</h3>
              <h3 tabIndex={0} className="text-red-500 font-bold border-b py-3">
                Unfollow
              </h3>
              <h3 className="border-b py-3">Go to Post</h3>
              <h3 className="border-b py-3">Share to...</h3>
              <h3 className="border-b py-3">Copy Link</h3>
              <h3 className="border-b py-3">Embed</h3>
              <h3 className="border-b py-3">Cancel</h3>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};

export default UserModal;
