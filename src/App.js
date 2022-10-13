import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
