"use client";
import React from "react";
import { useState} from "react";
import { Button } from "@/app/components/ui/button";
import { Menu, X} from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          MuseumTix
        </Link>
        <nav className="hidden md:flex space-x-8">
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
        </nav>
      )}
    </>
  );
};

export default NavBar;
