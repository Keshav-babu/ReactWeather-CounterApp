import './App.css';
import { UseEffectExample } from './conponent/useEffectExp';
import { WeatherInfo } from './conponent/weatherInfo';

function App() {
  return (
    <div className="App">
      <h3>React Rev1</h3>
      <WeatherInfo/>
      <hr/>
      <UseEffectExample/>
    </div>
  );
}

export default App;
