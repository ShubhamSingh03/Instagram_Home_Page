import './App.css';
import {Navbar} from './components/Navbar';
import Story from './components/Story';

function App() {
  return (
    <>
    <Navbar/>
    <div className='w-full '>
      <div className='tablet:w-1/2 mobile:w-full flex justify-end'>
      <Story/>
      </div>
    </div>
    </>
  );
}

export default App;