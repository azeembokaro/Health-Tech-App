import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./DoctorOneTwoOne.css";
import { usePatient } from "../../PatientContext"; 

function DoctorOneTwoOne() {
  const [query, setQuery] = useState("");
  const [conversation, setConversation] = useState([]); // array of { user_prompt, ai_prompt }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [rephrasedMessage, setRephrasedMessage] = useState(null);
  const conversationEndRef = useRef(null);

  const { patient_id } = usePatient(); // ✅ Get patient_id from context

  

  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleInteract = async (event) => {
    event.preventDefault();

    if (!query.trim()) {
      alert("Please enter a query.");
      return;
    }

    setLoading(true);
    setError(null);
    

    try {
      const endpointNumber = conversation.length + 1;
      const endpoint = `http://localhost:5001/prompt${
        endpointNumber > 1 ? endpointNumber - 1 : ""
      }`;

      const requestBody = {
        prompt: query.trim(),
        question_number: endpointNumber,
      };

      const response = await axios.post(endpoint, requestBody);
      const data = response.data;

      if (!data.generated_prompt) {
        throw new Error('Response missing "generated_prompt" field.');
      }

      const newEntry = {
        user_prompt: query.trim(),
        ai_prompt: data.generated_prompt,
      };

      setConversation((prev) => [...prev, newEntry]);
      setQuery("");

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRephrase = async () => {
    const patientInputs = conversation.map((entry) => entry.user_prompt);
    const fullText = patientInputs.join(" ");

    if (!fullText.trim()) {
      alert("No conversation to rephrase.");
      return;
    }

    try {
      const rephraseResponse = await axios.post("http://localhost:5002/rephrase", {
        message: fullText,
      });
      setRephrasedMessage(rephraseResponse.data.messg1);
      setInputDisabled(true)

    } catch (err) {
      console.error(err);
      setError("Rephrasing failed. Please try again.");
    }
  };

  const handleSubmitQuery = async () => {

    const patientInputs = conversation.map((entry) => entry.user_prompt);
    const fullText = patientInputs.join(" ");
  try {
      const requestBody = {
      patientId: patient_id,
      patientlogs: rephrasedMessage,
      assigned: false,
      assignedDoctorId: "",
      createdAt: new Date().toISOString()
    };

    const response = await axios.post("http://localhost:8080/api/submitQuery", requestBody);
    alert("Query submitted to In-House Doctor: " + response.data);
  } catch (error) {
    console.error("Error submitting query:", error);
    alert("Failed to submit query to doctor.");
  }
};

  
  return (
    <div className="container-fluid conversation">
      <div className="row">
        <div className="col-12">

          <div className="upper-conversation">
          
            <h4 className="text-center  py-3">
             Interact with AI for your medical issue and reach to exclusive Doctors           </h4>

            <div>
              {conversation.map((entry, index) => (
                <div
                  key={index}
                  className="mb-sm-3 mb-2 p-1 conversation-history"
                >

                  <div className="user p-1 d-flex ">
                    <i class="bi bi-person-fill ms-1 pt-1 icon"></i>
 <p className="py-1 ms-2">
                    <strong>You:</strong> {entry.user_prompt}
                  </p>
                  </div>

                  <div className="ai_doc p-1 my-sm-4 my-2 d-flex">
                   <i class="bi bi-prescription2 ms-2 pt-1 icon"></i>
<p className="py-1 ms-3">
                    <strong>Doctor:</strong> {entry.ai_prompt}
                  </p>
                  </div>
                 
                  
                </div>
              ))}
              <div ref={conversationEndRef} />
            </div>
          </div>

          <div className="lower-conversation text-center">
            <div className="dialog">
              <form onSubmit={handleInteract}>
                <textarea
                  className="form-control mt-3"
                  rows="3"
                  placeholder="Enter Your Health Issue"
                  value={query}
                  onChange={handleInputChange}
                  disabled={inputDisabled}
                />
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <button
                    className="btn btn-success"
                    type="submit"
                    disabled={loading || inputDisabled}
                  >
                    {loading ? "Processing..." : "Interact"}
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSubmitRephrase}
                  >
                    Submit
                  </button>
                </div>
              </form>

              {error && <div className="alert alert-danger mt-2">{error}</div>}

              {rephrasedMessage && (
                <div className="rephrased mt-4 p-3">
                  <strong>Rephrased Summary:</strong>
                  <br />
                  {rephrasedMessage}
                </div>
              )}

              {inputDisabled && (
              <div className="text-center mt-3">
              <button className="btn btn-success" onClick={handleSubmitQuery}>
                In House Doctor
              </button>
              </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DoctorOneTwoOne;
