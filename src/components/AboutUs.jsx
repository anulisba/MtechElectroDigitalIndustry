import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const milestones = [
    { year: '1991', text: 'Founded — manufacturing tube lights & stabilizers' },
    { year: '1996', text: 'SSI registration & statutory licenses obtained' },
    { year: '2002', text: 'Rebranded as M Tech Electro Digital Industry' },
    { year: '2004', text: 'Pioneered LED bulb manufacturing in the region' },
    { year: '2026', text: 'Launched advanced Solar Cooking System' },
];

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <section id="about-us" className="about-us-section">
            <div className="golden-line"></div>

            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Text Side */}
                <div className="about-text-content">
                    <div className="our-services-header">
                        <div className="our-service-title">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Innovating Energy Solutions<br />Since 1991
                            </motion.h2>
                            <div className="our-service-line-heading" />
                        </div>
                        <div className="about-us-line-container">
                            <div className="about-us-line" />
                            <motion.span className="about-us-subtitle" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                ABOUT US
                            </motion.span>
                        </div>
                    </div>

                    <div className="description-container">
                        <motion.p className="about-us-description" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            M Tech Electro Digital Industry began in 1991 with a vision to bring reliable electrical solutions to Kerala. What started as a manufacturer of tube lights and stabilizers has grown into a comprehensive solar and LED technology company, continuously adapting to meet the energy demands of the future.
                        </motion.p>
                        <motion.p className="about-us-description" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
                            Holding SSI registration and all statutory certifications since 1996, we have been a trusted name in LED lighting systems, solar street lights, solar power plants, inverters, and beyond — culminating in our 2026 Solar Cooking System innovation.
                        </motion.p>
                    </div>

                    <motion.div className="button-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                        <motion.button className="about-us-button" whileTap={{ scale: 0.98 }} onClick={() => navigate('/about-us')}>
                            Our Full Story
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Timeline / Milestones */}
                <div className="image-content about-timeline-side">
                    <motion.div className="timeline-wrap" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                        <div className="timeline-label">OUR JOURNEY</div>
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.year}
                                className="timeline-item"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                            >
                                <div className="timeline-year">{m.year}</div>
                                <div className="timeline-connector">
                                    <div className="tl-dot" />
                                    {i < milestones.length - 1 && <div className="tl-line" />}
                                </div>
                                <div className="timeline-text">{m.text}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="about-stats-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { value: '35+', label: 'Years in Operation' },
                            { value: '12+', label: 'Product Categories' },
                            { value: '1991', label: 'Established' },
                        ].map((s, i) => (
                            <div key={i} className="about-stat">
                                <div className="stat-val">{s.value}</div>
                                <div className="stat-lbl">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className="signature-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
                <div className="signature-line"></div>
                <div className="signature">M Tech Electro Digital Industry — Powering Tomorrow</div>
            </motion.div>
        </section>
    );
};

export default AboutUs;