const Rating = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-textPrimary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold">20+</h3>
            <p className="mt-2 md:mt-4 text-lg text-gray-100 font-semibold">Years of Experience</p>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold ">600+</h3>
            <p className="mt-2 md:mt-4 text-lg text-gray-100 font-semibold">Successful Projects</p>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold ">95%</h3>
            <p className="mt-2 md:mt-4  md:mt-4text-lg text-gray-100 font-semibold">Customer Satisfied</p>
          </div>
          
          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold ">3k+</h3>
            <p className="mt-2 md:mt-4 text-lg text-gray-100 font-semibold">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
