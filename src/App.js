
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
    <div className="app">
    {/* <Header/> */}
      <Routes>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/' element={<> <Header/><Home/></>}></Route>
        <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
      {/* <Header/> */}
      {/* <Home/> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
