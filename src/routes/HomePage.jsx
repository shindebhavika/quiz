// HomePage.js

import React from 'react';
import Card from '../components/Card';
import { CardData } from '../data/items';

function HomePage() {
  return (
    <div className='flex gap-3 flex-wrap page-container card-container '>
      {CardData.map((card, index) => (
     <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default HomePage;
