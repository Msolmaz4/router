import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Aboutus from './compenents/Aboutus';
import Contact from './compenents/Contact';
import Main from './compenents/Main';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
