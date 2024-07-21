import React, { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("sender");

  return (
    <>
      <div className="chats-container">
        {screen === "sender" ? (
          <div className="chat-box-container">
            <div className="senders-chat">
              <p className="msg-text">Hii How are you</p>
            </div>
            <div className="recievers-chat">
              <p className="msg-text">I am fine</p>
            </div>
          </div>
        ) : (
          <div className="chat-box-container">
            <div className="recievers-chat">
              <p className="msg-text">I am fine</p>
            </div>
            <div className="senders-chat">
              <p className="msg-text">Hii How are you</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
