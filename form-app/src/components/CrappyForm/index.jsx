import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../../components/Question';
import StarRatingInteractive from '../../components/StarRating';

const CrappyForm = ({ question, answerComp }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const submitHandler = () => {
    setQuestionNum((n) => n + 1);
    console.log('Submit with', question, answer);
    // TODO: Send POST data to form.
    navigate(`/form/${questionNum + 1}`);
  };

  return (
    <Question
      question={question}
      answer={<StarRatingInteractive setAnswer={setAnswer} />}
      submitHandler={submitHandler}
    />
  );
};

export default CrappyForm;
