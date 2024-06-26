import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Assets/Views/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Color from "./Assets/Components/Commons/Style/Utils/Color.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arriviamo from './Assets/Components/Sections/Arriviamo';
import PageNotFound from './Assets/Components/Sections/PageNotFound';
import Music from './Assets/Views/Music';
import AboutPage from './Assets/Components/AboutPage/AboutPage';
function App() {
  return (
    
 <Router>
  <Routes>
<Route path='/' element={<Arriviamo />} />
<Route path='/home' element={<HomePage />}/>
<Route path="*" element={<PageNotFound />} /> 
<Route path ="/Music" element={<Music/>} />
<Route path='/About' element={<AboutPage/>} />
  </Routes>
 </Router>
   

  );
}

export default App;
