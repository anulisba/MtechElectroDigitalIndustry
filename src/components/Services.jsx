import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import {
    FaLightbulb,
    FaSolarPanel,
    FaBolt,
    FaLeaf,
    FaWater,
    FaHome,
    FaRoad,
    FaFan,
    FaUtensils,
} from 'react-icons/fa';

const services = [
    {
        title: 'LED Bulbs & Lighting Systems',
        description: 'Energy-efficient LED bulbs and complete lighting systems for homes, offices, and commercial spaces — designed for longevity and superior luminosity.',
        icon: <FaLightbulb />,
        tag: 'Core Product',
    },
    {
        title: 'Solar Street Lights',
        description: 'Autonomous solar-powered street lighting solutions that operate off-grid, reducing electricity costs while illuminating roads, pathways, and public spaces.',
        icon: <FaRoad />,
        tag: 'Infrastructure',
    },
    {
        title: 'Solar Power Plants',
        description: 'Custom solar power plant installations for industries, institutions, and residential complexes — engineered for maximum energy yield and long-term ROI.',
        icon: <FaSolarPanel />,
        tag: 'Industrial',
    },
    {
        title: 'Solar Inverters',
        description: 'High-efficiency solar inverters that convert DC solar energy to AC power seamlessly, with smart load management and battery backup integration.',
        icon: <FaBolt />,
        tag: 'Energy Storage',
    },
    {
        title: 'Solar Water Heaters',
        description: 'Eco-friendly solar thermal water heating systems for domestic and commercial use — delivering consistent hot water while cutting energy bills significantly.',
        icon: <FaWater />,
        tag: 'Thermal',
    },
    {
        title: 'Solar Home Lighting Systems',
        description: 'Complete solar home lighting kits designed for rural and off-grid households, providing reliable, clean electricity for everyday needs.',
        icon: <FaHome />,
        tag: 'Residential',
    },
    {
        title: 'Solar Garden Lights',
        description: 'Decorative and functional solar-powered garden and pathway lights — automatic dusk-to-dawn operation with no wiring required.',
        icon: <FaLeaf />,
        tag: 'Outdoor',
    },
    {
        title: 'Solar Fans',
        description: 'DC solar fans that run directly from solar panels, ideal for ventilation in areas where grid power is unavailable or unreliable.',
        icon: <FaFan />,
        tag: 'Appliances',
    },
    {
        title: 'Solar Cooking System',
        description: 'Our flagship 2026 innovation — an advanced solar cooking system that harnesses concentrated solar energy to cook food cleanly and efficiently without fuel.',
        icon: <FaUtensils />,
        tag: 'Innovation 2026',
        highlight: true,
    },
];

const OurServices = () => {
    return (
        <section className="our-services-section">
            <div className="our-services-header-padding">
                <div className="our-services-header">
                    <div className="our-service-title">
                        <h2>Our Products &amp; Solutions</h2>
                        <div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">WHAT WE OFFER</span>
                    </div>
                </div>
            </div>

            <div className="our-services-grid-wrapper">
                <div className="our-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className={`service-card${service.highlight ? ' service-card--highlight' : ''}`}
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {service.tag && (
                                <span className={`service-tag${service.highlight ? ' service-tag--highlight' : ''}`}>
                                    {service.tag}
                                </span>
                            )}
                            <div className="service-header">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <div className="service-hover-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;