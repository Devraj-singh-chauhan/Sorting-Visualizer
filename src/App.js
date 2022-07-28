import React,{Component} from 'react';
import './App.css';
import SortingVisualizer from './Sorting Visualizer/SortingVisualizer';
import Home from './components/home'
import Theory from './components/theory'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './navbar';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
  
          <Navbar/>
        
          <Routes>
            <Route exact path="/" element={<Home/>}>
              
            </Route>
            <Route exact path="/theory" element={<Theory/>}>
              
            </Route>
          </Routes>
          
  
      </div>
      </Router>
    );
  }
  
}

export default App;
