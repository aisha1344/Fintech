import Image from "next/image";
import ceo from '../../../public/images/ceo.jpg'
const WhoWeAre = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section: Text Content */}
          <div>
            <p className="text-textPrimary font-semibold text-sm uppercase">Who We Are</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
              Empowering Your Finance with Technology You Can Trust
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in helping individuals and families regain control of their financial future by repairing and improving their credit scores. Our team of experts is dedicated to analyzing your credit report and implementing proven strategies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our finance specialization helps individuals regain control of their future by offering tailored advice and industry knowledge. We focus on improving credit reports, offering secure, data-driven solutions.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✔️</span>
                <p className="text-gray-700">Innovative Solutions</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✔️</span>
                <p className="text-gray-700">User-Friendly Interface</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✔️</span>
                <p className="text-gray-700">Secure Transactions</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✔️</span>
                <p className="text-gray-700">Real-Time Analytics</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-textPrimary hover:bg-white hover:text-textPrimary hover:border-2 text-lg text-white py-3 px-8 rounded-full">
                Discover Our Story
              </button>
              <div className="flex items-center">
                <Image
                  src={ceo}
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">A.K. Talukder Haque</p>
                  <p className="text-sm text-gray-500">CEO & Founder of Credio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Consultation Form */}
          <div className="bg-gradient-to-br from-textPrimary to-black rounded-lg p-8 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Free Consultation</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white text-white px-4 py-3 rounded-lg placeholder-gray-300 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white text-black px-4 py-3 rounded-lg placeholder-gray-300 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white text-black px-4 py-3 rounded-lg placeholder-gray-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-white text-black px-4 py-3 rounded-lg placeholder-gray-300 outline-none"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Write Your Message Here"
                className="bg-white text-black w-full px-4 py-3 rounded-lg mt-4 placeholder-gray-300 outline-none"
              />
              <button className="bg-white text-textPrimary hover:bg-textPrimary hover:text-white font-semibold w-full py-3 mt-6 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
