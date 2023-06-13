import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer_main from './Components/Footer_main/Footer_main';
import Newsletter from './Components/Newsletter/Newsletter';
import Partners from './Components/Partners/Partners';
import FAQ from './Components/FAQ/FAQ';
import JoinOurCommunity from './Components/JoinOurCommunity/JoinOurCommunity';
import BuildingBlockchai from './Components/BuildingBlockchai/BuildingBlockchai';
import Home_first from './Components/Home_first/Home_first';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home_first/>
    <JoinOurCommunity/> 
    <BuildingBlockchai/>
     <FAQ/>
    <Partners/>
    <Newsletter/>
    <Footer_main/> 
    </div>
  );
}

export default App;
