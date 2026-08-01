import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectSection.css';
import { FaWhatsapp, FaLeaf, FaBolt } from 'react-icons/fa';

const products = [
    {
        id: 1,
        name: "LED Bulb",
        category: "LED Lighting",
        tag: "Best Seller",
        tagColor: "green",
        description:
            "High efficiency LED bulb suitable for homes, offices and commercial spaces. Available in multiple wattages with high lumen output and long service life.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578301/1000110507_1_bflb42.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785601967/file_00000000889c8208a670bc25b711abb2_ij3qbx.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785601964/1000115786_qb8t6w.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785601963/1000115774_i9xv8j.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785601963/file_00000000370c8208af0d3c99fa7aff04_gs6oz1.png"
        ],
        variants: [
            {
                name: "9W",
                whatsapp: "I am interested in the 9W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "900 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            },
            {
                name: "12W",
                whatsapp: "I am interested in the 12W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "1200 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            },
            {
                name: "18W",
                whatsapp: "I am interested in the 18W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "1800 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            },
            {
                name: "23W",
                whatsapp: "I am interested in the 23W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "2300 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            },
            {
                name: "30W",
                whatsapp: "I am interested in the 30W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "3000 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            },
            {
                name: "50W",
                whatsapp: "I am interested in the 50W LED Bulb from M Tech.",
                specs: [
                    { label: "Luminous Flux", value: "5000 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22, E27" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Input Frequency", value: "50Hz" },
                    { label: "Power Factor", value: ">0.95" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Emergency AC/DC Bulb",
        category: "LED Lighting",
        tag: "Emergency",
        tagColor: "blue",
        description:
            "Rechargeable emergency LED bulb with inbuilt battery that continues to operate during power outages.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578465/file_0000000072b07207afba50c62c1e80a2_1_sewn6t.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785599601/file_0000000028f482088e1015e23d4e79c0_tkv2ic.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785599601/file_00000000b9ec820887985bfd1c79c90c_cgdqdf.png"],
        variants: [
            {
                name: "9W",
                whatsapp: "I am interested in the 9W Emergency AC/DC Bulb from M Tech.",
                specs: [
                    { label: "Output Power", value: "9W" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Power Factor", value: "0.5" },
                    { label: "Luminous Flux", value: "900 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Holder Mounting", value: "B22" },
                    { label: "LED Life", value: "54,000 Hrs" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Lithium Battery Inverter",
        category: "Power Backup",
        tag: "Popular",
        tagColor: "green",
        description:
            "Digital lithium inverter with integrated LiFePO4 battery offering reliable power backup for homes and offices.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578542/file_00000000e18071fa929eb9a77e778aae_1_txldtf.png",],
        variants: [
            {
                name: "1100 VA",
                whatsapp: "I am interested in the 1100 VA Lithium Battery Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium" },
                    { label: "Capacity", value: "1100 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "2100 VA",
                whatsapp: "I am interested in the 2100 VA Lithium Battery Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium" },
                    { label: "Capacity", value: "2100 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "2500 VA",
                whatsapp: "I am interested in the 2500 VA Lithium Battery Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium" },
                    { label: "Capacity", value: "2500 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "3 KVA",
                whatsapp: "I am interested in the 3 KVA Lithium Battery Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium" },
                    { label: "Capacity", value: "3 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "5 KVA",
                whatsapp: "I am interested in the 5 KVA Lithium Battery Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium" },
                    { label: "Capacity", value: "5 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Solar Inverter",
        category: "Power Backup",
        tag: "Solar",
        tagColor: "green",
        description:
            "M-Digital Lithium Solar PWM Inverter with integrated 12.8V 105Ah Lithium Battery. Designed for efficient solar energy utilization with reliable power backup for residential and commercial applications.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578964/1000127107_1_l3ogr1.png",],
        variants: [
            {
                name: "1100 VA",
                whatsapp: "I am interested in the 1100VA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "1100 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" },
                    { label: "Power Output", value: "1.34 kW" }
                ]
            },
            {
                name: "2100 VA",
                whatsapp: "I am interested in the 2100VA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "2100 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "2500 VA",
                whatsapp: "I am interested in the 2500VA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "2500 VA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "3 KVA",
                whatsapp: "I am interested in the 3KVA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "3 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "5 KVA",
                whatsapp: "I am interested in the 5KVA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "5 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "6 KVA",
                whatsapp: "I am interested in the 6KVA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "6 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "8 KVA",
                whatsapp: "I am interested in the 8KVA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "8 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            },
            {
                name: "10 KVA",
                whatsapp: "I am interested in the 10KVA Solar Inverter from M Tech.",
                specs: [
                    { label: "Model", value: "M-Digital Lithium Solar PWM Inverter" },
                    { label: "Capacity", value: "10 KVA" },
                    { label: "Battery", value: "12.8V 105Ah Lithium" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Solar Water Heater",
        category: "Solar Solutions",
        tag: "Eco",
        tagColor: "green",
        description:
            "High-performance solar water heater with food-grade stainless steel tank and durable full steel body frame.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578617/1000127110_qrtxyz.png",],
        variants: [
            {
                name: "100 L",
                whatsapp: "I am interested in the 100L Solar Water Heater from M Tech.",
                specs: [
                    { label: "Capacity", value: "100 Liter" },
                    { label: "Body Frame", value: "Steel" },
                    { label: "Water Tank", value: "Food Grade Stainless Steel" }
                ]
            },
            {
                name: "150 L",
                whatsapp: "I am interested in the 150L Solar Water Heater from M Tech.",
                specs: [
                    { label: "Capacity", value: "150 Liter" },
                    { label: "Body Frame", value: "Steel" },
                    { label: "Water Tank", value: "Food Grade Stainless Steel" }
                ]
            },
            {
                name: "200 L",
                whatsapp: "I am interested in the 200L Solar Water Heater from M Tech.",
                specs: [
                    { label: "Capacity", value: "200 Liter" },
                    { label: "Body Frame", value: "Steel" },
                    { label: "Water Tank", value: "Food Grade Stainless Steel" }
                ]
            },
            {
                name: "300 L",
                whatsapp: "I am interested in the 300L Solar Water Heater from M Tech.",
                specs: [
                    { label: "Capacity", value: "300 Liter" },
                    { label: "Body Frame", value: "Steel" },
                    { label: "Water Tank", value: "Food Grade Stainless Steel" }
                ]
            }
        ]
    },

    {
        id: 5,
        name: "Solar Street Light",
        category: "Street Lighting",
        tag: "Solar",
        tagColor: "green",
        description:
            "Integrated solar street lighting system with LiFePO4 battery and high-efficiency solar panel for outdoor illumination.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578697/1000127105_1_apaemk.png",],
        variants: [
            {
                name: "15W",
                whatsapp: "I am interested in the 15W Solar Street Light from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "12W" },
                    { label: "LED Wattage", value: "15W" },
                    { label: "Luminous Flux", value: "1500 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "3.2V LiFePO4" },
                    { label: "Battery Capacity", value: "15 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "1 Night" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "40W",
                whatsapp: "I am interested in the 40W Solar Street Light from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "15W" },
                    { label: "LED Wattage", value: "40W" },
                    { label: "Luminous Flux", value: "1600 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "3.2V LiFePO4" },
                    { label: "Battery Capacity", value: "12 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "1 Night" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "60W",
                whatsapp: "I am interested in the 60W Solar Street Light from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "20W" },
                    { label: "LED Wattage", value: "60W" },
                    { label: "Luminous Flux", value: "2360 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "3.2V LiFePO4" },
                    { label: "Battery Capacity", value: "24 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "1 Night" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "150W",
                whatsapp: "I am interested in the 150W Solar Street Light from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "50W" },
                    { label: "LED Wattage", value: "150W" },
                    { label: "Luminous Flux", value: "6000 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "3.2V LiFePO4" },
                    { label: "Battery Capacity", value: "45 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "1 Night" },
                    { label: "Protection", value: "IP65" }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "LED Street Light",
        category: "Street Lighting",
        tag: "Commercial",
        tagColor: "blue",
        description:
            "High-efficiency LED street lights designed for roads, campuses, parking areas and industrial applications with IP65 protection.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782578745/1000115772_orravq.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785601854/1000118128_lpo3rb.png"
        ],
        variants: [
            {
                name: "24W",
                whatsapp: "I am interested in the 24W LED Street Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "24W ±10%" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Luminous Flux", value: "2640 LM ±10%" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "36W",
                whatsapp: "I am interested in the 36W LED Street Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "36W ±10%" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Luminous Flux", value: "3960 LM ±10%" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "50W",
                whatsapp: "I am interested in the 50W LED Street Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "50W ±10%" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Luminous Flux", value: "5500 LM ±10%" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "100W",
                whatsapp: "I am interested in the 100W LED Street Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "100W ±10%" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Luminous Flux", value: "11000 LM ±10%" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Protection", value: "IP65" }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "LED Panel Light",
        category: "LED Lighting",
        tag: "Premium",
        tagColor: "green",
        description:
            "Slim LED panel lights with uniform illumination, available in multiple wattages and color temperatures for residential and commercial interiors.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782579022/1000130067_1_zmrhmy.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785599405/file_000000005e508208bdb0d132b69ff69e_vd0gsq.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785599405/file_00000000c4a08208904548e17ae401cc_uj1xhu.png"
        ],
        variants: [
            {
                name: "8W",
                whatsapp: "I am interested in the 8W LED Panel Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "8W ±10%" },
                    { label: "Luminous Flux", value: "800 LM" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Color Temperature", value: "6500K / 5700K / 4000K / 3000K / 3IN1 / Red / Blue / Pink / Green / Amber" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "LED Life", value: "54,000 Hrs" }
                ]
            },
            {
                name: "12W",
                whatsapp: "I am interested in the 12W LED Panel Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "12W ±10%" },
                    { label: "Luminous Flux", value: "1080 LM" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Color Temperature", value: "6500K / 5700K / 4000K / 3000K / 3IN1 / Red / Blue / Pink / Green / Amber" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "LED Life", value: "54,000 Hrs" }
                ]
            },
            {
                name: "15W",
                whatsapp: "I am interested in the 15W LED Panel Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "15W ±10%" },
                    { label: "Luminous Flux", value: "1500 LM" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Color Temperature", value: "6500K / 5700K / 4000K / 3000K" },
                    { label: "Input Rated Voltage", value: "220-240V" },
                    { label: "LED Life", value: "54,000 Hrs" }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "LED Flood Light",
        category: "Flood Lighting",
        tag: "Heavy Duty",
        tagColor: "accent",
        description:
            "High-performance LED flood lights for industrial, commercial and outdoor lighting with robust IP65 protection and surface mounting.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1782579053/file_0000000022007209a1ca4b6fa0978d38_aibx8q.png",
            "https://res.cloudinary.com/dpo91btlc/image/upload/v1785599539/file_0000000020f482088fd181d475745c41_puyacj.png"
        ],
        variants: [
            {
                name: "100W",
                whatsapp: "I am interested in the 100W LED Flood Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "100W ±10%" },
                    { label: "Luminous Flux", value: "10000 LM" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Rated Voltage", value: "220-240V" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Mounting", value: "Surface Mounting" },
                    { label: "Protection", value: "IP65" }
                ]
            },
            {
                name: "200W",
                whatsapp: "I am interested in the 200W LED Flood Light from M Tech.",
                specs: [
                    { label: "Output Power", value: "200W ±10%" },
                    { label: "Luminous Flux", value: "20000 LM" },
                    { label: "Power Factor", value: "0.95" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Rated Voltage", value: "220-240V" },
                    { label: "LED Life", value: "54,000 Hrs" },
                    { label: "Mounting", value: "Surface Mounting" },
                    { label: "Protection", value: "IP65" }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Solar LED Lantern",
        category: "Solar Solutions",
        tag: "Portable",
        tagColor: "green",
        description:
            "M-Digital Solar LED Lantern is a reliable and portable solar lighting solution designed for homes and shops. It provides bright, energy-efficient lighting with up to 10 hours of battery backup powered by clean solar energy.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1785590735/1000136338_qarxj8.png",],
        variants: [
            {
                name: "Standard",
                whatsapp: "I am interested in the M-Digital Solar LED Lantern from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "5W" },
                    { label: "LED Wattage", value: "6W" },
                    { label: "Luminous Flux", value: "600 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "6V" },
                    { label: "Battery Capacity", value: "5 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "10 Hours" },
                    { label: "Warranty", value: "1 Year" }
                ]
            }
        ]
    },

    {
        id: 11,
        name: "Solar LED Power Pack",
        category: "Solar Solutions",
        tag: "Solar",
        tagColor: "green",
        description:
            "M-Digital Solar Power Pack is a reliable and portable solar lighting solution designed for homes, shops, and outdoor use. It provides bright, energy-efficient lighting with long battery backup and includes three LED bulbs powered by clean solar energy.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1785590793/1000104519_sdykzz.png",],
        variants: [
            {
                name: "Standard",
                whatsapp: "I am interested in the M-Digital Solar LED Power Pack from M Tech.",
                specs: [
                    { label: "Solar Panel", value: "20W" },
                    { label: "LED Wattage", value: "6W" },
                    { label: "Luminous Flux", value: "600 LM" },
                    { label: "Color Temperature", value: "6500K" },
                    { label: "Battery Voltage", value: "12V" },
                    { label: "Battery Capacity", value: "7 Ah" },
                    { label: "Charging Time", value: "8-10 Hours" },
                    { label: "Working Time", value: "10 Hours" },
                    { label: "Warranty", value: "1 Year" }
                ]
            }
        ]
    },

    {
        id: 12,
        name: "LED String Light",
        category: "Decorative Lighting",
        tag: "Decor",
        tagColor: "blue",
        description:
            "Flexible LED string lights designed for decorative lighting in homes, events, commercial spaces, and festive occasions. Available in multiple lengths and colors.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1785590847/file_00000000ddc88208ada76d6c0b01f4fb_jngyjk.png",],
        variants: [
            {
                name: "Standard",
                whatsapp: "I am interested in the M-Digital LED String Light from M Tech.",
                specs: [
                    { label: "Working Voltage", value: "230V AC, 50Hz" },
                    { label: "Available Length", value: "10m, 12m, Custom Length" },
                    { label: "Wire Type", value: "Flexible Copper Wire" },
                    { label: "Available Colors", value: "Blue, Green, Red, White, Warm White, Yellow, Yellow Gold, Pink, Red-Blue, Red-Green" }
                ]
            }
        ]
    },

    {
        id: 13,
        name: "BLDC Fan",
        category: "Home Appliances",
        tag: "Energy Saving",
        tagColor: "green",
        description:
            "Energy-efficient M-Digital BLDC Fans with low power consumption, high air delivery, and multiple form factors including ceiling, desk, and wall-mounted models.",
        image: ["https://res.cloudinary.com/dpo91btlc/image/upload/v1785590885/file_000000004f4c820892fd38bfb9d6200d_v7enrp.png",],
        variants: [
            {
                name: "Standard",
                whatsapp: "I am interested in the M-Digital BLDC Fan from M Tech.",
                specs: [
                    { label: "Power", value: "28W" },
                    { label: "Rated Voltage", value: "220-240V AC, 50Hz" },
                    { label: "Power Consumption", value: "28W - 35W" },
                    { label: "Sweep Size", value: "900mm / 1200mm / 1400mm" },
                    { label: "Speed Range", value: "340 - 370 RPM (5-6 Speed Steps)" },
                    { label: "Air Delivery", value: "220 - 235 CMM" },
                    { label: "Available Models", value: "Ceiling Fan / Desk Fan / Wall-Mounted Fan" }
                ]
            }
        ]
    },
];

// const categories = ['All', 'LED Lighting', 'Solar Lighting', 'Solar Systems', 'Inverters', 'Thermal', 'Outdoor', 'Innovation', 'Batteries'];

const ProductShop = () => {
    // const [activeCategory, setActiveCategory] = useState('All');
    const [quickView, setQuickView] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);

    // const filtered = activeCategory === 'All'
    //     ? products
    //     : products.filter(p => p.category === activeCategory);
    const [currentImage, setCurrentImage] = useState(0);
    const handleEnquire = (variant) => {
        window.open(
            `https://wa.me/919744525892?text=${encodeURIComponent(
                variant.whatsapp
            )}`,
            "_blank"
        );
    };
    const nextImage = () => {
        if (!quickView) return;

        setCurrentImage(prev =>
            (prev + 1) % quickView.image.length
        );
    };

    const prevImage = () => {
        if (!quickView) return;

        setCurrentImage(prev =>
            prev === 0
                ? quickView.image.length - 1
                : prev - 1
        );
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
            {/* <div className="ps-filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`ps-filter-btn${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div> */}

            {/* Product Grid */}
            <div className="ps-grid">
                <AnimatePresence mode="popLayout">
                    {products.map((product) => (
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
                            <div className="ps-image-wrap" onClick={() => {
                                setQuickView(product);
                                setSelectedVariant(product.variants[0]);
                                setCurrentImage(0);
                            }}
                            >
                                <img
                                    src={product.image?.[0] || product.image}
                                    alt={product.name}
                                />
                                <div className="ps-image-overlay">
                                    <span className="ps-quick-view">Quick View</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="ps-info">
                                <span className="ps-category">{product.category}</span>
                                <h3 className="ps-name">{product.name}</h3>

                                <p className="ps-desc">
                                    {product.description}
                                </p>

                                <div
                                    style={{
                                        marginTop: 10,
                                        marginBottom: 18,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 8
                                    }}
                                >
                                    {product.variants.map((variant) => (
                                        <span
                                            key={variant.name}
                                            style={{
                                                background: "#eef4ff",
                                                color: "#0a4db3",
                                                padding: "4px 10px",
                                                borderRadius: 30,
                                                fontSize: 12,
                                                fontWeight: 600
                                            }}
                                        >
                                            {variant.name}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className="ps-enquire-btn"
                                    onClick={() => handleEnquire(product.variants[0])}
                                >
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
                            <button className="ps-modal-close" onClick={() => {
                                setQuickView(null);
                                setSelectedVariant(null);
                                setCurrentImage(0);
                            }}>✕</button>
                            <div className="ps-modal-inner">
                                <div className="ps-modal-img">
                                    {quickView.image?.length > 1 && (
                                        <>
                                            <button
                                                className="ps-carousel-arrow ps-carousel-left"
                                                onClick={prevImage}
                                            >
                                                ❮
                                            </button>

                                            <button
                                                className="ps-carousel-arrow ps-carousel-right"
                                                onClick={nextImage}
                                            >
                                                ❯
                                            </button>
                                        </>
                                    )}
                                    <img
                                        src={quickView.image?.[currentImage]}
                                        alt={quickView.name}
                                    />
                                    {quickView.image?.length > 1 && (
                                        <div className="ps-image-dots">

                                            {quickView.image.map((_, index) => (

                                                <span
                                                    key={index}
                                                    className={
                                                        currentImage === index
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() => setCurrentImage(index)}
                                                />

                                            ))}

                                        </div>
                                    )}
                                </div>
                                <div className="ps-modal-details">
                                    <span className="ps-category">{quickView.category}</span>
                                    <h2 className="ps-modal-name">{quickView.name}</h2>
                                    {quickView.tag && (
                                        <span className={`ps-tag ps-tag--${quickView.tagColor}`} style={{ marginBottom: 12, display: 'inline-block' }}>{quickView.tag}</span>
                                    )}
                                    <p className="ps-modal-desc">
                                        {quickView.description}
                                    </p>

                                    <div className="variant-section">

                                        <h4
                                            style={{
                                                marginTop: 20,
                                                marginBottom: 12
                                            }}
                                        >
                                            Available Variants
                                        </h4>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 10,
                                                flexWrap: "wrap"
                                            }}
                                        >
                                            {quickView.variants.map((variant) => (

                                                <button
                                                    key={variant.name}
                                                    onClick={() => setSelectedVariant(variant)}
                                                    style={{
                                                        padding: "8px 16px",
                                                        borderRadius: 30,
                                                        cursor: "pointer",
                                                        border:
                                                            selectedVariant?.name === variant.name
                                                                ? "2px solid #0a4db3"
                                                                : "1px solid #ddd",

                                                        background:
                                                            selectedVariant?.name === variant.name
                                                                ? "#0a4db3"
                                                                : "#fff",

                                                        color:
                                                            selectedVariant?.name === variant.name
                                                                ? "#fff"
                                                                : "#333",

                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {variant.name}
                                                </button>

                                            ))}
                                        </div>

                                    </div>

                                    <div className="ps-specs">

                                        <div className="ps-specs-title">
                                            <FaBolt style={{ marginRight: 8 }} />
                                            Specifications
                                        </div>

                                        <div
                                            style={{
                                                marginTop: 20,
                                                border: "1px solid #eee",
                                                borderRadius: 12,
                                                overflow: "hidden"
                                            }}
                                        >
                                            {selectedVariant?.specs.map((spec, index) => (

                                                <div
                                                    key={index}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        padding: "14px 18px",
                                                        background:
                                                            index % 2 === 0
                                                                ? "#fafafa"
                                                                : "#ffffff",
                                                        borderBottom:
                                                            index !== selectedVariant.specs.length - 1
                                                                ? "1px solid #eee"
                                                                : "none"
                                                    }}
                                                >

                                                    <div
                                                        style={{
                                                            fontWeight: 600,
                                                            color: "#555"
                                                        }}
                                                    >
                                                        {spec.label}
                                                    </div>

                                                    <div
                                                        style={{
                                                            color: "#111",
                                                            fontWeight: 500,
                                                            textAlign: "right",
                                                            maxWidth: "55%"
                                                        }}
                                                    >
                                                        {spec.value}
                                                    </div>

                                                </div>

                                            ))}
                                        </div>

                                    </div>

                                    <button
                                        className="ps-enquire-btn ps-enquire-btn--lg"
                                        onClick={() => handleEnquire(selectedVariant)}
                                    >                                        <FaWhatsapp className="ps-wa-icon" />
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