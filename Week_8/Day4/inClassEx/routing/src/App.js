import Home from './compondent/Home';
import About from './compondent/About';
import Contact from './compondent/Contact';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
