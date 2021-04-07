import cutWifi from "../images/cutWifi.png";

const PortableWifi = () => {
  return (
    <div className="container xl:flex m-auto mt-20">
      <div className="container flex flex-col items-center md:w-3/4 m-auto p-5 xl:2/4">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          SkyGo <span className="text-indigo-600">Portable WiFi</span>
        </h1>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          With the new "cloud WiFi technology, customers can get local data connection wherever they travel whenever they want
          without switching SIM cards or changing any settings."
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Customers just need to simply buy data package needed for their travel on the skygowifi portal or the SKYGO App to
          be able to get connected.
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          The new WiFi product is available for rental or purchase. 
          Customers can get the devices shipped to them or pick up at major airports for rental.
        </p>
      </div>
      <div className="container flex md:w-3/4 m-auto xl:w-2/4 relative p-3">
        <img src={cutWifi} alt="portable wifi website, desktop vesrion" />
      </div>
    </div>
  );
};
export default PortableWifi;
