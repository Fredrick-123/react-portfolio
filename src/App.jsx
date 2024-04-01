import Header from "./Components/Header/Header";
import './styles/index.css';
import './styles/global.scss';
import '../src/styles/app.module.scss';
import  Hero from './Components/Hero/Hero'
import Expertise from "./Components/Expertise/Expertise";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import People from "./Components/People/People";
import Footer from "./Components/Footer/Footer";



const App = () => {
  return <div className={` bg-primary ${CSS.conatiner}`}>
   <Header/> 
<Hero/>
<Expertise/>
<Works/>
<Portfolio/>
<People/>
<Footer/>
  </div>
};

export default App;
