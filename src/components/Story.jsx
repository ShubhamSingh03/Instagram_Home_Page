import { faker } from '@faker-js/faker';

// Story Component with random fake username and avatar
const Story = () => {
  return (
  <div className="tablet:px-[20px] py-4 tablet:bg-white tablet:border tablet:border-gray-200 mx-[14px] mt-6 mb-4 rounded-md overflow-x-auto tablet:overflow-x-hidden cursor-pointer">
    <div className="flex flex-col items-center justify-center">
	    <div className="flex space-x-5">
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400  ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400 ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>        
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400 ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400 ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400 ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>
        <div className="space-y-2">
          <img alt="" className="w-14 h-14 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-pink-400 ring-offset-white hover:scale-110 hover:transition-all hover:ease-in-out" src={faker.image.avatar()} />
          <p className="text-xs text-center w-14 truncate">{faker.internet.userName()}</p>
        </div>
	    </div>
    </div>
  </div>
  )
}

export default Story

// https://source.unsplash.com/40x40/?portrait?.random unsplash api