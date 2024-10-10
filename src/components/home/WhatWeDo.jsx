'use client';
import React from 'react';

const WhatWeDo = [
    {
        title: "Business Consulting",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        title: "Business Analysis",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        title: "Project Strategy",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        title: "Project Reporting",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        title: "Security Enhanced",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        title: "Technology & Media",
        description: "The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-12 bg-green-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">What We Do</h2>
                <p className="text-lg text-center mb-8">
                    We provide the best services for your growth
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;