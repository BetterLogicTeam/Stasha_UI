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
import AcceptCrypto from './Components/AcceptCrypto/AcceptCrypto';
import Opportunities from './Components/Opportunities/Opportunities';
import Stasha_Academy from './Components/Stasha_Academy/Stasha_Academy';
import Stasha_Dictionary from './Components/Stasha_Dictionary/Stasha_Dictionary';
import Stasha_Coin from './Components/Stasha_Coin/Stasha_Coin';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home_first/>
    <BuildingBlockchai/>
    <Opportunities/>
    <Stasha_Coin />
    <AcceptCrypto/>
    <Stasha_Academy/>
    <Stasha_Dictionary/>
    <JoinOurCommunity/> 
     <FAQ/>
    <Partners/>
    <Newsletter/>
    <Footer_main/> 
    </div>
  );
}

export default App;
