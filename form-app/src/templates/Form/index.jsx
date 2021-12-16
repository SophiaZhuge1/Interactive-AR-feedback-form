import React from 'react';

const Form = () => {
  return (
    <>
      <div className="modal fade" id="myModal1" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Question1</h4>
            </div>
            <div className="modal-body">
              <b>How was your experience at Lloyds today?</b>

              <div className="feedbackbox">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-default"
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

      <div className="modal fade" id="myModal2" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Question2</h4>
            </div>
            <div className="modal-body">
              <b>How satisfied are you with the service you had today?</b>

              <div className="feedbackbox">
                <div className="emoji">
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-default"
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

      <div className="modal fade" id="myModal3" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Question3</h4>
            </div>
            <div className="modal-body">
              <div className="feedbackbox">
                <div className="tick">
                  <label htmlFor="yes_no_radio">
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-default"
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

      <div className="modal fade" id="myModal4" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Question4</h4>
            </div>
            <div className="modal-body">
              <b>
                On a scale of 1 to 5 how likely would you recommend Lloyds to a
                friend?{' '}
              </b>

              <div className="feedbackbox">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
