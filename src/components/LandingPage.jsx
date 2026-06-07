import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import AboutUs from './AboutUs';
import OurServices from './Services';
import ContactLandingSection from './ContactLanding';
import Footer from './Footer';
import ProductShop from './ProjectSection';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const TICKER_ITEMS = [
    "LED Bulbs & Lighting Systems",
    "Solar Street Lights",
    "Solar Power Plants",
    "Solar Inverters",
    "Solar Water Heaters",
    "Solar Fans",
    "Solar Garden Lights",
    "Solar Home Lighting",
    "Solar Cooking Systems",
    "Inverter Batteries",
    "Emergency Lights",
    "Transformers",
];

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="splash-container">
            <div className="splash-content">

                <motion.div
                    className="logo-container"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.175, 0.885, 0.32, 1.275]
                    }}
                >
                    <div className="logo-symbol">
                        <img src={logo} alt="M Tech Logo" />
                    </div>
                </motion.div>

                <motion.h1
                    className="company-name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}
                >
                    M Tech Electro Digital Industry
                </motion.h1>

                <motion.div
                    className="tagline-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6
                    }}
                >
                    Powering Tomorrow, Today
                </motion.div>

                <motion.div
                    className="sinceline-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1
                    }}
                >
                    EST. 1991
                </motion.div>

            </div>
        </div>
    );
};
const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, subject, message } = formData;
        const whatsappMessage = `Hello, I'm interested in M Tech Electro Digital Industry products.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
        window.open(`https://wa.me/919744525892?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        setIsSubmitted(true);
        setTimeout(() => onClose(), 3000);
    };

    return (
        <motion.div className="contact-popup-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="contact-popup-box" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: 'spring', damping: 25 }}>
                <button className="contact-popup-close-btn" onClick={onClose}>✕</button>
                <h2>Interested in Our Products?</h2>
                <p>Leave your details and we'll get back to you!</p>
                <motion.div className="contact-popup-form-container" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                    {isSubmitted ? (
                        <div className="contact-popup-success-message">
                            <FaPaperPlane className="contact-popup-success-icon" />
                            <h3>Message Sent!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-popup-form" onSubmit={handleSubmit}>
                            <div className="contact-popup-form-group">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="contact-popup-form-input" />
                            </div>
                            <div className="contact-popup-form-row">
                                <div className="contact-popup-form-group">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="contact-popup-form-input" />
                                </div>
                                <div className="contact-popup-form-group">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="contact-popup-form-input" />
                                </div>
                            </div>
                            <div className="contact-popup-form-group">
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="contact-popup-form-input" />
                            </div>
                            <div className="contact-popup-form-group">
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="3" required className="contact-popup-form-textarea"></textarea>
                            </div>
                            <motion.button className="contact-popup-submit-btn" type="submit" disabled={isSubmitting} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                {isSubmitting ? <span>Sending...</span> : <><span>Send Message</span><FaPaperPlane className="contact-popup-send-icon" /></>}
                                <div className="contact-popup-btn-hover-effect"></div>
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const categories = [
    { id: 1, name: 'LED Bulbs', image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757001946/Gemini_Generated_Image_uj4tu4uj4tu4uj4t_csyfa6.png' },
    { id: 2, name: 'Solar Street Lights', image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757003820/Gemini_Generated_Image_ugvewmugvewmugve_mibcaq.png' },
    { id: 3, name: 'Solar Power Plants', image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757003619/Gemini_Generated_Image_h6c8mph6c8mph6c8_sxsxgc.png' },
    { id: 4, name: 'Solar Inverters', image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002389/Gemini_Generated_Image_dl7litdl7litdl7l_zrnnjv.png' },
    { id: 5, name: 'Solar Water Heaters', image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002394/Gemini_Generated_Image_ypfn9aypfn9aypfn_bnes9e.png' },
    { id: 6, name: 'Emergency Lights', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767752/Graphic_Design_qtk1zt.png' },
    { id: 7, name: 'Inverter Batteries', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757764346/Offset_Printing_nbpfg4.png' },
    { id: 8, name: 'Transformers', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765919/Flex_u1grrc.png' },
    { id: 9, name: 'Solar Fans', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767937/Plastic_Cover_ibwg8a.png' },
    { id: 10, name: 'Solar Garden Lights', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765271/Laser_Printing_ikvyjp.png' },
    { id: 11, name: 'Solar Home Lighting', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768334/LED_lkj4et.png' },
    { id: 12, name: 'Solar Cooking System', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767428/Tshirt_vnpcoe.jpg' },
];

const LandingPage = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [showSplash, setShowSplash] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const categoriesTrackRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const adImages = [
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1780811595/WhatsApp_Image_2026-06-07_at_11.22.26_AM_yfbsqr.jpg",
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1780811662/WhatsApp_Image_2026-06-07_at_11.22.52_AM_xxhhfu.jpg",
    ];

    useEffect(() => {
        if (!showSplash) {
            const t = setTimeout(() => setShowPopup(true), 1500);
            return () => clearTimeout(t);
        }
    }, [showSplash]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentAdIndex(p => (p + 1) % adImages.length), 5000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - categoriesTrackRef.current.offsetLeft;
        scrollLeft.current = categoriesTrackRef.current.scrollLeft;
    };
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - categoriesTrackRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        categoriesTrackRef.current.scrollLeft = scrollLeft.current - walk;
    };
    const stopDrag = () => { isDragging.current = false; };

    const scrollCatLeft = () => categoriesTrackRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
    const scrollCatRight = () => categoriesTrackRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

    const contactus = () => {
        const message = "Hello, I am interested in M Tech Electro Digital Industry products.";
        window.open(`https://wa.me/919744525892?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="app-container">
            <AnimatePresence>
                {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            </AnimatePresence>
            <AnimatePresence>
                {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
            </AnimatePresence>

            {!showSplash && (
                <>
                    <Header />

                    {/* Hero Carousel */}
                    <section className="ad-carousel-section">
                        <div className="ad-carousel-container">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentAdIndex}
                                    className="ad-carousel-item"
                                    style={{ backgroundImage: `url(${adImages[currentAdIndex]})` }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="ad-overlay" />
                                    <div className="ad-content">
                                        <div className="ad-badge">EST. 1991</div>
                                        <h2>M Tech Electro<br />Digital Industry</h2>
                                        <p>Pioneers in Solar & LED Technology — Powering a Sustainable Future</p>
                                        <button onClick={contactus} className="ad-cta-btn">Get In Touch</button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <div className="ad-indicators">
                                {adImages.map((_, index) => (
                                    <button key={index} className={`ad-indicator ${currentAdIndex === index ? 'active' : ''}`} onClick={() => setCurrentAdIndex(index)} aria-label={`Slide ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Ticker */}
                    <div className="lp-ticker-wrap">
                        <div className="lp-ticker-track">
                            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                                <span className="lp-ticker-item" key={i}>
                                    {item}<span className="lp-ticker-dot">◆</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    {/* <section className="categories-section">
                        <div className="categories-header">
                            <div className="our-service-title">
                                <h2>Our Product Categories</h2>
                                <div className="our-service-line-heading" />
                            </div>
                            <p className="categories-subtitle">Explore our full range of solar and LED solutions</p>
                        </div>

                        <div className="categories-carousel-wrapper">
                            <button className="cat-nav-btn cat-nav-left" onClick={scrollCatLeft} aria-label="Scroll left">&#8249;</button>
                            <div
                                className="categories-track"
                                ref={categoriesTrackRef}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={stopDrag}
                                onMouseLeave={stopDrag}
                            >
                                {categories.map((cat) => (
                                    <div key={cat.id} className="category-card-new">
                                        <div className="cat-image-wrap">
                                            <img src={cat.image} alt={cat.name} draggable={false} />
                                            <div className="cat-overlay">
                                                <span className="cat-explore">Explore →</span>
                                            </div>
                                        </div>
                                        <p className="cat-name">{cat.name}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="cat-nav-btn cat-nav-right" onClick={scrollCatRight} aria-label="Scroll right">&#8250;</button>
                        </div>
                    </section> */}

                    <section id="about">
                        <AboutUs />
                    </section>

                    <section id="services">
                        <OurServices />
                    </section>

                    <section id="products">
                        <ProductShop />
                    </section>

                    <section id="contact">
                        <ContactLandingSection />
                    </section>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default LandingPage;