import Nav  from './Components/Nav';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <section>
      <div className='home'>
         <Nav/>
        <LandingPage/>
      </div>
    </section>
  );
}

export default App;
