import './App.css';
import Navbar from './components/navbar.js';
import WorkDoneIsobar from './components/workDoneIsobar.js';
import WorkDoneIsothermal from './components/workDoneIsothermal.js';
import SteadyFlow from './components/steadyFlow';
import Nozzle from './components/nozzle';

function App() {
  return (
    <>
      <Navbar/>
      <WorkDoneIsobar/>
      <WorkDoneIsothermal/>
      <Nozzle/>
      <SteadyFlow/>
    </>
  );
}

export default App;

