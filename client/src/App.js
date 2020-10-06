import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ItemList from './components/ItemList';


const items = [
  {
    name: "Reel Viewer",
    id: 0,
    price: 29.95,
    imageUrl:
      "https://www.uncommongoods.com/images/items/47400/47435_1_360px.jpg",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add them to your very own reel using the redemption code included with your viewer. Once you receive your made-to-order reel, pop it in the viewer and marvel at baby's first steps, or your favorite beach at sunset, or... well, whatever else you want immortalized. Remember: You're the view master now. Made in Oregon.",
    shipping:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."
  },
  {
    name: "Mathematical Glasses - Set of 4",
    id: 1,
    price: 38.0,
    imageUrl:
      "https://www.uncommongoods.com/images/items/46700/46720_1_360px.jpg",
    description:
      "Whether it's advanced calculus or just calculating ideal ice to iced tea ratios, stay hydrated in statistical style with this set. Drinking with mathematical precision is easy: Just use the standard ounce marks and their equivalent constants, then geek out over the expanded formulas—all presented in delightfully differential colors like graph paper blue and #2 pencil gray. Glassware made in New Jersey. Decorated in Blanchester, Ohio. ",
    shipping:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."
  },
  {
    name: "Shakespearean Insults Chart",
    id: 2,
    price: 25.49,
    imageUrl:
      "https://www.uncommongoods.com/images/items/27300/27303_1_360px.jpg",
    description:
      'We all know someone who deserves to be dubbed a "penurious and indubitate beggar." And from time to time, you may be tempted to say that "he has not so much brain as ear-wax." This rollicking infographic is chock-full of such colorful insults from Shakespeare, the playwright who practically invented the art of the poetic put-down. Designer Tim Sanders culled the Oxford Complete Shakespeare to compile an endlessly entertaining word map of the Bard\'s boisterous, bawdy jabs, each one a mini-masterpiece of raunchy, rancorous Renaissance wit. The four-color, offset-printed poster on 100 lb., acid-free, FSC-certified paper makes the perfect reference and decor for an astute office, library, or thespian lounge. Made in Seattle.',
    shipping:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY SHIPPING: within 8 days, arriving no later than the 9th business day after the order was placed. STANDARD SHIPPING: within 4 days, arriving 5 business days after the order was placed. PREFERRED SHIPPING: within 2 days, arriving 3 business days after the order was placed. EXPEDITED SHIPPING: within 1 day, arriving 2 business days after the order was placed. EXPRESS SHIPPING: will ship the same day and arrive 1 business day later."
  }
];

function App() {
  return (
    <div className="App">
      <nav>
        <h1>
          Mini Store
        </h1>
        <div className='navBar'>
          <NavLink className='navLink' exact to="/">
            Home
          </NavLink>
          <NavLink className='navLink' to="/item-list">
            Shop
          </NavLink>
        </div>
      </nav>

      <Route exact path="/" component={Home}>

      </Route>
      <Route exact path='/item-list'>
        <ItemList items={items}></ItemList>
      </Route>

    </div>
  );
}

export default App;
