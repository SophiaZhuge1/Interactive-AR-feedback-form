import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div div className="landing-container">
      <h1 className="text-center">Provide feedback</h1>

      <div className="landing-body">
        <Button
          type="link"
          variant="primary"
          size="lg"
          onClick={() => navigate('/form')}
        >
          Launch
        </Button>

        <Button
          type="link"
          variant="outline-primary"
          size="lg"
          onClick={() => (window.location.href = 'https://www.google.co.uk')}
        >
          Try with AR
        </Button>
      </div>
    </div>
  );
};

export default Landing;
