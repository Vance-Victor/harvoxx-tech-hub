import Nav  from './Components/Nav';
import './App.css';
import LandingPage from './Components/LandingPage';
import About from './Components/About';

function App() {
  return (
    <section>
      <div className='home'>
         <Nav/>
        <LandingPage/>
      </div>
      
      <div>
        <About/>
      </div>
    </section>
    
  );
}

export default App;
