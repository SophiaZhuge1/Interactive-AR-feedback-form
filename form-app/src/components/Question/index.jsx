import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Question = ({ answer, question, submitHandler }) => {
  return (
    <Modal show animation>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{question}</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
      {answer}

      <Button type="button" onClick={submitHandler} variation="primary">
        Submit
      </Button>
    </Modal>
  );
};

export default Question;
