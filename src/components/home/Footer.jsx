// components/Footer.js

import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
                    <div className="mb-6 md:mb-0 md:w-1/4 flex items-center">
                        {/* <Image src={logo} alt="Credio Logo" width={200} height={40} /> */}
                        <div className="ml-4">
                            <h1 className="text-3xl md:text-5xl font-bold text-textPrimary">Fin<span className='text-white'>tech</span></h1>
                            <p className="mt-2 md:mt-4 text-lg ">We specialize in helping individuals and families regain control of their financial future.</p>
                            <div className="mt-6 md:mt-8">
                                <a href="#" className="inline-block text-white text-lg font-medium bg-textPrimary px-4 py-2 rounded-md mr-4 hover:bg-gray-200">Google Play</a>
                                <a href="#" className="inline-block text-white text-lg font-medium bg-textPrimary px-4 py-2 rounded-md hover:bg-gray-200">App Store</a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-xl font-semibold mb-2">About Company</h2>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-lg hover:text-textPrimary">About Company</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Our Core Services</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Latest News Post</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Latest Projects</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Work Process</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <h2 className="text-xl font-semibold mb-2">Useful Information</h2>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-lg hover:text-textPrimary">Report Analysis</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Dispute Resolution</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Credit Assistance</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Credit Counseling</a></li>
                            <li><a href="#" className="text-lg hover:text-textPrimary">Debt Validation</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/4">
                        <h2 className="text-xl font-semibold mb-3 md:mb-6">Subscribe Newsletter</h2>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-3 rounded-md w-full mb-4 md:mb-6 outline-none"
                                required
                            />
                            <button type="submit" className="w-full bg-textPrimary text-white font-bold p-3 rounded-md hover:border-textPrimary hover:bg-white hover:text-textPrimary transition">
                                SUBSCRIBE NOW
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t  pt-6 text-center">
                    <p className="text-gray-300 text-lg">Copyright © 2024, Designed by Spondias</p>
                    <div className="mt-2">
                        <a href="#" className="text-lg mx-2 hover:underline">Terms</a>
                        <a href="#" className="text-lg mx-2 hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;