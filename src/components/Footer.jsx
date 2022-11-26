// Footer component
const Footer = () => {
  return (
    <>
      <div className="flex justify-center py-2 bg-white border-t border-gray-100 space-x-8" id="bottom">
        <h3 className="font-semibold hidden tablet:flex">For Learning/Educational Purpose Only!</h3>
        <div className="flex space-x-8">
          <h1 className="font-semibold">View my Portfolio  
            <a href="https://shubhambhoj.in" target="_blank" className="text-blue-600 font-bold"> here</a>
          </h1>
        </div>
        <h1 className="font-bold">Coded by: <span> SHUBHAM SINGH</span></h1>
      </div>
    </>
  )
}

export default Footer