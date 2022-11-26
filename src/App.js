import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Footer from './components/Footer';
import {Navbar} from './components/Navbar';
import Recommendation from './components/Recommendation/Recommendation'
import Story from './components/Story';

function App({details}) {
  return (
    <>
    <Navbar/>
    <div className='w-full flex flex-wrap'>
      <div className='tablet:w-1/2 mobile:w-full flex flex-col tablet:items-end items-center justify-center'>
      <Story/>
      <section className="w-full tablet:w-full flex-wrap tablet:flex tablet:justify-end tablet:pl-20 largeMobileScreens:pl-0 laptop:pr-4 laptop:pl-6">
      <Feed/>
      </section>
      </div>
      <div className='tablet:w-1/2 mobile:w-full flex justify-start'>
      <Recommendation/>
      </div>
      <div >
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;