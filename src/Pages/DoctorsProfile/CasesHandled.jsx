// src/Pages/Doctor/CasesHandled.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDoctor } from "../../DoctorContext";


const CasesHandled = () => {
  const { doctorID } = useDoctor();
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/doctorapi/myprescriptions",
          { params: { doctorID } }
        );
        setPrescriptions(response.data);
      } catch (err) {
        console.error("Error fetching prescriptions:", err);
        setError("Failed to load prescriptions.");
      } finally {
        setLoading(false);
      }
    };

    if (doctorID) {
      fetchPrescriptions();
    } else {
      setLoading(false);
      setError("Doctor ID is missing.");
    }
  }, [doctorID]);

  const renderList = (items, fields) => {
    if (!items || items.length === 0) return <em>None</em>;
    return (
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {fields.map(
              (field) =>
                item[field] && (
                  <div key={field}>
                    <strong>{field}:</strong> {item[field]}
                  </div>
                )
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="docpresc-container">
     

      {loading && <p>Loading prescriptions...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && prescriptions.length === 0 && <p>No prescriptions found.</p>}

      {prescriptions.map((presc, idx) => (
        <div className="docpresc-card" key={idx}>
          <div className="docpresc-header">
            <strong>Prescription ID:</strong> {presc.digitalPrescptionID}
          </div>
          <div className="docpresc-body">
            <p>
              <strong>Patient ID:</strong> {presc.patientId}
            </p>
            <p>
              <strong>Patient Log:</strong> {presc.patientLog}
            </p>

            <h6>Symptoms:</h6>
            {renderList(presc.sym, ["conditionName", "from", "to", "addtionalNote"])}

            <h6>Diagnostic Tests:</h6>
            {renderList(presc.tests, ["type", "subtype", "methodOrOrgan", "instructions", "comment"])}

            <h6>Doctor Observations:</h6>
            {renderList(presc.observation, ["name", "severity"])}

            <h6>Prescribed Medicines:</h6>
            {renderList(presc.prescripedMedicine, ["name", "type", "fromDate", "endDate", "frequency", "comments"])}

            <h6>Treatment Plan:</h6>
            {renderList(presc.plan, ["plan", "duration", "note"])}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CasesHandled;
