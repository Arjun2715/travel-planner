"use client";
import { useState, KeyboardEvent, useEffect, useRef } from "react";

// Define the message type
interface Message {
  role: string;
  content: string;
}

interface ChatProps {
  initialMessages?: Message[];
}

export const Chat: React.FC<ChatProps> = ({ initialMessages = [] }) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    // System message to instruct the bot (hidden from the UI)
    {
      role: "system",
      content: "You are a helpful and friendly travel planner AI. Your goal is to assist users in planning their trips. Ask questions to understand their preferences, such as destination, budget, travel dates, and interests. Provide personalized recommendations and tips. Keep your responses concise and engaging. ---the return answer to the user inputs should be in plain text with no formatting but set the new lines to the text to make it easy to read, end every output with a . ",
    },
    // Initial greeting messages (visible in the UI)
    { role: "system", content: "Welcome to Travel Planner AI-powered Chat!" },
    { role: "system", content: "You're here to plan a trip. Let's start! What's your name?" },
    ...initialMessages,
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false); // Track if the bot is typing
  const [partialResponse, setPartialResponse] = useState<string>(""); // Store the partially typed response

  // Ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever messages or partialResponse changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, partialResponse]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: newMessages,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const botResponse = data.choices[0].message.content;

        // Simulate typing effect for the bot's response
        setIsTyping(true);
        let typedText = "";
        for (let i = 0; i < botResponse.length; i++) {
          typedText += botResponse[i];
          setPartialResponse(typedText);
          await new Promise((resolve) => setTimeout(resolve, 10)); // Adjust typing speed (10ms per character)
        }
        setIsTyping(false);

        // Add the full response to the messages array
        setMessages([...newMessages, { role: "assistant", content: botResponse }]);
        setPartialResponse(""); // Reset partial response
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full md:h-full h-[85vh] md:w-1/2 bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-4">Travel Planner AI Chat</h1>
      <div
        ref={chatContainerRef} // Attach the ref to the chat container
        className="flex-1 overflow-y-auto border rounded-lg p-4 bg-gray-200 flex flex-col"
      >
        {messages
          .filter((msg, index) => index !== 0) // Hide only the first message (index 0)
          .map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg w-fit max-w-[75%] ${msg.role === "user"
                ? "bg-blue-500 text-white self-end text-right" // Align user messages to the right
                : "bg-gray-300 text-black self-start" // Align bot messages to the left
              }`}
            >
              {msg.content}
            </div>
          ))}
        {/* Display the partially typed response */}
        {isTyping && (
          <div className="p-2 my-2 rounded-lg w-fit max-w-[75%] bg-gray-300 text-black self-start">
            {partialResponse}
            <span className="ml-1 animate-blink">|</span> {/* Cursor effect */}
          </div>
        )}
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
  );
};
