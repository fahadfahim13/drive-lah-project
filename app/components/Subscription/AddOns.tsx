import React from 'react';
import { AddOnsProps, Plan } from './types';
import './SubscriptionPage.css';

const AddOns: React.FC<AddOnsProps> = ({ selectedPlan }) => {
  const addOns = [
    { name: 'BYO secondary GPS', price: '$5/month' },
    { name: 'BYO lockbox', price: '$10/month', showFor: ['Good mates'] },
    { name: 'Between trip insurance', price: 'Coming soon', showFor: ['Best mates'] }
  ];

  return (
    <div className="add-ons">
      <h2 className="section-title">Select add-ons for your subscription</h2>
      <div className="add-ons-grid">
        {addOns.map((addon, index) => (
          (!addon.showFor || addon.showFor.includes(selectedPlan.name)) && (
            <div key={index} className="add-on-item">
              <div className="add-on-content">
                <span className="add-on-name">{addon.name}</span>
                {addon.price !== 'Coming soon' && <span className="add-on-price">- {addon.price}</span>}
              </div>
              {addon.price === 'Coming soon' ? (
                <span className="coming-soon">Coming soon</span>
              ) : (
                <input 
                  type="checkbox" 
                  id={`addon-${index}`} 
                  className="custom-checkbox" 
                />
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default AddOns;