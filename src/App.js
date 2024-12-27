import logo from './media/logo.svg';
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
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/WorkHistory" element={<WorkHistory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
