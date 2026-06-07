import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectSection.css';
import { FaWhatsapp, FaLeaf, FaBolt } from 'react-icons/fa';

const products = [
    {
        id: 1,
        name: 'LED Bulb — 9W',
        category: 'LED Lighting',
        tag: 'Bestseller',
        tagColor: 'green',
        description: 'Energy-saving LED bulb with 900 lumens output. Lasts up to 25,000 hours. Ideal for home and office use.',
        specs: ['9W | 900 Lumens', 'E27 Base', '6500K Cool White', '25,000 hr lifespan'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the 9W LED Bulb from M Tech.',
    },
    {
        id: 2,
        name: 'Solar Street Light — 40W',
        category: 'Solar Lighting',
        tag: 'Popular',
        tagColor: 'blue',
        description: 'All-in-one solar street light with lithium battery, motion sensor, and 3-day backup for uninterrupted lighting.',
        specs: ['40W Solar Panel', 'Motion Sensor', '3-Day Battery Backup', 'IP65 Waterproof'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the 40W Solar Street Light from M Tech.',
    },
    {
        id: 3,
        name: 'Solar Home Lighting Kit',
        category: 'Solar Systems',
        tag: 'Off-Grid',
        tagColor: 'green',
        description: 'Complete solar home lighting system with panel, battery, charge controller, and 4 LED lights. Perfect for rural homes.',
        specs: ['20W Solar Panel', '12V / 7Ah Battery', '4 LED Lights', 'USB Charging Port'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the Solar Home Lighting Kit from M Tech.',
    },
    {
        id: 4,
        name: 'Solar Inverter — 1kVA',
        category: 'Inverters',
        tag: 'New',
        tagColor: 'accent',
        description: 'Hybrid solar inverter with grid tie capability, pure sine wave output, and smart load management for homes.',
        specs: ['1kVA / 800W', 'Pure Sine Wave', 'Grid Tie Ready', 'LCD Display'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the 1kVA Solar Inverter from M Tech.',
    },
    {
        id: 5,
        name: 'Solar Water Heater — 100L',
        category: 'Thermal',
        tag: null,
        tagColor: null,
        description: 'Evacuated tube solar water heater system. Delivers consistent hot water even on cloudy days using thermal insulation.',
        specs: ['100 Litre Capacity', 'Evacuated Tube', 'Anti-Corrosion Tank', '15-Year Frame Life'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the 100L Solar Water Heater from M Tech.',
    },
    {
        id: 6,
        name: 'Solar Garden Light',
        category: 'Outdoor',
        tag: null,
        tagColor: null,
        description: 'Decorative solar-powered pathway light with dusk-to-dawn auto operation. No wiring, no electricity cost.',
        specs: ['Auto Dusk-Dawn', 'Stainless Steel', '8hr Runtime', 'IP44 Weather Proof'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the Solar Garden Light from M Tech.',
    },
    {
        id: 7,
        name: 'Solar Cooking System',
        category: 'Innovation',
        tag: '2026 Launch',
        tagColor: 'highlight',
        description: 'Our flagship innovation — a concentrated solar cooking system that cooks food with zero fuel using direct solar energy.',
        specs: ['Zero Fuel Cost', 'Concentrated Solar', 'Portable Design', 'Patented Tech 2026'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am very interested in the Solar Cooking System from M Tech. Please share more details.',
    },
    {
        id: 8,
        name: 'Inverter Battery — 150Ah',
        category: 'Batteries',
        tag: null,
        tagColor: null,
        description: 'Tubular inverter battery with deep-cycle technology for long backup hours and exceptional durability over years.',
        specs: ['150Ah Capacity', 'Tubular Deep Cycle', 'Low Maintenance', '5-Year Warranty'],
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1780812269/file_00000000d4dc71faace7d497f98d01dd_fdjy5f.png',
        whatsapp: 'I am interested in the 150Ah Inverter Battery from M Tech.',
    },
];

const categories = ['All', 'LED Lighting', 'Solar Lighting', 'Solar Systems', 'Inverters', 'Thermal', 'Outdoor', 'Innovation', 'Batteries'];

const ProductShop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [quickView, setQuickView] = useState(null);

    const filtered = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    const handleEnquire = (product) => {
        window.open(`https://wa.me/919744525892?text=${encodeURIComponent(product.whatsapp)}`, '_blank');
    };

    return (
        <section className="product-shop-section">
            {/* Header */}
            <div className="ps-header-wrap">
                <div className="our-service-title">
                    <h2>Featured Products</h2>
                    <div className="our-service-line-heading" />
                </div>
                <div className="about-us-line-container">
                    <div className="about-us-line" />
                    <span className="about-us-subtitle">SHOP BY PRODUCT</span>
                </div>
            </div>

            {/* Category Filter */}
            <div className="ps-filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`ps-filter-btn${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="ps-grid">
                <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                        <motion.div
                            key={product.id}
                            className="ps-card"
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Tag */}
                            {product.tag && (
                                <span className={`ps-tag ps-tag--${product.tagColor}`}>{product.tag}</span>
                            )}

                            {/* Image */}
                            <div className="ps-image-wrap" onClick={() => setQuickView(product)}>
                                <img src={product.image} alt={product.name} draggable={false} />
                                <div className="ps-image-overlay">
                                    <span className="ps-quick-view">Quick View</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="ps-info">
                                <span className="ps-category">{product.category}</span>
                                <h3 className="ps-name">{product.name}</h3>
                                <p className="ps-desc">{product.description}</p>

                                <button className="ps-enquire-btn" onClick={() => handleEnquire(product)}>
                                    <FaWhatsapp className="ps-wa-icon" />
                                    Enquire
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {quickView && (
                    <motion.div
                        className="ps-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setQuickView(null)}
                    >
                        <motion.div
                            className="ps-modal"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', damping: 26 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="ps-modal-close" onClick={() => setQuickView(null)}>✕</button>
                            <div className="ps-modal-inner">
                                <div className="ps-modal-img">
                                    <img src={quickView.image} alt={quickView.name} />
                                </div>
                                <div className="ps-modal-details">
                                    <span className="ps-category">{quickView.category}</span>
                                    <h2 className="ps-modal-name">{quickView.name}</h2>
                                    {quickView.tag && (
                                        <span className={`ps-tag ps-tag--${quickView.tagColor}`} style={{ marginBottom: 12, display: 'inline-block' }}>{quickView.tag}</span>
                                    )}
                                    <p className="ps-modal-desc">{quickView.description}</p>

                                    <div className="ps-specs">
                                        <div className="ps-specs-title">
                                            <FaBolt style={{ marginRight: 6 }} />
                                            Specifications
                                        </div>
                                        <ul className="ps-specs-list">
                                            {quickView.specs.map((s, i) => (
                                                <li key={i} className="ps-spec-item">
                                                    <FaLeaf className="ps-spec-icon" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="ps-enquire-btn ps-enquire-btn--lg" onClick={() => handleEnquire(quickView)}>
                                        <FaWhatsapp className="ps-wa-icon" />
                                        Enquire on WhatsApp
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProductShop;