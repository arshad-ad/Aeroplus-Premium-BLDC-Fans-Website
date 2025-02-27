import { TextGenerateEffect } from "./ui/Text-generate-effect";

const Hero = () => {
  return (
    <div className="text-[#ddffdc]">
      <div className="font-poppins flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-[#212525] rounded-br-[50px] md:rounded-br-[110px] p-6 md:p-10 w-full md:w-1/2 gap-y-4 flex justify-center flex-col z-20">
          <div className="heading w-full md:w-2/3 text-center md:text-start space-y-3 flex flex-col">
            <TextGenerateEffect
              words="Stay Cool, Stay Comfortable & Aeroplus Fans"
              className="font-medium text-3xl sm:text-2xl md:text-5xl leading-tight"
            />
            <p className="text-base sm:text-lg font-extralight tracking-wider">
              Experience high-performance, energy-efficient fans designed for
              your home and office.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center md:text-start w-full md:w-4/5">
            <div className="w-full">
              <h3 className="font-semibold text-xl">40+</h3>
              <hr className="h-1 w-2/3 mx-auto md:mx-0 bg-[#21e065] border border-[#21e065]" />
              <p>Innovative Fan Models</p>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-xl">1K</h3>
              <hr className="h-1 w-2/3 mx-auto md:mx-0 bg-[#21e065] border border-[#21e065]" />
              <p>Satisfied Customers</p>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-xl">2 Years+</h3>
              <hr className="h-1 w-2/3 mx-auto md:mx-0 bg-[#21e065] border border-[#21e065]" />
              <p>Warranty</p>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start p-5">
            <button className="px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-[#212525] font-bold text-white tracking-widest uppercase transform hover:scale-105 border border-[#ddffdc99] hover:bg-[#21e065] transition duration-200">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Section (Add Image or Content Here) */}
        <div className="flex p-6 md:p-8 justify-center md:justify-end w-full md:w-1/2">
          {/* Add image or any other content here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
