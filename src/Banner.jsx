import banner from "./images/banner.jpg";
import bannerMobile from "./images/bannerMobile.jpg";

const Banner = () => {
  return (
    <section className="flex justify-center">
      {/*banner image on small screens*/}
      <div className="relative w-full block md:hidden h-screen">
        <img
          src="./images/bannerMobile.jpg"
          alt="cupcakes banner picture"
          className="h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 bg-black bg-opacity-50">
          <h1 className="text-gray-200 text-4xl font-bold px-8">
            Explore, cook, and <span className="text-teal-900">enjoy</span> a
            world of flavors from your kitchen.
          </h1>
          <button className="bg-teal-900 text-white py-2 px-4 ml-8 mt-4 rounded hover:bg-teal-700">
            Get Started
          </button>
        </div>
      </div>
      {/*banner image on larger screens*/}
      <div className="relative w-full hidden md:block h-screen">
        <img
          src="./images/banner.jpg"
          alt="cupcakes banner picture"
          className="h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 bg-black bg-opacity-50">
          <h1 className="text-gray-200 text-4xl font-bold px-8">
            Explore, cook, and <span className="text-teal-900">enjoy</span> a
            world of flavors from your kitchen.
          </h1>
          <button className="bg-teal-900 text-white py-4 px-6 mt-8 rounded hover:bg-teal-700">
            Get Started
          </button>
        </div>
      </div>
      {/* <div className="hidden md:flex md:w-2/3">
        <div className="flex items-center justify-center w-1/2">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Explore, cook, and <span className="text-teal-900">enjoy</span> a
            world of flavors from your kitchen.
          </h2>
        </div>
        <div className="relative w-1/2 h-96">
          <img
            src="./images/banner.jpg"
            alt="cupcake banner image for bigger screens"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
