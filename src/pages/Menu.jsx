import React from "react";
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/desert.jpg';

const breakfast = [
  {
    id: 1,
    name: 'English Breakfast',
    description: 'Smoked bacon, sausage, tomato, mushroom, black pudding, baked beans, eggs.',
    price: '$12'
  },
  {
    id: 2,
    name: 'Pancake Stack',
    description: 'Fluffy pancakes served with maple syrup, fresh berries, and whipped cream.',
    price: '$10'
  },
  {
    id: 3,
    name: 'Avocado Toast',
    description: 'Toasted sourdough topped with smashed avocado, poached egg, and chili flakes.',
    price: '$8'
  }
];


const lunch = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    description: 'Mixed greens with grilled chicken, cherry tomatoes, cucumbers, and a tangy vinaigrette.',
    price: '$12'
  },
 
  {
    id: 2,
    name: 'Vegetable Stir-Fry',
    description: 'Assorted vegetables stir-fried with soy sauce and served with steamed rice.',
    price: '$10'
  },
  {
    id: 5,
    name: 'Fish Tacos',
    description: 'Grilled fish, shredded cabbage, and tangy salsa wrapped in soft corn tortillas.',
    price: '$13'
  }
];


const dinner = [
  {
    id: 1,
    name: 'Grilled Ribeye Steak',
    description: '12 oz ribeye steak cooked to perfection, served with garlic mashed potatoes and steamed vegetables.',
    price: '$25'
  },
  
  {
    id: 2,
    name: 'Vegetarian Lasagna',
    description: 'Layers of pasta, ricotta cheese, spinach, and marinara sauce, baked with mozzarella on top.',
    price: '$18'
  },
 
  {
    id: 3,
    name: 'Beef Bourguignon',
    description: 'Slow-cooked beef in red wine with mushrooms, onions, and carrots, served with crusty bread.',
    price: '$24'
  }
];


const dessert = [
 
  {
    id: 1,
    name: 'Classic Tiramisu',
    description: 'Layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
    price: '$9'
  },
  {
    id: 2,
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake topped with fresh strawberries and a sweet glaze.',
    price: '$7'
  },
  {
    id: 3,
    name: 'Apple Crumble',
    description: 'Baked apples with a cinnamon crumble topping, served with a scoop of vanilla ice cream.',
    price: '$6'
  },
  
];


function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 lg-5 text-uppercase fw-bold text-success">Breakfast</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ BreakfastImg} className="img-fluid w-75 mt-4 mt-lg-0" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">{breakfast.name} </CardTitle>
                      <CardText className="text-center fs-5">{breakfast.description}</CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">{breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="lunch bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 lg-5 text-uppercase fw-bold text-success">Lunch</h2>
          <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-around">
              {lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">{lunch.name} </CardTitle>
                      <CardText className="text-center fs-5">{lunch.description}</CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">{lunch.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={LunchImg} className="img-fluid w-75 mt-4 mt-lg-0" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 lg-5 text-uppercase fw-bold text-success">Dinner</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ DinnerImg} className="img-fluid w-75 mt-3 mt-lg-0" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">{dinner.name} </CardTitle>
                      <CardText className="text-center fs-5">{dinner.description}</CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">{dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        <div className="dessert bg-dark text-light mt-5 py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 lg-5 text-uppercase fw-bold text-success">Dessert</h2>
          <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">{dessert.name} </CardTitle>
                      <CardText className="text-center fs-5">{dessert.description}</CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">{dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={DessertImg} className="img-fluid w-75 mt-4 mt-lg-0" alt="" />
            </div>
          </div>
        </div>
      </div>
</div>
</div>
    

  )
}

export default Menu;