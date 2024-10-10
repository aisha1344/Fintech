'use client';
import { FaCloud, FaLock, FaCogs, FaClipboardList } from 'react-icons/fa';
import Card from './Card';

const services = [
  {
    id: 1,
    title: 'IT Consulting',
    description: 'Expert advice to help businesses make informed decisions about technology and IT strategies.',
    icon: <FaClipboardList className="text-4xl text-textPrimary" />,
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Flexible and scalable cloud services to enhance your business operations IT strategies.',
    icon: <FaCloud className="text-4xl text-textPrimary" />,
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Robust security measures to protect your business from potential threats and data breaches.',
    icon: <FaLock className="text-4xl text-textPrimary" />,
  },
  {
    id: 4,
    title: 'Custom Software Dev',
    description: 'Tailor-made software solutions designed to meet the unique needs of your business.',
    icon: <FaCogs className="text-4xl text-textPrimary " />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">Our Services</h2>
        <p className="text-lg text-gray-100 mb-12">
          We provide comprehensive IT solutions tailored to enhance your business efficiency and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div key={service.id} className="">
              <Card service={service}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
