import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePatient } from "../../PatientContext";
import './DashboardMenu.css'

const MyCases = () => {
  const { patient_id } = usePatient();
  const [prescriptions, setPrescriptions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!patient_id) return;
    axios
      .get("http://localhost:8080/api/viewmyprescriptions", {
        params: { patientid: patient_id },
      })
      .then((res) => setPrescriptions(res.data))
      .catch((err) => console.error("Error fetching prescriptions:", err));
  }, [patient_id]);

  const handleClick = (prescription) => {
    setSelected(prescription);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary text-center mb-4">My Digital Prescriptions</h3>

      <div className="row">
        {prescriptions.map((p, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div
              className={`card shadow p-3 text-center ${selected?.digitalPrescptionID === p.digitalPrescptionID ? 'border-primary border-2' : ''}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(p)}
            >
              <h5>Prescription ID</h5>
              <p className="fw-bold">{p.digitalPrescptionID}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-5">
          <h4 className="text-center text-success mb-4">Prescription Details</h4>
          <table className="prescription-table">
            <tbody>
              <tr>
                <th>Patient Log</th>
                <td>{selected.patientLog}</td>
              </tr>
              <tr>
                <th>Symptoms</th>
                <td>
                  {selected.sym ? (
                    selected.sym.map((s, i) => (
                      <div key={i}>
                        {s.conditionName} ({s.from} to {s.to})
                      </div>
                    ))
                  ) : (
                    <em>None</em>
                  )}
                </td>
              </tr>
              <tr>
                <th>Diagnostic Tests</th>
                <td>
                  {selected.tests ? (
                    selected.tests.map((t, i) => (
                      <div key={i}>
                        {t.type} - {t.subtype} {t.methodOrOrgan && `(${t.methodOrOrgan})`}
                      </div>
                    ))
                  ) : (
                    <em>None</em>
                  )}
                </td>
              </tr>
              <tr>
                <th>Medicines</th>
                <td>
                  {selected.prescripedMedicine ? (
                    selected.prescripedMedicine.map((m, i) => (
                      <div key={i}>
                        {m.name} ({m.frequency}, {m.fromDate} to {m.endDate})
                      </div>
                    ))
                  ) : (
                    <em>None</em>
                  )}
                </td>
              </tr>
              <tr>
                <th>Recommendations</th>
                <td>
                  {selected.recommendations ? (
                    selected.recommendations.map((r, i) => (
                      <div key={i}>
                        <p><strong>Pharmacies:</strong> {r.pharamacyIds?.join(", ") || "None"}</p>
                        <p><strong>Labs:</strong> {r.diagnosticsLabIds?.join(", ") || "None"}</p>
                        <p><strong>Hospitals:</strong> {r.hospitalIds?.join(", ") || "None"}</p>
                      </div>
                    ))
                  ) : (
                    <em>None</em>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCases;
