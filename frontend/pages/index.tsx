import React from "react";
import LandingPage from "@/app/sections/Landing/Hero";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <NavBar />
      </header>
      <main className="">
        <LandingPage />
      </main>
      <footer className="bg-gray-100 py-8">
        <Footer />
      </footer>
    </div>
  );
}
