import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Myprojects from './components/myprojects/Myprojects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
            <Navbar/>
      <Header />
      <About />
      <Experience />
      <Myprojects />
      <Contacts />
      <Footer />
    </HashRouter>
  );
};

export default App;
