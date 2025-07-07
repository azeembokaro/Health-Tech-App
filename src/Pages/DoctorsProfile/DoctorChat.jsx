import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './DoctorsProfile.css'
import { useLocation } from "react-router-dom";

const DoctorChat = () => {
  const location = useLocation();
  const { interationId, patientId, doctorId } = location.state;

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/chatapi/getMessages/${interationId}`);
      setMessages(res.data);
      scrollToBottom();
    } catch (err) {
      console.error("Fetching messages failed", err);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const messageData = {
      interactionId: interationId,
      sender: "doctor",
      senderId: doctorId,
      content: inputMessage.trim()
    };

    try {
      await axios.post("http://localhost:8080/chatapi/sendMessage", messageData);
      setInputMessage("");
      fetchMessages(); // You may rely on polling too
    } catch (err) {
      console.error("Sending message failed", err);
      setError("Message could not be sent.");
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class ="chat-container container-fluid">
      <h4 className="text-center text-light py-3">Live Chat with Patient</h4>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "doctor" ? "self" : "other"}`}
          >
            <div className="msg-content doc_send ms-sm-5 text-light p-3 my-3">
              <strong>{msg.sender === "doctor" ? "You" : "Patient"}:</strong> {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area my-3 text-center doc_textmsg p-1">
        <textarea
          className="form-control"
          rows="2"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here"
        />
        <button className="btn btn-primary my-4 doc_msg" onClick={sendMessage}>Send</button>
      </div>

      <div className="text-center my-3"> 
        <button className="btn btn-info text-light doc_msg">Give Consultation</button>
      </div>

      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default DoctorChat;
