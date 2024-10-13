"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./SubscriptionPage.css";
import DeviceManagement from "./DeviceManagement";
import PlanSelection from "./PlanSelection";
import { Plan } from "./types";
import AddOns from "./AddOns";
import CardDetails from "./CardDetails";

const SubscriptionPlanPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const planContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("Subscription");

  const handleNext = () => {
    if (activeTab === "Subscription") {
      setActiveTab("Device");
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <Sidebar activeTab={activeTab} />
        <main className="main-content">
          {activeTab === "Subscription" && (
            <>
              <h1 className="title">Subscription plan</h1>
              <p className="subtitle">
                Select the ideal subscription plan for your listing.
              </p>

              <div ref={planContainerRef}>
                <PlanSelection
                  onSelect={setSelectedPlan}
                  selectedPlan={selectedPlan}
                />
              </div>

              {selectedPlan && <AddOns selectedPlan={selectedPlan} />}
              {selectedPlan && <CardDetails selectedPlan={selectedPlan} />}

              <p className="info">
                Learn more about the plans here -{" "}
                <a href="#" className="info-link">
                  What is the right plan for me?
                </a>
              </p>
              <p className="info">
                You will be able to switch between plans easily later as well.
                Speak to our host success team if you need any clarifications.
              </p>
            </>
          )}
          {activeTab === "Device" && <DeviceManagement />}

          {activeTab === "Subscription" && (
            <div className="button-container">
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubscriptionPlanPage;
