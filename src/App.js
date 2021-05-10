import './App.css';
import Slider from './Components/Slider/Sliders'
import { Route } from "react-router-dom";
import AddSlider from './Components/Slider/AddSlider'
import EditSlider from './Components/Slider/EditSlider'

function App() {
  return (
    <div className="App">
        
        <Route exact path="/" component={Slider} />
        <Route exact path="/add" component={AddSlider} />
        <Route exact strict path="/:id" component={EditSlider} />
    </div>
  );
}

export default App;
