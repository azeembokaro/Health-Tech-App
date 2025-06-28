import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePatient } from "../../PatientContext";
import './DashboardMenu.css'

const MyCases = () => {
  const { patient_id } = usePatient(); // ✅ use context
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/viewmyprescriptions`,
          { params: { patientid: patient_id } } // ✅ use patient_id
        );
        setPrescriptions(response.data);
      } catch (err) {
        console.error("Error fetching prescriptions:", err);
        setError("Failed to fetch prescriptions.");
      } finally {
        setLoading(false);
      }
    };

    if (patient_id) {
      fetchPrescriptions();
    } else {
      setLoading(false);
      setError("Patient ID is required.");
    }
  }, [patient_id]);

  const formatList = (list, fields) => {
    if (!list || list.length === 0) return <em>None</em>;
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {fields.map(
              (f) =>
                item[f] && (
                  <div key={f}>
                    <strong>{f}:</strong> {item[f]}
                  </div>
                )
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mt-4 ">
      <h3 className="text-center mb-4 text-primary">My Digital Prescriptions</h3>

      {loading && <p>Loading prescriptions...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {prescriptions.length === 0 && !loading && !error && (
        <p className="text-center">No prescriptions found.</p>
      )}

      {prescriptions.map((presc, index) => (
        <div className="card mb-4 wrapper_card" key={index}>
          <div className="card-header text-center">
            <strong>Prescription ID:</strong> {presc.digitalPrescptionID}
          </div>
          <div className="card-body">
            <p>
              <strong>Patient Log:</strong> {presc.patientLog}
            </p>

            <h6>Symptoms:</h6>
            {formatList(presc.sym, [
              "conditionName",
              "from",
              "to",
              "addtionalNote",
            ])}

            <h6>Diagnostic Tests:</h6>
            {formatList(presc.tests, [
              "type",
              "subtype",
              "methodOrOrgan",
              "instructions",
              "comment",
            ])}

            <h6>Prescribed Medicines:</h6>
            {formatList(presc.prescripedMedicine, [
              "name",
              "type",
              "fromDate",
              "endDate",
              "frequency",
              "comments",
            ])}

            <h6>Treatment Plan:</h6>
            {formatList(presc.plan, ["plan", "duration", "note"])}{" "}
            {/* Update field names if needed */}

            <h6>Recommendations:</h6>
            {presc.recommendations && presc.recommendations.length > 0 ? (
              presc.recommendations.map((rec, i) => (
                <div key={i}>
                  <p>
                    <strong>Pharmacies:</strong>{" "}
                    {rec.pharamacyIds?.join(", ") || "None"}
                  </p>
                  <p>
                    <strong>Diagnostics Labs:</strong>{" "}
                    {rec.diagnosticsLabIds?.join(", ") || "None"}
                  </p>
                  <p>
                    <strong>Hospitals:</strong>{" "}
                    {rec.hospitalIds?.join(", ") || "None"}
                  </p>
                </div>
              ))
            ) : (
              <em>No recommendations</em>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCases;
