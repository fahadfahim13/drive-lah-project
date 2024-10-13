import React from 'react';
import { Plan } from './types';

interface PlanSelectionProps {
  onSelect: (plan: Plan | null) => void;
  selectedPlan: Plan | null;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ onSelect, selectedPlan }) => {
  const plans: Plan[] = [
    {
      name: 'Just mates',
      features: [
        'Bring your own GPS',
        'Mileage reporting to be done by you',
        'In-person key handover to guests'
      ],
      price: 'Free'
    },
    {
      name: 'Good mates',
      features: [
        'Primary GPS included',
        'Automated mileage calculations',
        'In-person key handover to guests'
      ],
      price: '$10/month'
    },
    {
      name: 'Best mates',
      features: [
        'Keyless access technology',
        'Automated mileage calculations',
        'Remote handover to guests'
      ],
      price: '$30/month'
    }
  ];

  return (
    <div>
      <h2 className="section-title">Select your plan</h2>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${selectedPlan?.name === plan.name ? 'highlighted' : ''}`}
            onClick={() => onSelect(plan)}
          >
            <h3 className="plan-title">{plan.name}</h3>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="plan-price">{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;