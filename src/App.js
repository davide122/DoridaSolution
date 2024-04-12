import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Assets/Views/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Color from "./Assets/Components/Commons/Style/Utils/Color.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arriviamo from './Assets/Components/Sections/Arriviamo';

function App() {
  return (
 <Router>
  <Router>
<Route path='/' element={<Arriviamo />} />
<Route path='/home' element={<HomePage />} />
  </Router>
 </Router>

  );
}

export default App;
