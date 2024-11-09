import React, { useState } from "react";
import "./Hero.css";
import ApplicationForm from "./ApplicationForm";
import Modal from "./modal";
import AI_img from "./AI_img.jpg"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="hero">
      <h2>Welcome to Proviz School of AI</h2>
      <p>Our mission is to empower the next generation of AI leaders.</p>
      <a href="#apply" className="apply-button" onClick={openModal}>
        Apply Now
      </a>
      {open && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ApplicationForm />
        </Modal>

      )}
      <img src={AI_img} alt="" />



    </section>
  );
};

export default Hero;
