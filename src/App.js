import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Entrance from './components/Entrance/Entrance';
import Students from './components/Students/Students';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





const App = () => {
  return (
    <BrowserRouter> 
    <div className="App">
      <Entrance />
        <Header />
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/students' element={<Students />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>

  );
}

export default App;
