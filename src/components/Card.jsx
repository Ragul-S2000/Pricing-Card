import React from 'react';
const Card = ({card,ind}) => {
    return (
        <div style={{width:'30%',marginLeft:'30px',lineHeight:'50px', borderRadius:'20px'}} className='card col-sm-12 col-md-4 col-lg-4 col-xl-4'>
            <div className='title pt-5'>
                <h3 style={{fontSize:"medium",color:"grey"}} className='text-center'>{card.plan}</h3>
                <h1 className='text-center'>${card.price}/month</h1>
            </div>
            <div className='features'>
                <ul style={{listStyle:"none"}}>
                    {card.features.map((feature, index) => (
                        <li key={index} style={feature.enabled ? {} : { opacity: 0.5 }} className={feature.enabled ? 'enabled' : 'disabled'}><span style={{margin:'10px'}}>{feature.enabled ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}</span>{feature.name}</li>
                    ))}
                </ul>
            </div>
            <div className='button text-center' >
                <button type='button' style ={{borderRadius:'50px',marginBottom:'20px',height:'50px'}}  className='btn btn-primary w-100'>{card.buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
