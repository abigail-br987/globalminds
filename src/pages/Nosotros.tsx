import logo from "/logo/mainlogo.png";
import { FaSquareFull } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { teamMembers } from "../assets/script/content";
import { globalMindsColors } from "../assets/script/content";
import OurTeam from "./OurTeam";
import FollowUs from "./FollowUs";
function Nosotros() {

  return (
    <div className="bg-gbBlack">
      <NavBar />
      <div className="max-w-screen-xl p-10 z-10 flex flex-col items-center justify-center m-auto">
        <h1>NUESTRO EQUIPO</h1>
        <OurTeam/>
      </div>
      <FollowUs/>

      <Footer />
    </div>
  );
}

export default Nosotros;
