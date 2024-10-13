import React from 'react';
import './SubscriptionPage.css';
import { AddOnsProps } from './types';

const CardDetails: React.FC<AddOnsProps> = ({ selectedPlan }) => {
    if(selectedPlan && selectedPlan.name === 'Just mates'){
        return null;
    }
  return (
    <div className="card-details">
      <h2 className="section-title">Add card details</h2>
      <div className="card-input-container">
        <div className="card-input-group">
          <input type="text" placeholder="1234 5678 1234 5678" className="card-input" />
          <input type="text" placeholder="MM/YY" className="card-input small" />
          <input type="text" placeholder="CVC" className="card-input small" />
        </div>
      </div>
      <p className="card-info">You will not be charged right now. Subscription will only start once your listing is published and live.</p>
    </div>
  );
};

export default CardDetails;