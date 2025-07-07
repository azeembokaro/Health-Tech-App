import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDoctor } from "../../DoctorContext";
import { useNavigate } from "react-router-dom";
import { usePrescription } from "../../PrescriptionContext";
import "./DoctorsProfile.css";

const MyWaitingQueue = () => {
  const { doctorID, type } = useDoctor();
  const queryType = type === "Employee" ? "Adhoc" : "Consistent";

  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [submitError, setSubmitError] = useState("");

  const { setDigitalPrescptionID } = usePrescription();
  const navigate = useNavigate();

  // Fetch queue on load
  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const response = await axios.get("http://localhost:8080/doctorapi/myQueue", {
          params: { doctorId: doctorID },
        });
        setQueue(response.status === 204 ? [] : response.data);
      } catch (err) {
        console.error("Error fetching queue:", err);
        setError("Failed to fetch queue.");
      } finally {
        setLoading(false);
      }
    };

    if (doctorID) {
      fetchQueue();
    } else {
      setLoading(false);
      setError("Doctor ID not found. Please login again.");
    }
  }, [doctorID]);

  const handleSelect = (query) => {
    const patientIdResolved = query.patientId || query.patient?.id || "";
    const queryIdResolved = query.queryId || query.id || "";

    const enrichedQuery = {
      ...query,
      patientId: patientIdResolved,
      queryId: queryIdResolved,
    };

    setSelectedQuery(enrichedQuery);
    setSubmitError("");
  };

  const handleGiveConsultation = async () => {
  if (!selectedQuery) {
    setSubmitError("No query selected for consultation.");
    return;
  }

  console.log("GIVE CONSULTATION →", { type, selectedQuery });

  const isAdhoc = selectedQuery.hasOwnProperty("patientlogs");
  const isConsistent = selectedQuery.hasOwnProperty("conditions");

  let payload, endpoint;

  if (isAdhoc) {
    // patientQuery branch
    payload = {
      queryId: selectedQuery.queryId,
      patientId: selectedQuery.patientId,
      patientlogs: selectedQuery.patientlogs,
      assigned: selectedQuery.assigned ?? false,
      takenCare: selectedQuery.takenCare ?? false,
    };
    endpoint = "/doctorapi/giveconsultation";
  } else if (isConsistent) {
    // patientConsistentQuery branch
    payload = {
      queryId: selectedQuery.queryId,
      patientId: selectedQuery.patientId,
      queryType: selectedQuery.queryType,
      conditions: selectedQuery.conditions,
      explanation: selectedQuery.explanation,
      uploadedPrescription: selectedQuery.uploadedPrescription,
      assigned: selectedQuery.assigned ?? false,
      takenCare: selectedQuery.takenCare ?? false,
      createdAt: selectedQuery.createdAt,
    };
    endpoint = "/doctorapi/giveconsultation1";
  } else {
    setSubmitError("Unknown query type. Cannot submit.");
    return;
  }

  try {
    const resp = await axios.post(
      `http://localhost:8080${endpoint}`,
      payload,
      { params: { doctorId: doctorID } }
    );
    setDigitalPrescptionID(resp.data.digitalPrescptionID);
    navigate("/digital_consultation/doctor_observation");
  } catch (err) {
    console.error("❌ Error giving consultation:", err);
    setSubmitError("Failed to give consultation.");
  }
};


  const handleLiveInteraction = async () => {
    if (!selectedQuery || !selectedQuery.patientId || !selectedQuery.queryId) {
      alert("No patient query selected.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/chatapi/createInteraction", {
        doctorId: doctorID,
        patientId: selectedQuery.patientId,
        patientqueryId: selectedQuery.queryId,
      });

      const interaction = response.data;

      navigate("/doctors_profile/doc_chat", {
        state: {
          doctorId: interaction.doctorId,
          patientId: interaction.patientId,
          patientqueryId: interaction.patientqueryId,
          interationId: interaction.interationId,
        },
      });
    } catch (err) {
      console.error("❌ Error creating interaction:", err);
      setSubmitError("Failed to initiate live interaction.");
    }
  };

  return (
    <div className="container my-3">
      <h4 className="text-center mb-4">My Waiting Queue</h4>

      {loading && <p className="text-center">Loading...</p>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!loading && !error && queue.length === 0 && (
        <div className="alert alert-info text-center">No patients in queue.</div>
      )}

      {!loading && queue.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Select</th>
                <th>Patient ID</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {queue.map((query, index) => {
                const patientIdResolved = query.patientId || query.patient?.id || "";
                const isSelected =
                  selectedQuery &&
                  selectedQuery.patientId === patientIdResolved &&
                  selectedQuery.createdAt === query.createdAt;

                return (
                  <tr key={index} className={isSelected ? "table-active" : ""}>
                    <td className="text-center">
                      <input
                        type="radio"
                        name="selectedQuery"
                        onChange={() => handleSelect(query)}
                        checked={isSelected}
                      />
                    </td>
                    <td>{patientIdResolved}</td>
                    <td>{new Date(query.createdAt).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selectedQuery && (
        <div className="card mt-5 bg-light">
          <div className="card-header bg-dark text-white">
            <strong>Selected Patient Query Details</strong>
          </div>
          <div className="card-body text-primary" id="doc-con-card">
            {Object.entries(selectedQuery).map(([key, value]) => {
              if (key === "createdAt") {
                return (
                  <p key={key} className="text-primary">
                    <strong>{key}:</strong> {new Date(value).toLocaleString()}
                  </p>
                );
              }
              if (Array.isArray(value)) {
                return (
                  <div key={key}>
                    <strong>{key}:</strong>
                    <ul className="ms-3">
                      {value.map((item, idx) => (
                        <li key={idx}>
                          {typeof item === "object" ? JSON.stringify(item) : item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (key === "uploadedPrescription" && value instanceof Object && value.length > 0) {
                const base64String = btoa(String.fromCharCode(...value));
                return (
                  <p key={key}>
                    <strong>{key}:</strong>{" "}
                    <a
                      href={`data:application/pdf;base64,${base64String}`}
                      download="uploaded_prescription.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  </p>
                );
              }
              return (
                <p key={key}>
                  <strong>{key}:</strong>{" "}
                  {typeof value === "object" ? JSON.stringify(value) : String(value)}
                </p>
              );
            })}

            <div className="text-center mt-3 d-flex justify-content-center gap-3">
              <button className="btn btn-primary" onClick={handleGiveConsultation}>
                Give Consultation
              </button>
              <button className="btn btn-success" onClick={handleLiveInteraction}>
                Interact Live
              </button>
            </div>
          </div>
        </div>
      )}

      {submitError && (
        <div className="alert alert-danger mt-4 text-center">{submitError}</div>
      )}
    </div>
  );
};

export default MyWaitingQueue;
