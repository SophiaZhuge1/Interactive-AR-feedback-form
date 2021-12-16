import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div class="container">
      <h1>Provide feedback</h1>
      <Button type="link" variant="primary" size="lg">
        <Link to="/ar">Try AR</Link>
      </Button>

      <div class="modal fade" id="myModal1" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Question1</h4>
            </div>
            <div class="modal-body">
              <b>How was your experience at Lloyds today?</b>

              <div class="feedbackbox">
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                data-toggle="modal"
                href="#myModal2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal2" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Question2</h4>
            </div>
            <div class="modal-body">
              <b>How satisfied are you with the service you had today?</b>

              <div class="feedbackbox">
                <div class="emoji">
                  <div id="emoji">
                    <img src="images/poor.png" />
                    <img src="images/bad.png" />
                    <img src="images/okay.png" />
                    <img src="images/good.png" />
                    <img src="images/excellent.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                data-toggle="modal"
                href="#myModal3"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal3" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Question3</h4>
            </div>
            <div class="modal-body">
              <div class="feedbackbox">
                <div class="tick">
                  <label for="yes_no_radio">
                    Are you banking with other financial service providers?
                  </label>
                  <p>
                    Yes
                    <input type="radio" name="yes_no" checked />
                  </p>
                  <p>
                    No
                    <input type="radio" name="yes_no" />
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                data-toggle="modal"
                href="#myModal4"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal4" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Question4</h4>
            </div>
            <div class="modal-body">
              <b>
                On a scale of 1 to 5 how likely would you recommend Lloyds to a
                friend?{' '}
              </b>

              <div class="feedbackbox">
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
