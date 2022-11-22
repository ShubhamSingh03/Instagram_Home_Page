import './App.css';
import {Navbar} from './components/Navbar';
import Recommendation from './components/Recommendation/Recommendation'
import Story from './components/Story';

function App() {
  return (
    <>
    <Navbar/>
    <div className='w-full flex'>
      <div className='tablet:w-1/2 mobile:w-full flex justify-end h-fit'>
      <Story/>
      </div>
      <div className='tablet:w-1/2 mobile:w-full flex justify-start'>
      <Recommendation/>
      </div>
    </div>
    </>
  );
}

export default App;