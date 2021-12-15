import React from 'react';
import QRCode from './components/QRCode';
import './App.css';

const App = () => {
  const QR_CODE_URL = 'youtube.com';
  return (
    <div className="lau-container">
      <h1>Give feedback!</h1>
      <QRCode url={QR_CODE_URL} />
    </div>
  );
};

export default App;
