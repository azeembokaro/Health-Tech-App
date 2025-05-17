import React, { useState } from 'react';
import './DoctorOneTwoOne.css';

function DoctorOneTwoOne() {
  const [pquery, setpquery] = useState('');

  const handlepqueryChange = (event) => {
    setpquery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log(pquery); // Logs the current textarea input
    setpquery(''); // Clears the textarea
  };

  return (
    <>
      <div className="container-fluid conversation">
        <div className="row">
          <div className="col-12">
            <div className="upper-conversation">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
            </div>

            <div className="lower-conversation text-center">
              <div className="dialog">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="p-2 mt-sm-5 mt-2"
                    placeholder="Enter Your Health Issues"
                    value={pquery}
                    onChange={handlepqueryChange}
                  />
                  <br />
                  <button className="btn btn-primary mt-sm-3 mt-2" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorOneTwoOne;
