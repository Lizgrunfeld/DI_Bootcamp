import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import FirstComp from './components/FirstComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello />
       <FirstComp />
      </header>
    </div>
  );
}

export default App;
