import React from 'react';
import Device from './Device';
import './DeviceManagement.css';

const DeviceManagement: React.FC = () => {
  const devices = [
    { type: 'Primary GPS' },
    { type: 'Secondary GPS' }
  ];

  return (
    <div className="device-management">
      <h1 className="title">Device management</h1>
      <p className="subtitle">Add details of the device, if any already installed on your car. If none, then continue to next step.</p>

      {devices.map((device, index) => (
        <Device key={index} index={index + 1} deviceType={device.type} />
      ))}

      <div className="button-container">
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default DeviceManagement;