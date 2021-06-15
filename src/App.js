import {Button} from './Components/Button/Button';
import hero from './Assets/hero.png';
import Navbar from './Components/Navbar/Navbar'
// import data from './Components/data/data.json';
import Herocontent from './Components/HeroContent/Herocontent';
import Testimonials from './Components/Testimonials/Testimonials';
import Card from './Components/Card/Card';
import Payment from './Components/Payment/Payment';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  
  // const data= data.map((data) =>)
  return (
    <div className="App">
      <div className="fixed shadow-md top-0 right-0 left-0 bg-white m-0 p-4 ">  
      <Navbar />
      </div>
      <h1 className="text-center text-6xl font-semibold mt-24">Accomplish more with better notes</h1>
      <p className="text-center text-2xl font-semibold mt-6">Evernote helps you capture ideas and find them fast.</p>
      <div className="flex justify-center mt-6">
        <Button props='hero' />
      </div>
      <div className="text-center mt-4">
        <a href={'login'} className="underline text-l hover:text-green-400">Already have an account? Log in</a>
      </div>
      <div className="flex items-center">
        <img src={hero} alt="" className="w-3/5 mt-12"/>
        <Herocontent />
      </div>
      <div className="bg-gray-300 w-full">
        {/* <Testimonials/> */}
      </div>
      <div className="mt-14">
      <Card props='carda' />
      <Card props='cardb' />
      <Card props='cardc' />
      <Card props='cardd' />
      </div>
      <div>
      <h1 className="flex justify-center text-4xl font-semibold" >Get the Evernote that’s right for you</h1>
      <div className="flex mt-14">
      <Payment props='basic' />
      <Payment props='premium' />
      <Payment props='business' />
      </div>
      </div>
      <div className="mt-14">
      <Footer props='head' />
      </div>
    </div>
  );
}

export default App;
