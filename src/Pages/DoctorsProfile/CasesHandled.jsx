import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDoctor } from "../../DoctorContext";
import './DoctorsProfile.css'
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
      <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
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
        <table className="table table-bordered my-4" key={idx}>
          <thead className="table-light">
            <tr>
              <th colSpan={2}>Prescription Details</th>
            </tr>
          </thead>
          <tbody className="table-light">
            <tr>
              <th>Prescription ID</th>
              <td>{presc.digitalPrescptionID}</td>
            </tr>
            <tr>
              <th>Patient ID</th>
              <td>{presc.patientId}</td>
            </tr>
            <tr>
              <th>Patient Log</th>
              <td>{presc.patientLog}</td>
            </tr>
            <tr>
              <th>Symptoms</th>
              <td>{renderList(presc.sym, ["conditionName", "from", "to", "addtionalNote"])}</td>
            </tr>
            <tr>
              <th>Diagnostic Tests</th>
              <td>{renderList(presc.tests, ["type", "subtype", "methodOrOrgan", "instructions", "comment"])}</td>
            </tr>
            <tr>
              <th>Doctor Observations</th>
              <td>{renderList(presc.observation, ["name", "severity"])}</td>
            </tr>
            <tr>
              <th>Prescribed Medicines</th>
              <td>{renderList(presc.prescripedMedicine, ["name", "type", "fromDate", "endDate", "frequency", "comments"])}</td>
            </tr>
            <tr>
              <th>Treatment Plan</th>
              <td>{renderList(presc.plan, ["plan", "duration", "note"])}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default CasesHandled;
