"use client";
import { Chat } from "@/components/Chat";
import { ChatIntrorightside } from "@/components/Chat-Intro-rightside";

export default function ChatPage() {
  return (
    <div className="h-auto md:h-screen padding-top-100 w-full flex md:flex-row flex-col pt-[15vh] p-6 space-x-4">
      {/* Left Side - Chat Container */}
      <Chat /> 
      {/* Right Side - Image and Text Container */}
      <div className="hidden md:flex md:w-1/2 w-full bg-white shadow-lg rounded-lg  flex-col relative">
        {/* Image Section */}
        <ChatIntrorightside />
      </div>
    </div>
  );
}