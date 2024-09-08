"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@nextui-org/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleBookTicket = () => {
    if (isSignedIn) {
      // Navigate to booking page (placeholder for now)
      console.log("Navigating to booking page");
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Placeholder for sign-in logic
    setIsSignedIn(true);
    setIsAuthOpen(false);
  };

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Placeholder for registration logic
    setIsSignedIn(true);
    setIsAuthOpen(false);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-inherit">
          TicketEase
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Museums
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Button onClick={handleBookTicket}>
            {isSignedIn ? "Book Ticket" : "Sign In to Book"}
          </Button>
        </nav>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Museums
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Button onClick={handleBookTicket}>
            {isSignedIn ? "Book Ticket" : "Sign In to Book"}
          </Button>
        </nav>
      )}

      {/* Authentication Modal */}
      {!isSignedIn && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isAuthOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center bg-black bg-opacity-90 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">
                {isRegistering ? "Register" : "Sign In"}
              </h3>
              <button
                onClick={() => setIsAuthOpen(false)}
                className="text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={isRegistering ? handleRegister : handleSignIn}
              className="p-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isRegistering && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full">
                {isRegistering ? "Register" : "Sign In"}
              </Button>
            </form>
            <div className="px-6 pb-6 text-center">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-black hover:underline"
              >
                {isRegistering
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Register"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
