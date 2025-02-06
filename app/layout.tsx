// import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Hero from "@/components/hero";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen flex flex-col items-center">
            <div className="flex w-full flex-col items-start">
              <nav className="w-full flex justify-center fixed top-0 glass dark:darkglass border-b border-b-foreground/10 h-16 z-50">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link className="font-semibold text-xl" href={"/"}>Travel Planner</Link>
                    <div className="flex items-center gap-2">
                      {/* <DeployButton /> */}
                    </div>
                  </div>
                  <div className="flex flex-row space-x-4 justify-between">
                    {/* <ThemeSwitcher /> */}

                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>

                </div>
              </nav><Hero />
              <div className="flex flex-col justify-center items-center  w-full pt-20 glass">

                {children}
              </div>
              <footer className="glass w-full">
                <div className="w-[1500px] py-10 mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold">Trip Planner AI</span>
                    </div>
                    <p className="text-gray-500 mt-1">
                      Turn your next trip into a hassle-free experience with Trip Planner AI.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6 md:mt-0">
                    <div>
                      <h3 className="font-semibold">Legal</h3>
                      <ul className="text-gray-500 space-y-1">
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">Support</h3>
                      <ul className="text-gray-500 space-y-1">
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">Itineraries</h3>
                      <ul className="text-gray-500 space-y-1">
                        <li><a href="#">Community Trips</a></li>
                        <li><a href="#">Find Destinations</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center text-gray-500 text-sm mt-6">
                  © 2023 Trip Planner AI. All rights reserved
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
