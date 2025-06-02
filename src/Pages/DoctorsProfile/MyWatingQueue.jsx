import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDoctor } from "../../DoctorContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DoctorsProfile.css";

const MyWaitingQueue = () => {
  const { doctorID } = useDoctor();
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [prescription, setPrescription] = useState(null);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const response = await axios.get("http://localhost:8080/doctorapi/myQueue", {
          params: { doctorId: doctorID },
        });

        if (response.status === 204) {
          setQueue([]);
        } else {
          setQueue(response.data);
        }
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
    setSelectedQuery(query);
    setPrescription(null);
    setSubmitError("");
  };

  const handleGiveConsultation = async () => {
    if (!selectedQuery) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/doctorapi/giveconsultation",
        selectedQuery,
        {
          params: { doctorId: doctorID },
        }
      );

      setPrescription(response.data);
      setSubmitError("");
    } catch (err) {
      console.error("Error giving consultation:", err);
      setSubmitError("Failed to give consultation.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Waiting Queue</h2>

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
                <th>Patient Logs</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {queue.map((query, index) => (
                <tr
                  key={index}
                  className={
                    selectedQuery &&
                    selectedQuery.patientId === query.patientId &&
                    selectedQuery.createdAt === query.createdAt
                      ? "table-active"
                      : ""
                  }
                >
                  <td className="text-center">
                    <input
                      type="radio"
                      name="selectedQuery"
                      onChange={() => handleSelect(query)}
                      checked={
                        selectedQuery &&
                        selectedQuery.patientId === query.patientId &&
                        selectedQuery.createdAt === query.createdAt
                      }
                    />
                  </td>
                  <td>{query.patientId}</td>
                  <td>{query.patientlogs}</td>
                  <td>{new Date(query.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Show selected query details */}
      {selectedQuery && (
        <div className="card mt-5">
          <div className="card-header">
            <strong>Selected Patient Query</strong>
          </div>
          <div className="card-body">
            <p><strong>Patient ID:</strong> {selectedQuery.patientId}</p>
            <p><strong>Logs:</strong> {selectedQuery.patientlogs}</p>
            <p><strong>Created At:</strong> {new Date(selectedQuery.createdAt).toLocaleString()}</p>

            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleGiveConsultation}>
                Give Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {submitError && (
        <div className="alert alert-danger mt-4 text-center">{submitError}</div>
      )}

      {prescription && (
        <div className="alert alert-success mt-4">
          <h5>Consultation Submitted</h5>
          <p><strong>Digital Prescription ID:</strong> {prescription.digitalPrescptionID}</p>
          <p><strong>Doctor ID:</strong> {prescription.doctorID}</p>
          <p><strong>Patient ID:</strong> {prescription.patientId}</p>
          <p><strong>Logs:</strong> {prescription.patientLog}</p>
        </div>
      )}
    </div>
  );
};

export default MyWaitingQueue;
