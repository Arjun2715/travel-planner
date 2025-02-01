import Link from "next/link";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <main className="h-[90vh] p-2 md:m-6 flex justify-center items-center">
        {/* Hero Section */}
        <div className="flex justify-center align-middle h-[60vh] w-full">
          <div className="glass dark:darkglass h-full  md:h-[40vh] w-full md:w-1/2 rounded-lg mt-10 md:mt-20 mx-2  flex flex-col justify-center text-center p-6 md:p-10 shadow-xl backdrop-blur-md bg-white/10 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 drop-shadow-lg">
              Welcome to <span className="text-blue-500">Travel Planner</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-6 md:mb-8">
              Plan your trips, explore destinations, and create unforgettable memories.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/sign-in"
                className="bg-transparent border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-xl font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 shadow-md transition duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-600 hover:border-blue-600 shadow-md transition duration-300 border-2 border-blue-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
