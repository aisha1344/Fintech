// components/Features.js
import { FaLightbulb, FaHeadset, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import { Card } from './Card';

const featuresData = [
  {
    id: 1,
    title: "USSD Integration",
    description: "With the help of USSD services, you can offer seamless access for your customers to the interactive features of your application.",
    icon: <FaLightbulb className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Airtime Purchase",
    description: "We provide mobile subscribers with instant airtime distribution services along with delivery and failure notifications.",
    icon: <FaHeadset className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Mobile Banking",
    description: "We offer you a secure and robust mobile banking application for your customers to manage their financial needs with ease.",
    icon: <FaTachometerAlt className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "WhatsApp Banking",
    description: "You will enable your customers receive direct messages from your bank on various typical banking enquiries like fixed deposits, pre-approved loans, credit cards.",
    icon: <FaShieldAlt className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-yellow-500",
  },
  {
    id: 5,
    title: "API Integration",
    description: "We offer API development and integration for existing platforms like core banking and to new channels like revenue authority platform ",
    icon: <FaTachometerAlt className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-purple-500",
  },
  {
    id: 6,
    title: "Bill Payment",
    description: "Let your customers pay bills like rent or a mortgage, cable and electricity bills, credit card payments and more directly from their bank accounts.",
    icon: <FaTachometerAlt className="text-5xl text-textPrimary" />, // React Icon
    bgColor: "bg-purple-500",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-200 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-textPrimary text-center mb-12 uppercase">
        Get All Banking Solutions You Need Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className=""
            >
              <Card feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
