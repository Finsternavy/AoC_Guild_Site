import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" exact element= {<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
