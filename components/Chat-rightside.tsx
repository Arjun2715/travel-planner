import React, { Component } from 'react'
type Props = {}
type State = {}
export class ChatIntrorightside extends Component<Props, State> {
  state = {}
  render() {
    return (
      <div
        className="flex-1 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
          height: "400px",
        }}
      > 
        <div className="absolute w-full h-full inset-0 flex flex-col justify-between p-6"> 
          <h1 className="text-xl md:text-7xl  mt-20 font-bold text-white text-center">
            Your Next Travel Adventure
          </h1>
          <div className="flex flex-col justify-center align-middle"> 
            <p className="text-xl text-white text-center">
              Got a vacation coming up? Start here by asking anything about it.
            </p>
            <svg
              className="self-center"
              width="400px"
              height="40px"
              viewBox="0 0 150 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M150 12H4M4 12L10 6M4 12L10 18"  
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    )
  }
} 