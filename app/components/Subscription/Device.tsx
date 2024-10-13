import React, { useState } from 'react';

interface DeviceProps {
  index: number;
  deviceType: string;
}

const Device: React.FC<DeviceProps> = ({ index, deviceType }) => {
  const [bringOwnDevice, setBringOwnDevice] = useState(false);

  return (
    <div className="device-section">
      <h2>Device {index}</h2>
      <div className="device-grid">
        <div className="device-col">
          <label>Device type</label>
          <select className="device-input" defaultValue={deviceType}>
            <option>{deviceType}</option>
          </select>
        </div>
        <div className="device-col">
          <div className="toggle-container">
            <label>Bringing your own device?</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id={`toggle${index}`}
                checked={bringOwnDevice}
                onChange={() => setBringOwnDevice(!bringOwnDevice)}
              />
              <label htmlFor={`toggle${index}`}></label>
            </div>
          </div>
          <p className="toggle-description">
            Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
          </p>
        </div>
      </div>
      {bringOwnDevice && (
        <div className="device-grid">
          <div className="device-col">
            <label>Serial number</label>
            <input type="text" className="device-input" placeholder="Enter the serial number of the device" />
          </div>
          <div className="device-col">
            <label>Upload an image of the device</label>
            <div className="upload-area">
              <button className="upload-button">Click to upload</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Device;