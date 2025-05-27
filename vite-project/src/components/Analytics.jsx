import React from 'react';
import './Analytics.css';

const orders = [
  { id: 108, type: 'Dine In', time: 'Ongoing: 4 Min', status: 'Processing' },
  { id: 108, type: 'Dine In', time: 'Served', status: 'Served' },
  { id: 108, type: 'Take Away', time: 'Not Picked up', status: 'Ready' },
  { id: 108, type: 'Dine In', time: 'Ongoing: 4 Min', status: 'Processing' },
  { id: 108, type: 'Dine In', time: 'Ongoing: 4 Min', status: 'Processing' },
  { id: 108, type: 'Take Away', time: 'Not Picked up', status: 'Ready' },
  { id: 108, type: 'Dine In', time: 'Served', status: 'Served' },
  { id: 108, type: 'Dine In', time: 'Ongoing: 4 Min', status: 'Processing' },
];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Order Line</h2>
      <div className="order-grid">
        {orders.map((order, index) => (
          <div key={index} className={`order-card ${order.status.toLowerCase()}`}>
            <div className="order-header">
              <div className="order-id">🍽 # {order.id}</div>
              <div className={`order-type ${order.status.toLowerCase()}`}>
                <span>{order.type}</span>
                <span>{order.time}</span>
              </div>
            </div>
            <div className="order-info">
              <p>Table-05</p>
              <p>9:37 AM</p>
              <p><strong>3 Item</strong></p>
            </div>
            <div className="order-items">
              <p>1 × Value Set Meals</p>
              <ul>
                <li>Double Cheeseburger</li>
                <li>Apple Pie</li>
                <li>Coca-Cola L</li>
              </ul>
            </div>
            <div className={`order-footer ${order.status.toLowerCase()}`}>
              {order.status === 'Processing' && <span>⌛ Processing</span>}
              {order.status === 'Served' && <span>✅ Order Done</span>}
              {order.status === 'Ready' && <span>📦 Order Done</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
