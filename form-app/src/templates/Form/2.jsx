import React from 'react';
import CrappyForm from '../../components/CrappyForm';
import StarRatingInteractive from '../../components/StarRating';

const Question2 = () => (
  <CrappyForm
    question="How satisfied are you with the service you had today?"
    answer={<StarRatingInteractive />}
  />
);

export default Question2;
