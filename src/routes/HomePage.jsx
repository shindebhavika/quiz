// HomePage.js

import React from 'react';
import Card from '../components/Card';
import { CardData } from '../data/items';
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
    <div className='flex gap-3 flex-wrap page-container card-container '>
      {CardData.map((card, index) => (
     <Card key={index} {...card} />
      ))}

    </div>
  <div className='Footer-container'>
  <Footer/> 
  </div>
   
    
    
    </>
  );
}

export default HomePage;
