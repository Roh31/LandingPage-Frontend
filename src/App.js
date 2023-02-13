import logo from './logo.svg';
import Company_logo from './price.png'
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    
    <div className='App'>
      <img src={Company_logo} className="logo"/><br/>
      <LandingPage />
    </div>
  );
}

export default App;
