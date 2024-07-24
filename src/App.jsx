import React from 'react';
import Card from './components/Card';

const App = () => {
  const cards = [
    {
      plan: "FREE",
      price: 0,
      features: [
        { name: "Single User", enabled: true },
        { name: "50GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: false },
        { name: "Dedicated Phone Support", enabled: false },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false }
      ],
      buttonText: "Button"
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        { name: "5 Users", enabled: true },
        { name: "50GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: false }
      ],
      buttonText: "Button"
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        { name: "Unlimited Users", enabled: true },
        { name: "150GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: true }
      ],
      buttonText: "Button"
    }
  ];


  return (
    <>
      <div className="container" style={{ background: 'rgb(16, 144, 232)'}}>
        <h1 style={{textAlign:'center'}}>Pricing Card</h1>
      <div style={{marginTop:'30px'}} className='row  py-5 px-5 '>
      {cards.map((card,ind) => (
        <Card key={ind} card={card}/>
      ))}
      </div>
      </div>
      </>
  );
};

export default App;
