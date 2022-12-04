import Counter from './components/Counter';
import Parent from './components/Parent';
import Child from './components/Child';
import ErrorBoundary from './ErrorBoundary'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
         
          <ErrorBoundary>
                <Counter />
                <Counter />
          </ErrorBoundary>
                
                
          <Counter />
          <Counter />

          <Parent username='admin'>
               <Child />
          
          </Parent>
      </header>
    </div>
    
  );
}

export default App;
