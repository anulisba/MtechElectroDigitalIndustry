// components/ContactLandingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import './ContactLanding.css';

const ContactLandingSection = () => {
    const handleContact = () => {
        const message = "Hello, I am interested in M Tech Electro Digital Industry products. I would like to know more.";
        window.open(`https://wa.me/919744525892?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="contact-landing-section">
            <div className="contact-landing-overlay"></div>

            <div className="contact-landing-container">
                <motion.div
                    className="contact-landing-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="contact-landing-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span>POWER YOUR FUTURE WITH CLEAN ENERGY</span>
                    </motion.div>

                    <motion.h2
                        className="contact-landing-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        From Solar Systems to LED Lighting,<br />We Engineer Solutions That Last
                    </motion.h2>

                    <motion.p
                        className="contact-landing-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Whether it's a solar power plant, LED street lights, or a home energy system — our team of experts is ready to deliver reliable, eco-friendly technology tailored to your needs.
                    </motion.p>

                    <motion.div
                        className="contact-landing-button"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <button className="contact-landing-btn" onClick={handleContact}>
                            <span>Talk to Us on WhatsApp</span>
                            <FaWhatsapp className="contact-landing-icon" />
                            <div className="contact-landing-btn-hover"></div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="contact-landing-shapes">
                <div className="contact-landing-shape-1"></div>
                <div className="contact-landing-shape-2"></div>
                <div className="contact-landing-shape-3"></div>
            </div>
        </section>
    );
};

export default ContactLandingSection;