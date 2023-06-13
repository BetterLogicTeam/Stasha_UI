import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer_main from './Components/Footer_main/Footer_main';
import AcceptCrypto from './Components/AcceptCrypto/AcceptCrypto';
import Stasha_Academy from './Components/Stasha_Academy/Stasha_Academy';
import Stasha_Dictionary from './Components/Stasha_Dictionary/Stasha_Dictionary';
import Opportunities from './Components/Opportunities/Opportunities';
import Stasha_Coin from './Components/Stasha_Coin/Stasha_Coin';

function App() {
  return (
    <div className="App">
    {/* <AcceptCrypto /> 
    <Stasha_Academy />
    <Stasha_Dictionary />
    <Opportunities />  */}
    <Stasha_Coin />
    {/* <Footer_main/> */}
    </div>
  );
}

export default App;
