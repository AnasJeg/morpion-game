import './App.css';
import Foot from './components/Foot';
import Game from './components/Game';

function App() {
  return (
    <div className="App" >
      <h2>JEU DE MORPION</h2>
      <Game />
      <br/><br/><br/>
     <Foot/>
    </div>
  );
}
export default App;