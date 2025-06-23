import React from "react";
import { useNavigate } from "react-router-dom";
import { usePrescription } from "../../PrescriptionContext";
import "./Consultation.css";

function DoctorObservation() {
  const navigate = useNavigate();
  const { observation, setObservation } = usePrescription();

  // Initialize if undefined
  const currentObservation = observation || { note: "", severity: "" };

  const handleNextOne = () => {
    navigate("/digital_consultation/doctors_symptoms");
  };

  return (
    <>
      <h3 className="text-center py-2 text-success w-75 mx-auto">
        Doctor's Observation
      </h3>

      <div className="mt-sm-2 mt-2 text-center">
        <textarea
          className="doc_obs w-100"
          rows="6"
          placeholder="Enter your observation note"
          value={currentObservation.note}
          onChange={(e) =>
            setObservation({
              ...currentObservation,
              note: e.target.value,
            })
          }
        ></textarea>

        <select
          className="form-select mt-3"
          value={currentObservation.severity}
          onChange={(e) =>
            setObservation({
              ...currentObservation,
              severity: e.target.value,
            })
          }
        >
          <option value="">Select severity</option>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </select>

        <button className="btn btn-info mt-sm-5 mt-3" onClick={handleNextOne}>
          Next
        </button>
      </div>
    </>
  );
}

export default DoctorObservation;
