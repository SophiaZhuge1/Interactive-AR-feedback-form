import React from 'react';
import QRCode from './components/QRCode';
import './App.css';

const App = () => {
  const QR_CODE_URL =
    import.meta.env.SNOWPACK_PUBLIC_QR_CODE_URL ||
    'https://www.lloydsbank.com/contact-us/great-experience.html';

  return (
    <div className="lau-container">
      <h1>Give feedback!</h1>
      <QRCode url={QR_CODE_URL} />
    </div>
  );
};

export default App;
