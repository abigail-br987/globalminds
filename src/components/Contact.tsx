
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
import { motion } from "framer-motion"; 

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
    <section className="sm:grid sm:grid-cols-2 w-full gap-10">
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
      >
        <header>
          <h2 className="mb-3">¡Queremos Conocerte!</h2>
          <p></p>
        </header>
        <div>
          <h3 className="text-lg font-semibold">Información de Contacto</h3>
          <ul className="list-disc pl-5">
           {/*  <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> {number}
            </li>*/}
            <li className="flex items-center">
              <MdEmail className="mr-2" /> {email}
            </li>
            <li className="flex items-center">
              <FaLocationDot className="mr-2" /> {location}
            </li>
          </ul>
        </div>
        <SocialIcons />
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className="text-gbBlack"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay:0.2}}
      >
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
          <ButtonWithArrow className="bg-gbGreen">
            Send Message
          </ButtonWithArrow>
        </div>
      </motion.form>
      {status && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{status}</motion.p>}
    </section>
  );
};

export default Contact;
