"use client";
import { useState, useEffect } from "react";

export default function FlightsSearch() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mapUrl, setMapUrl] = useState("");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to DeepSeek Chat!" },
    { role: "user", content: "What's your name?" },
    { role: "system", content: "Nice to meet you, USER_NAME!" },
    { role: "user", content: "Where are we starting from?" },
    { role: "system", content: "Great question! Let's say you!" },
  ]);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/flights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin,
          destination,
          departureDate,
          returnDate,
        }),
      });
      const data = await response.json();
      setFlights(data.flights || []);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
    setLoading(false);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // Here you can add logic to handle the AI response
    }
  };

  useEffect(() => {
    if (destination) {
      setMapUrl(
        `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(destination)}`
      );
    }
  }, [destination]);

  return (
    <>
      {" "}
      <div className="p-20 h-screen flex justify-center">
         <div className="flex flex-row justify-end align-middle h-auto w-full space-x-4 ">
        <div className="flex flex-1 flex-col justify-end align-bottom  mt-20  glass w-auto shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">DeepSeek Chat</h1>
          <div className="h-96 overflow-y-auto border p-4 rounded-lg mb-4 bg-gray-200">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-auto glass rounded-lg">
          <div className="w-full p-6">
            <h1 className="text-xl font-bold mb-4">Search Flights</h1>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Origin (e.g., JFK)"
                className="p-2 border"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
              <input
                type="text"
                placeholder="Destination (e.g., LAX)"
                className="p-2 border"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <button
                onClick={fetchFlights}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Search
              </button>
            </div>
            {loading && <p>Loading...</p>}
            <ul className="mt-4">
              {flights.map((flight, index) => (
                <li key={index} className="p-2 border-b">
                  {flight}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full p-4">
            {destination && (
              <iframe
                title="Google Maps"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={mapUrl}
              ></iframe>
            )}
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
}
