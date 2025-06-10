import React, { useContext } from "react";
import './Consultation.css';
import { ConsultationContext } from "../../ConsultationContext";

function TreatmentPlan() {
  const {
    observation,
    symptoms,
    disease,
    medicines,
    treatment,
    setTreatment
  } = useContext(ConsultationContext);

  const handleSubmitConsultation = () => {
    const finalData = {
      observation,
      symptoms,
      disease,
      medicines,
      treatment
    };

    console.log("🔍 Final Digital Consultation Data:");
    console.table(finalData);
    alert("Consultation submitted! Check the console for full data.");
  };

  return (
    <>
      <h5 className="text-left text-primary">Treatment Plan</h5>

      <div className="mt-sm-2 mt-2 text-center">
        <textarea
          className="doc_obs w-100"
          rows="6"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)} // ✅ Added this line
          placeholder="Write treatment plan here..."
        ></textarea>

        <button
          className="btn btn-info mt-sm-5 mt-3"
          onClick={handleSubmitConsultation}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default TreatmentPlan;
