
"use client";
import React, { useState } from "react";
import axios from "axios";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { location } from "@/script/content";
import { number } from "@/script/content";
import SocialIcons from "./SocialIcons";
import { email } from "@/script/content";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setStatus("Message sent");
      } else {
        setStatus("Failed to send.");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };
  
  return (
    <section className="grid grid-cols-2 w-full gap-10">
      <div className="space-y-3">
        <header>
          <h2 className="mb-3">¡Queremos Conocerte!</h2>
          <p>
            Si eres una persona con ganas de __ o ____ fewfweewfew ewf ew fewf
            ew few few fwe fewfwfewfwfe few few fewf wefwe fwef ew¡Escríbenos!
          </p>
        </header>
        <div>
          <h3 className="text-lg font-semibold">Información de Contacto</h3>
          <ul className="list-disc pl-5">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> {number}
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" /> {email}
            </li>
            <li className="flex items-center">
              <FaLocationDot className="mr-2" /> {location}
            </li>
          </ul>
        </div>
        <SocialIcons />
      </div>
      <form onSubmit={handleSubmit} className="text-gbBlack">
        <div className="py-3 flex flex-col">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            className="p-2 w-full border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="py-3">
          <input
            type="email"
            placeholder="Correo"
            id="email"
            name="email"
            className="p-2 w-full border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="py-3 flex-grow">
          <textarea
            id="message"
            placeholder="Mensaje"
            name="message"
            className="p-2 w-full h-full border border-gray-300 rounded resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="float-right">
          <ButtonWithArrow className="bg-gbGreen ">
          Send Message

          </ButtonWithArrow>

        </div>
      </form>
      {status && <p className="">{status}</p>}
    </section>
  );
};

export default Contact;
