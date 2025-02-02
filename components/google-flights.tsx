"use client"
import React from 'react'
import { useState, useEffect } from "react";

export default function googleflights() {
     const [origin, setOrigin] = useState("");
      const [destination, setDestination] = useState("");
      const [departureDate, setDepartureDate] = useState("");
      const [returnDate, setReturnDate] = useState("");
      const [flights, setFlights] = useState([]);
      const [loading, setLoading] = useState(false);
      const [mapUrl, setMapUrl] = useState("");
      const [input, setInput] = useState("");

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
     
  return (
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
  )
}
