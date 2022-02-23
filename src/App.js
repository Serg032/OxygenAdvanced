import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import NavBar from './components/navBar/navBar';
import Navigation from './routes';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Navigation/>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
