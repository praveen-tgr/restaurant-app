import React from "react";
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about.us.jpg'
import { Link } from "react-router-dom";
import { ImageGallery } from "../components/imageGallery";
import { ContactInfo } from "../components/Contactinfo";
import ContactImage from '../utils/img/contact.jpg';

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="welcome mb-0 fw-bold">Welcome to</h2>
              <h1 className="hungry mb-5 fw-bold text-center text-sm-start">HUNGRY ZONE</h1>
              <MenuBtn />
            </div> 
          </div>
        </div>
      </header>
      <div className="container my-5">
  <div className="row">
    {/* Left Column: Add content or image */}
    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
      {/* Placeholder for image or graphic */}
      <img 
        src={AboutImg} 
        alt="About Us" 
        className="img-fluid"
      />
    </div>
    
    {/* Right Column: Text Content */}
    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
      <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
      <p>
      Welcome to Hungry Zone, where passion for food meets exceptional flavors. We are dedicated to serving you a diverse menu crafted with the finest ingredients, ensuring every dish is a blend of taste, quality, and freshness.
       </p>
      <p className="mb-5">
      At Hungry Zone, we believe food is more than just a meal—it’s an experience that brings people together. Whether you're here for a quick bite or a leisurely feast, our warm ambiance and delicious offerings promise to leave you satisfied and coming back for more. Indulge in the joy of great food, only at Hungry Zone!
      </p>
      <Link to="/about">
        <button type="button" className="btn btn-outline-success btn-lg">
          More About Us
        </button>
      </Link>
    </div>
  </div>
</div>
<div className="menu-section py-5 text-light shadow">
  <div className="container d-flex flex-column align-items-center">
    <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favourites</h2>
    <div classname="row mb-5 w-100">
      <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
        <h3 className="fs-2 mb-5">Food</h3>
        <ul className="px-0">
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">English Breakfast</p>
            <p className="fs-3 mx-3 text-success fw-bold">$12</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">Spicy Beef</p>
            <p className="fs-3 mx-3 text-success fw-bold">$15</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">Paneer Tikka</p>
            <p className="fs-3 mx-3 text-success fw-bold">$14</p>
          </li>
        </ul>
      </div>
      
      <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
        <h3 className="fs-2 mb-5">Drinks</h3>
        <ul className="px-0">
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">Mango Lassi</p>
            <p className="fs-3 mx-3 text-success fw-bold">$12</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">Lemon Mint Cooler</p>
            <p className="fs-3 mx-3 text-success fw-bold">$11</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="fs-3 mx-2">Iced Coffee</p>
            <p className="fs-3 mx-3 text-success fw-bold">$13</p>
          </li>
        </ul>
      </div>
      </div>
      <MenuBtn/>
      </div>
      </div>
    
<ImageGallery/>

<div className="bg-dark text-light py-5 shadow">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
        <ContactInfo/>
      </div>
      <div className="col-lg-6 d-flex justify-content-center">
         <img src ={ContactImage} className="img-fluid w-50" alt=""/>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;