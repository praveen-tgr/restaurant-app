import React from "react";
import './About.css'
import AboutChef1 from '../utils/img/chef1.jpg';
import AboutChef2 from '../utils/img/chef2.jpg';
import { ImageGallery } from "../components/imageGallery";
import { Reviews } from "../components/Reviews";



function About(){
    return(
        <div className="about-page"> 
          <header className="mt-5">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <h1 className="text-light">About</h1>
            </div>
          </header>

<div className="container my-5">
  <p>At Hungry Zone, we bring people together through the universal love of food.
     Our journey began with a vision to create a place where flavors, quality, and comfort come together seamlessly.
    From carefully selected
     ingredients to dishes crafted with precision, every meal we serve tells a story of passion and dedication.
  </p>
  <p>We strive to deliver an unforgettable dining experience, whether you're savoring your favorite comfort food or exploring bold, new flavors. Hungry Zone isn’t just a restaurant; it’s a place where every bite creates cherished memories. 
    Step into our world of culinary delight, where your hunger meets its perfect match!</p>
    <div className="row">
      <div className="col-lg-6">
        <img src={AboutChef1} className="img-fluid my-4" alt=""/>
      </div>
      <div className="col-lg-6">
        <img src={AboutChef2} className="img-fluid my-4" alt=""/>
      </div>
    </div>
<p>
At Hungry Zone, our culinary creations are brought to life by our talented chef, a true maestro in the art of cooking. With years of experience and a passion for crafting exquisite flavors, our chef combines traditional techniques with innovative approaches to deliver dishes that delight the senses. 
</p><p>
Dedicated to using the finest, freshest ingredients, our chef ensures that every meal is a masterpiece, carefully prepared to perfection. Their creativity and love for food are the heart of Hungry Zone, turning every dish into a story of flavor,
 texture, and aroma. Come and experience the magic created by our chef’s expert hands!</p>

</div>
<div className="bg-dark text-light">
  <ImageGallery/>
</div>
<div className="my-5"><Reviews/></div>
        </div>
    )
}

export default About;