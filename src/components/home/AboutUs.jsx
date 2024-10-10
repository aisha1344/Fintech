import Image from 'next/image';
import boss from '../../../public/images/ceo.jpg'
import bigboss from '../../../public/images/hrm.jpg'
import big from '../../../public/images/manager.jpg'

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      {/* Mission and Values Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10">
          {/* Left Side: Mission and Values */}
          <div className=" p-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Mission And <span className="text-textPrimary">Values</span>
            </h2>
            <p className="mt-4 text-gray-800 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at
              voluptatum explicabo necessitatibus cum voluptate consequatur
              sequi, dignissimos officiis laudantium.
            </p>
            <ul className= "grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 gap-4 md:gap-8">
              <li className="flex items-center">
                <div className="bg-textPrimary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  ✓
                </div>
                <span className="text-gray-800">Availability</span>
              </li>
              <li className="flex items-center">
                <div className="bg-textPrimary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  ✓
                </div>
                <span className="text-gray-800">Reliable</span>
              </li>
              <li className="flex items-center">
                <div className="bg-textPrimary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  ✓
                </div>
                <span className="text-gray-800">Responsiveness</span>
              </li>
              <li className="flex items-center">
                <div className="bg-textPrimary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  ✓
                </div>
                <span className="text-gray-800">Support</span>
              </li>
            </ul>
            <button className="mt-6 md:mt-10 px-6 py-2 bg-textPrimary text-white rounded-lg">
              Learn More
            </button>
          </div>

          {/* Right Side: Stats and Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center p-2">
              <Image
                src={big}
                alt="Doctor"
                className="rounded-lg -mt-7 mb-2"
              />
              <div className="text-center bg-textPrimary rounded-2xl w-[70%] px-3 py-4 shadow-xl">
                <p className="text-4xl font-bold text-white">80+</p>
                <p className="text-gray-900 text-lg font-medium ">Doctors Online</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <div className="text-center bg-[#44e7f3] rounded-2xl w-[70%] px-3 py-4 shadow-xl mb-4 md:mb-10">
                <p className="text-4xl font-bold text-white">25+</p>
                <p className="text-gray-900 text-lg font-medium">Years of Experience</p>
              </div>
              <Image
                src={bigboss}
                alt="Experience"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ICT Solution Section */}
<div className="mt-12 bg-[#62d5f8] p-10 rounded-tl-full rounded-br-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="">
        <Image
          src={boss}  // Replace with an appropriate image for ICT solutions
          alt="Technology consultation"
          className="rounded-xl p-5 "
        />
      </div>

      {/* Text */}
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our <span className="text-[#62d5f8]">ICT Solutions</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Empowering businesses through cutting-edge technology. We offer tailored ICT solutions that ensure seamless communication, efficient processes, and sustainable growth.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          From cloud computing to cybersecurity, we provide expert consultation and implementation services to help you stay ahead in the digital era.
        </p>
        <button className="mt-6 md:mt-10 px-6 py-2 bg-[#62d5f8] text-lg font-medium text-white rounded-lg">
          Get ICT Consultation
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
