import React from 'react';
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from './utils/img/logo.png'; // Replace with your logo path
import './App.css'; // Import CSS for styling

function App() {
  return (
    
      <div>
        <Navbar expand="lg" className="fixed-top custom-navbar shadow">
          <Container>
            <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="Restaurant Logo" className="logo-round" />
              <span className="ms-2 fw-bold brand-name">React Restaurant</span>
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto justify-content-end w-100">
                <Nav.Link href="/" className="active nav-link custom-nav-link">Home</Nav.Link>
                <Nav.Link href="/menu" className="nav-link custom-nav-link">Menu</Nav.Link>
                <Nav.Link href="/about" className="nav-link custom-nav-link">About</Nav.Link>
                <Nav.Link href="/contact" className="nav-link custom-nav-link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to ="/" replace/>}/>
          
        </Routes>
        

        <footer className='bg-body-tertiary'><p className='p-3 m-0 text-center'>copyright @ made by praveen</p></footer>
      </div>
  );
}


export default App;
