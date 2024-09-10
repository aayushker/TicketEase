import React from "react";
import "@/app/globals.css";
import ListMuseums from "@/app/sections/Explore/ListMuseums";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const index = () => {
  return (
    <>
      <NavBar />
      <ListMuseums />
      <Footer />
    </>
  );
};

export default index;
