import React from 'react';
import './SubscriptionPage.css';

interface SidebarProps {
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const sidebarItems = [
    'Location', 'About', 'Features', 'Rules', 'Pricing', 'Promotion', 'Pictures', 'Insurance', 'Subscription', 'Device', 'Easy Access'
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sidebarItems.map((item, index) => (
          <div 
            key={index} 
            className={`sidebar-item ${item === activeTab ? 'active' : ''} ${index > sidebarItems.indexOf(activeTab) ? 'inactive' : ''}`}
          >
            {item === activeTab && <span className="sidebar-active-indicator"></span>}
            <span className="sidebar-text">{item}</span>
            {index <= sidebarItems.indexOf(activeTab) && (
              <span className="sidebar-icon"></span>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;