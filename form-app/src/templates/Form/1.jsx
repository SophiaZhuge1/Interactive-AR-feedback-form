import React from 'react';
import CrappyForm from '../../components/CrappyForm';
import StarRatingInteractive from '../../components/StarRating';

const Question1 = () => (
  <CrappyForm
    question="How was your experience at Lloyds today?"
    answer={<StarRatingInteractive />}
  />
);

export default Question1;
