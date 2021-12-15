import React from 'react';
import './styles.css';
import QR from 'qrcode.react';

const QRCode = ({ url }) => (
  <QR renderAs="svg" id="lau-qr-code-canvas" includeMargin value={url} />
);

export default QRCode;
