// components/FAQSection.js
'use client';
import React, { useState } from 'react';

const faqs = [
    {
        question: "What services does your finance company offer?",
        answer: "Catalyze growth, forge strategic partnerships, and capitalize with our dynamic business development process. The wise man therefore always doing holds these matters to this business principles sun offer.",
    },
    {
        question: "Do you offer investment advisory services?",
        answer: "Yes, we provide tailored investment advisory services to help you navigate complex financial landscapes.",
    },
    {
        question: "Do you support international payments?",
        answer: "Absolutely! We support a variety of international payment solutions to facilitate your global transactions.",
    },
    {
        question: "How secure are your payment solutions?",
        answer: "Our payment solutions are highly secure, utilizing the latest encryption technologies to protect your financial data.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
            <p className="text-xl text-center font-medium  mb-4 text-gray-600">Credit Repair Questions</p>
                <h2 className="text-3xl font-bold text-center mb-8 text-textPrimary">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;