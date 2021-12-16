import React, { useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const EndScreen = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <div div className="landing-container">
        <div className="landing-body">
          <h1 className="text-center">Thank you!</h1>
        </div>
      </div>
    </>
  );
};

export default EndScreen;
