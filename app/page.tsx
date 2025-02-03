import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import HomeImage1 from "@/app/Public/assets/images/home1.jpeg";
import HomeImage2 from "@/app/Public/assets/images/home2.jpeg";
export default function Home() {
  return (
    <> 
      <main className="flex justify-center items-center p-12 ">
        <div className="flex flex-col justify-start items-center space-y-4 text-center mt-20 w-[1500px]">
          <h1 className="text-[45px] font-bold ">Your Next Journey, Optimized</h1>
          <p className="text-xl">Build, personalize, and optimize your itineraries with our free AI trip planner.,<br /> Designed for vacations, workations, and everyday adventures.
          </p>
          <Link href="/chat" className="bg-blue-600 hover:bg-blue-500 rounded-full w-[300px] flex flex-row justify-center align-middle">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 21C7.5 19.4 9 17.9673 9 16.2C9 14.4327 7.65685 13 6 13C4.34315 13 3 14.4327 3 16.2C3 17.9673 4.5 19.4 6 21ZM6 21H17.5C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16H15M18 11C19.5 9.4 21 7.96731 21 6.2C21 4.43269 19.6569 3 18 3C16.3431 3 15 4.43269 15 6.2C15 7.96731 16.5 9.4 18 11ZM18 11H14.5C13.1193 11 12 12.1193 12 13.5C12 14.8807 13.1193 16 14.5 16H15.6" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p className="text-xl font-bold text-white text-center self-center">
              Create a new trip
            </p>
          </Link>
          <div className="p-5"></div>
          <div className="space-y-4">
            <h2 className="font-bold text-4xl ">
              Trip Planner AI is now part of <Link href="/chat" className="text-blue-600 hover:text-blue-500">
                Navia↗
              </Link>
            </h2>
            <p className="text-xl">Trip Planner AI, the original AI trip planner trusted by millions, is now part of Navia.</p>
          </div>
          <div className="p-14"></div>
          <div>
            <h2 className="font-bold text-4xl mb-12 ">
              Your AI-Powered Trip
            </h2>
            <div className="flex flex-col justify-start space-y-6 w-[1500px]">
              <div className="flex flex-row justify-between items-center space-x-10 ">
                <div className="flex-1 justify-center">
                  <h3 className="text-2xl font-bold">
                    The most optimal
                  </h3>
                  <p>Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.</p>
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <Image width={1000} height={1000} src={HomeImage2} alt="" className="h-[200px] w-[550px] object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-row-reverse justify-between items-center space-x-10">
                <div className="flex-1 justify-center">
                  <h3 className="text-2xl font-bold">
                    Get Inspired
                  </h3>
                  <p>Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Trip Planner AI.</p>
                </div>
                <div className="flex flex-1 justify-center align-middle">
                  <Image width={500} height={500} src={HomeImage1} alt="" className="h-[200px] w-[550px] object-cover rounded-lg" />
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center">
            <div className="p-5"></div>
            <h2 className="font-bold text-4xl ">The only tool you'll ever need!</h2>
            <p className="text-xl">Say goodbye to the stress of planning and hello to personalized recommendations, efficient itineraries, and seamless dining experiences.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl ">
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center bg-white">
                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>event-line</title> <path d="M16.17,25.86,10.81,20.5a1,1,0,0,1,1.41-1.41L16.17,23l8.64-8.64a1,1,0,0,1,1.41,1.41Z"></path><path d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"></path><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"></path><path d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"></path><rect x="13" y="6" width="10" height="2"></rect> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
                <h3 className="text-lg font-bold mt-4">Optimal Route Planning</h3>
                <p className="text-center">Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.</p>
              </div>
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center bg-white">
                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 64 64" version="1.1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_15"></g> <g id="Layer_16"></g> <g id="Layer_17"> <g> <path d="M63.5,16c-0.3-0.2-0.7-0.3-1-0.1l-20.4,7.3l-14.3-5.2c0.8-2,1.2-3.8,1.2-5.3c0-2.7-1-5.1-2.9-7c-1.9-1.9-4.4-2.9-7-2.9 c-5.5,0-9.9,4.4-9.9,9.9c0,1.9,0.7,4.2,1.9,7L0.7,23.2c-0.4,0.2-0.7,0.6-0.7,1v36c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.4,0.2,0.6,0.2 c0.1,0,0.3,0,0.4-0.1L21.9,54l19.8,7.3c0.2,0.1,0.5,0.1,0.7,0l20.8-7.4c0.4-0.2,0.7-0.6,0.7-1v-36C64,16.5,63.8,16.2,63.5,16z M19.1,4.8c2.1,0,4,0.8,5.4,2.3c0,0,0,0,0,0c1.5,1.4,2.3,3.4,2.3,5.4c0,1.4-0.5,3.3-1.5,5.5c-1.8,4-4.8,8.2-6.2,10.1 c-0.2-0.2-0.3-0.4-0.5-0.7c-1.3-1.8-3.4-4.8-4.9-7.9c-1.5-2.9-2.2-5.3-2.2-7.1C11.4,8.3,14.9,4.8,19.1,4.8z M61.8,52.1l-19.7,7 l-19.8-7.3c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0.1L2.2,58.7V25l10-3.5c0,0,0,0,0,0.1c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.5 c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.2,0.2,0.3,0.3,0.4 c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1 c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0.2,0.3,0.4,0.5,0.4,0.6c0.2,0.3,0.5,0.4,0.9,0.4 c0.3,0,0.6-0.2,0.9-0.4c0,0,0.1-0.1,0.3-0.3c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1 c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.4 c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4 c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.2-0.3,0.3-0.5 c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5 c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.2-0.3,0.2-0.5c0,0,0,0,0-0.1l14.8,5.4 c0.2,0.1,0.5,0.1,0.7,0l19.3-6.9V52.1z"></path> <path d="M52.5,42.4c0.2,0.1,0.5,0.1,0.7,0.1c0.6,0,1.2-0.2,1.7-0.5c0.7-0.5,1.2-1.2,1.4-2c0.2-0.8,0-1.7-0.4-2.4 c-0.5-0.7-1.2-1.2-2-1.4c-1.7-0.4-3.5,0.7-3.9,2.4v0c-0.2,0.8,0,1.7,0.4,2.4C51,41.7,51.7,42.2,52.5,42.4z M52.2,39 c0.1-0.6,0.7-0.9,1.2-0.8c0.3,0.1,0.5,0.2,0.6,0.5c0.1,0.2,0.2,0.5,0.1,0.8c-0.1,0.3-0.2,0.5-0.5,0.6c-0.2,0.1-0.5,0.2-0.8,0.1 c-0.3-0.1-0.5-0.2-0.6-0.5C52.2,39.5,52.2,39.3,52.2,39z"></path> <path d="M11,39.1l-0.7,0.4l-0.4-0.7c-0.3-0.5-1-0.7-1.5-0.3c-0.5,0.3-0.7,1-0.3,1.5l0.4,0.7l-0.7,0.4c-0.5,0.3-0.7,1-0.3,1.5 C7.6,43,8,43.1,8.3,43.1c0.2,0,0.4-0.1,0.6-0.2l0.7-0.4l0.4,0.7c0.2,0.3,0.6,0.5,0.9,0.5c0.2,0,0.4-0.1,0.6-0.2 c0.5-0.3,0.7-1,0.3-1.5l-0.4-0.7l0.7-0.4c0.5-0.3,0.7-1,0.3-1.5C12.2,38.9,11.5,38.8,11,39.1z"></path> <path d="M21.3,42.1c-1.3,0-3-0.2-4.1-0.5c-0.6-0.1-1.2,0.3-1.3,0.9c-0.1,0.6,0.3,1.2,0.9,1.3c1.1,0.2,2.9,0.5,4.5,0.5c0,0,0,0,0,0 c0.6,0,1.1-0.5,1.1-1.1C22.4,42.6,21.9,42.1,21.3,42.1z"></path> <path d="M29.5,38.3c-0.7,1-1.5,1.8-2.5,2.4c-0.3,0.2-0.7,0.4-1.1,0.6c-0.6,0.2-0.8,0.9-0.6,1.5c0.2,0.4,0.6,0.7,1,0.7 c0.1,0,0.3,0,0.4-0.1c0.5-0.2,0.9-0.4,1.3-0.7c1.2-0.8,2.2-1.7,3.1-2.9c0.4-0.5,0.3-1.2-0.2-1.5C30.6,37.7,29.9,37.8,29.5,38.3z"></path> <path d="M37.5,31.1c-1.1,0-1.7,0.3-2.3,0.5c-1.4,0.6-2.6,1.9-2.9,2.3c-0.4,0.5-0.3,1.2,0.1,1.6c0.2,0.2,0.5,0.3,0.7,0.3 c0.3,0,0.6-0.1,0.8-0.4c0.5-0.6,1.3-1.3,2.1-1.7c0.6-0.2,0.8-0.3,1.5-0.4c0.6,0,1.1-0.5,1.1-1.1C38.6,31.6,38.1,31.1,37.5,31.1z"></path> <path d="M41.6,32.8c-0.2,0.6,0,1.2,0.6,1.5c1.1,0.5,2.7,1.3,3.9,2.2c0.2,0.1,0.4,0.2,0.6,0.2c0.4,0,0.7-0.2,0.9-0.5 c0.3-0.5,0.2-1.2-0.3-1.5c-1.4-0.9-3-1.8-4.3-2.3C42.5,32,41.9,32.3,41.6,32.8z"></path> <path d="M19.1,15.2c1.9,0,3.4-1.5,3.4-3.4S21,8.4,19.1,8.4c-1.9,0-3.4,1.5-3.4,3.4S17.3,15.2,19.1,15.2z M19.1,10.6 c0.6,0,1.2,0.5,1.2,1.2c0,0.6-0.5,1.2-1.2,1.2c-0.6,0-1.2-0.5-1.2-1.2C18,11.2,18.5,10.6,19.1,10.6z"></path> </g> </g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Layer_26"></g> <g id="Layer_27"></g> </g></svg>
                <h3 className="text-lg font-bold mt-4">Personalize Your Adventure</h3>
                <p className="text-center">Shape your journey by freely adding, editing, or deleting activities from your itinerary.</p>
              </div>
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center bg-white">
                <svg fill="#000000" width="64px" height="64px" viewBox="0 -0.5 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M97.34,0.74c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L81.98,24.1l-0.03,0.04 c-2.29,2.77-3.86,5.33-4.56,7.67c-0.62,2.07-0.53,3.95,0.39,5.59c0.49,0.88,0.33,1.96-0.32,2.67l0,0l-8.89,9.62 c-0.87-0.95-1.56-1.72-2.02-2.22c-0.21-0.28-0.45-0.55-0.7-0.81l-0.02,0.02c-0.12-0.13-0.25-0.25-0.38-0.37l7.6-8.23 c-0.89-2.38-0.88-4.91-0.06-7.6c0.88-2.92,2.75-6.03,5.44-9.27c0.06-0.08,0.11-0.16,0.18-0.23L97.32,0.72L97.34,0.74L97.34,0.74z M57.13,55.01c-0.84-0.94-0.76-2.39,0.18-3.23c0.94-0.84,2.39-0.76,3.23,0.18c9.41,10.54,38.5,41.73,46.56,53.39 c10.63,15.05-5.83,19.79-11.29,14.31c-13.64-13.19-42.6-46.82-55.33-61.08c-4.58,1.94-9.03,2.24-13.5,0.96 c-4.81-1.37-9.52-4.58-14.3-9.51l-0.06-0.06c-3.64-3.84-6.49-7.63-8.55-11.38c-2.11-3.86-3.4-7.68-3.86-11.47 c-0.49-4.08-0.11-7.88,0.99-11.25c1.29-3.96,3.58-7.31,6.58-9.8c3.02-2.5,6.73-4.12,10.87-4.62c3.44-0.41,7.19-0.06,11.07,1.21 c5.37,1.75,11.63,6.1,16.82,11.68c3.83,4.11,7.11,8.92,9.06,13.87c2.03,5.16,2.65,10.5,1.02,15.5c-0.96,2.96-2.7,5.74-5.4,8.25 c-0.93,0.86-2.37,0.8-3.23-0.12c-0.86-0.93-0.8-2.37,0.12-3.23c2.09-1.95,3.43-4.08,4.16-6.33c1.26-3.87,0.73-8.16-0.93-12.38 c-1.74-4.42-4.69-8.74-8.15-12.45c-4.68-5.02-10.23-8.91-14.91-10.44c-3.21-1.04-6.28-1.34-9.09-1c-3.26,0.4-6.18,1.65-8.51,3.6 c-2.34,1.95-4.13,4.58-5.16,7.71c-0.89,2.73-1.2,5.87-0.79,9.26c0.39,3.2,1.5,6.47,3.32,9.81c1.91,3.43,4.53,6.9,7.9,10.45 l0.02,0.03c4.22,4.35,8.27,7.15,12.28,8.29c3.79,1.08,7.65,0.66,11.68-1.35c0.92-0.53,2.11-0.35,2.84,0.47 c12.42,13.91,42.63,48.92,56.01,61.89c5.81,2.37,9.03-0.55,6.25-5.7C100.7,102.43,63.5,62.17,57.13,55.01L57.13,55.01L57.13,55.01z M45.07,75.12l-29.16,31.55c-0.06,0.06-0.11,0.12-0.18,0.18c-4.26,4.6,3.28,11.3,7.96,6.82l28.32-30.65l3.04,3.45l-28.1,30.41l0,0 c-0.06,0.07-0.12,0.13-0.2,0.2c-1.68,1.41-3.37,2.33-5.08,2.71c-1.76,0.4-3.49,0.22-5.15-0.56c-0.28-0.11-0.54-0.25-0.77-0.46 l-4.03-3.73l0,0c-0.06-0.06-0.12-0.11-0.18-0.18c-1.56-1.8-2.3-3.72-2.1-5.75c0.19-1.92,1.21-3.79,3.14-5.59l29.44-31.86 L45.07,75.12L45.07,75.12z M75.63,57.46l1.73-1.87c0.86-0.93,2.31-0.99,3.23-0.13s0.99,2.3,0.13,3.23l-2,2.16L75.63,57.46 L75.63,57.46z M104.45,7.43c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L91.4,28.3c-0.86,0.93-2.3,0.99-3.23,0.13 c-0.93-0.86-0.99-2.3-0.13-3.23L104.45,7.43L104.45,7.43L104.45,7.43z M111.55,14c0.86-0.93,2.3-0.99,3.23-0.13 c0.93,0.86,0.99,2.3,0.13,3.23L98.51,34.86c-0.86,0.93-2.3,0.99-3.23,0.13c-0.93-0.86-0.99-2.3-0.13-3.23L111.55,14L111.55,14 L111.55,14z M118.91,20.83c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.31,0.13,3.23L103.55,44.2c-0.07,0.07-0.14,0.13-0.21,0.2 c-4.26,4.1-8.33,6.47-12.22,7.14c-4.22,0.73-8.09-0.47-11.64-3.57c-0.95-0.83-1.04-2.28-0.22-3.22c0.83-0.95,2.28-1.04,3.22-0.22 c2.45,2.14,5.07,2.98,7.84,2.49c2.98-0.51,6.26-2.48,9.84-5.93l0.02-0.02l18.71-20.25L118.91,20.83L118.91,20.83z"></path> </g> </g></svg>
                <h3 className="text-lg font-bold mt-4">Local Cuisine Recommendations</h3>
                <p className="text-center">Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.</p>
              </div>
            </div>
          </div>
          <div>
            <section className="text-center py-12 px-6 max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold">Customized <span className="text-black">Itineraries</span> for Every Travel Dream</h2>
              <p className="text-lg mt-4">Trip Planner AI is your ultimate companion for any travel scenario. Whether it's a solo adventure, a family vacation, or a group expedition, our app tailors every aspect of your journey. Experience the convenience of:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">AI-Powered</h3>
                  <p>Utilize AI for optimal travel routes. Our app ensures a seamless journey, calculating the best paths, travel times, and distances for city tours or cross-country road trips.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600">All-in-One <span className="text-blue-600">Travel Organizer</span></h3>
                  <p>Simplify travel planning with our all-in-one platform. Trip Planner AI consolidates hotel and flight details, manages bookings, and imports tips and guides. Organize <span className="font-bold">all trip details in one place.</span></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600">Collaborative <span className="text-blue-600">Group Planning</span> Made Easy</h3>
                  <p>Collaborate on itineraries with companions. Our real-time feature makes group travel planning effortless, ensuring everyone stays informed and involved in the process.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
 