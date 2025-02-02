"use client";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to Travel Planner AI-powered Chat!" },
    { role: "system", content: "You're here to plan a trip. Let's start! What's your name?" },
  ]);
  const [mapUrl, setMapUrl] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: newMessages
        })
      });
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setMessages([...newMessages, data.choices[0].message]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row p-4 pt-16 justify-end space-y-4 md:space-y-0 md:space-x-4 items-center md:p-20 pb-10">
      <div className="w-full md:w-1/2 max-w-2xl md:mr-4 flex flex-col flex-1 bg-white shadow-lg glass mt-20 rounded-lg p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Travel Planner AI Chat</h1>
        <div className="flex-1 h-[50vh] md:h-[70vh] overflow-y-auto border rounded-lg p-4 bg-gray-200">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg max-w-[75%] ${
                msg.role === "user"
                  ? "bg-blue-500 text-white  self-end flex flex-col"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
      {/* <div className="hidden md:flex w-full md:w-1/2 max-w-2xl h-full flex-col flex-1 bg-white shadow-lg glass mt-20 rounded-lg p-4">
     
      </div> */}
    </div>
  );
}