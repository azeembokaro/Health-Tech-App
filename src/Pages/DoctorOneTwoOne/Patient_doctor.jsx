// Updated PatientDoctorChat.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './DoctorOneTwoOne.css';

const PatientDoctorChat = ({ patientId }) => {
  const [interaction, setInteraction] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [alertShown, setAlertShown] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!patientId) return; // Don't poll if no patientId

    const interval = setInterval(() => {
      checkForInteraction();
    }, 3000);
    return () => clearInterval(interval);
  }, [patientId]);

  const checkForInteraction = async () => {
    if (!patientId) return;

    try {
      const response = await axios.get(
        `http://localhost:8080/chatapi/getLatestInteractionByPatient/${patientId}`
      );
      if (
        response.data &&
        (!interaction || response.data.interationId !== interaction.interationId)
      ) {
        setInteraction(response.data);
        setAlertShown(false);
      }
    } catch (err) {
      console.warn("ℹ️ No interaction yet or failed to fetch.");
    }
  };

  useEffect(() => {
    if (interaction) {
      fetchMessages();
      const msgInterval = setInterval(fetchMessages, 3000);
      return () => clearInterval(msgInterval);
    }
  }, [interaction]);

  const fetchMessages = async () => {
    if (!interaction?.interationId) return;

    try {
      const res = await axios.get(
        `http://localhost:8080/chatapi/getMessages/${interaction.interationId}`
      );
      setMessages(res.data);
      scrollToBottom();
    } catch (err) {
      console.error("❌ Fetching messages failed", err);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !interaction) return;

    const messageData = {
      interactionId: interaction.interationId,
      sender: "patient",
      senderId: patientId,
      content: inputMessage.trim()
    };

    try {
      await axios.post("http://localhost:8080/chatapi/sendMessage", messageData);
      setInputMessage("");
      fetchMessages();
    } catch (err) {
      console.error("❌ Sending message failed", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-container pat_doc_cont">
      <h4 className="text-center text-light py-3">Live Chat with Doctor</h4>

      {!interaction && (
        <div className="alert alert-info text-center">Waiting for doctor to initiate chat...</div>
      )}

      {interaction && !alertShown && (
        <div className="alert alert-success text-center" role="alert">
          Dr. {interaction.doctorId} has initiated a conversation!
        </div>
      )}

      {interaction && (
        <>
          <div className="chat-boxn my-4 ms-sm-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "patient" ? "patient" : "doctor"}`}
              >
                <div className="msg-content text-end me-sm-5 p-3 text-light ">
                  <strong>{msg.sender === "patient" ? "You" : "Doctor"}:</strong> {msg.content}
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
            <button className="btn btn-primary my-sm-4 my-2" onClick={sendMessage}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PatientDoctorChat;