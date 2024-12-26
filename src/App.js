import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import WorkHistory from './pages/WorkHistory';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/Register" element={<Contact/>}/>
            <Route path="/Profile" element={<AboutMe/>}/>
            <Route path="/Dashboard" element={<WorkHistory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
