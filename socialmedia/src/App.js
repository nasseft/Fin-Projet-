import Home from './Pages/Home/Home';
import './App.css';
import Profile from './Pages/Profile/Profile';
import Auth from './Pages/Auth/Auth';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%' , right:'0'}}></div>
      <div className='blur' style={{top:'36%', left:'-8rem'}}></div>
      {/* <Home/> */}
      <Profile/>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
