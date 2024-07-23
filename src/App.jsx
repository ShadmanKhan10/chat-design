// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const userId = "100";
//   const [inputText, setInputText] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const [messages, setMessages] = useState([
//     {
//       senderId: "100",
//       msg: "What is up?",
//     },
//     {
//       senderId: "105",
//       msg: "Hii, I am doing fine",
//     },
//     {
//       senderId: "100",
//       msg: "This is great",
//     },
//     {
//       senderId: "100",
//       msg: "What are you up to?",
//     },
//     {
//       senderId: "105",
//       msg: "Nothing just chilling on my own",
//     },
//     {
//       senderId: "105",
//       msg: "What about you?",
//     },
//     {
//       senderId: "100",
//       msg: "Same here",
//     },
//   ]);

//   const onSendMessage = () => {
//     if (inputText.length >= 1) {
//       setMessages((prevMsg) => [
//         ...prevMsg,
//         {
//           senderId: userId,
//           msg: inputText,
//         },
//       ]);
//     }
//     setInputText("");
//   };

//   return (
//     <>
//       <div className="chats-container">
//         <div className="chat-box-container">
//           {messages.map((message, index) => (
//             <div
//               className={
//                 userId === message.senderId
//                   ? "parent-chat-right"
//                   : "parent-chat-left"
//               }
//             >
//               <div
//                 className={
//                   userId === message.senderId
//                     ? "senders-chat-left"
//                     : "senders-chat-right"
//                 }
//                 key={index}
//               >
//                 <p className="msg-text">{message.msg}</p>
//               </div>
//             </div>
//           ))}
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Type your message"
//               className="input-msg-box"
//               onChange={handleInputChange}
//               value={inputText}
//             />
//             <button className="send-msg-btn" onClick={onSendMessage}>
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const userId = "100";
  const [inputText, setInputText] = useState("");
  const chatContainerRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const [messages, setMessages] = useState([
    {
      senderId: "100",
      msg: "What is up?",
    },
    {
      senderId: "105",
      msg: "Hii, I am doing fine",
    },
    {
      senderId: "100",
      msg: "This is great",
    },
    {
      senderId: "100",
      msg: "What are you up to?",
    },
    {
      senderId: "105",
      msg: "Nothing just chilling on my own",
    },
    {
      senderId: "105",
      msg: "What about you?",
    },
    {
      senderId: "100",
      msg: "Same here",
    },
  ]);

  const onSendMessage = () => {
    if (inputText.length >= 1) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          senderId: userId,
          msg: inputText,
        },
      ]);
      setInputText("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <>
      <div className="chats-container" ref={chatContainerRef}>
        <div className="chat-box-container">
          {messages.map((message, index) => (
            <div
              className={
                userId === message.senderId
                  ? "parent-chat-right"
                  : "parent-chat-left"
              }
              key={index}
            >
              <div
                className={
                  userId === message.senderId
                    ? "senders-chat-left"
                    : "senders-chat-right"
                }
              >
                <p className="msg-text">{message.msg}</p>
              </div>
            </div>
          ))}
          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message"
              className="input-msg-box"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              value={inputText}
            />
            <button className="send-msg-btn" onClick={onSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
