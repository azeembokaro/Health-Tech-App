import React, { useState, useRef } from "react";
import "./AskExpert.css";

const AskExpert = () => {
  const initialState = {
    mi: "",
    from: "",
    to: "",
    mr: null,
    cf: "",
  };

  const [formData, setFormData] = useState(initialState);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The Form is Submitted Successfully", formData);
    alert("Your query has been submitted ✅");
    setFormData(initialState);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-10 offset-1">
          <div className="ask-expert-box p-4">
            <h3 className="text-center mb-4 text-light">Ask Expert</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="mi" className="form-label">
                Medical Issue
              </label>
              <textarea
                id="mi"
                name="mi"
                className="form-control beautiful-input"
                value={formData.mi}
                onChange={handleChange}
                required
              />

              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="from" className="form-label">
                    From
                  </label>
                  <input
                    type="date"
                    id="from"
                    name="from"
                    className="form-control beautiful-input"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="to" className="form-label">
                    To
                  </label>
                  <input
                    type="date"
                    id="to"
                    name="to"
                    className="form-control beautiful-input"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="mr" className="form-label mt-3">
                Upload Medical Record
              </label>
              <input
                type="file"
                id="mr"
                name="mr"
                accept=".pdf,.jpg,.jpeg,.png"
                className="form-control beautiful-input"
                ref={fileInputRef}
                onChange={handleChange}
              />

              <label htmlFor="cf" className="form-label mt-3">
                Consult For
              </label>
              <textarea
                id="cf"
                name="cf"
                className="form-control beautiful-input"
                value={formData.cf}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn btn-primary btn-lg mt-4 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskExpert;
