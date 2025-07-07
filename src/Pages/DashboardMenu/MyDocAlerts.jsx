import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { usePatient } from "../../PatientContext";
import './DashboardMenu.css'

const MyDocAlerts = () => {
  const { patient_id } = usePatient();

  const [interaction, setInteraction] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatOpened, setChatOpened] = useState(false);

  const messagesEndRef = useRef(null);

  // Fetch interaction ONCE if patient is valid
  useEffect(() => {
    if (!patient_id) return;

    const fetchInteraction = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/chatapi/getLatestInteractionByPatient/${patient_id}`
        );
        if (res.data) setInteraction(res.data);
      } catch (err) {
        console.warn("ℹ️ No active interaction found.");
      }
    };

    fetchInteraction();
  }, [patient_id]);

  // Poll messages only after chat opened
  useEffect(() => {
    if (!chatOpened || !interaction?.interationId) return;

    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/chatapi/getMessages/${interaction.interationId}`
        );
        setMessages(res.data);
        scrollToBottom();
      } catch (err) {
        console.error("❌ Failed to fetch messages", err);
      }
    };

    fetchMessages();
    const messagePolling = setInterval(fetchMessages, 3000);
    return () => clearInterval(messagePolling);
  }, [chatOpened, interaction]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || !interaction) return;

    const messageData = {
      interactionId: interaction.interationId,
      sender: "patient",
      senderId: patient_id,
      content: inputMessage.trim(),
    };

    try {
      await axios.post("http://localhost:8080/chatapi/sendMessage", messageData);
      setInputMessage("");
    } catch (err) {
      console.error("❌ Sending message failed", err);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container pat_doc_cont">
      <h4 className="text-center text-light py-3">Live Doctor Chat</h4>
      <h6 className="text-light">The Patient ID: {patient_id}</h6>

      {!interaction && (
        <div className="alert alert-info text-center">
          Waiting for your doctor to start a conversation...
        </div>
      )}

      {interaction && !chatOpened && (
        <div className="alert alert-success text-center">
          Doctor has started a conversation. Interaction ID:{" "}
          <strong>{interaction.interationId}</strong>
          <div className="mt-3">
            <button className="btn btn-success" onClick={() => setChatOpened(true)}>
              Open Chat
            </button>
          </div>
        </div>
      )}

      {interaction && chatOpened && (
        <>
          <div className="chat-box mt-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message  ${msg.sender === "patient" ? "patient" : "doctor"}`}
              >
                <div className="msg-doc my-sm-4 ms-sm-4">
                  <strong>{msg.sender === "patient" ? "You" : "Doctor"}:</strong>{" "}
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area mt-3 text-center">
            <textarea
              className="form-control"
              rows="2"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here and press Enter..."
            />
            <button className="btn btn-primary mt-2" onClick={sendMessage}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyDocAlerts;
