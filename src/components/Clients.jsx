'use client';
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer motion

import safarilink from '../../public/images/safarilink.jpeg';
import euro from '../../public/images/euro.jpg';
import grennwich from '../../public/images/greenwich.png';
import imv from '../../public/images/imv.png';
import isra from '../../public/images/isra.png';
import sepi from '../../public/images/sepi.png';
import proxyimage from '../../public/images/proxy.png';
import taam from '../../public/images/taam.png';
import webb from '../../public/images/webb.jpg';

const images = [
  safarilink, euro, grennwich, imv, isra, sepi, proxyimage, taam, webb
];

const Clients = () => {
  return (
    <section className="bg-white py-8">
      <div className="px-4 overflow-hidden w-full"> {/* Limit the container width */}
        {/* Motion div for the scrolling effect */}
        <motion.div 
          className="flex items-center space-x-12"
          animate={{ x: [0, -1500] }} // Adjust for your total image width
          transition={{
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "linear", 
            duration: 40 // Adjust speed (seconds)
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image 
                src={src} 
                alt={`Client ${index}`} 
                width={150} // Control the width of each image to show 5-6 images at a time
                height={80} // Control the height of each image
                className="object-contain" 
              />
            </div>
          ))}
          {/* Duplicate images to make it continuous */}
          {images.map((src, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <Image 
                src={src} 
                alt={`Client ${index}`} 
                width={150} 
                height={80} 
                className="object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
