export interface Plan {
    name: string;
    features: string[];
    price: string;
  }

  export interface AddOnsProps {
    selectedPlan: Plan;
  }