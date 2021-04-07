import cutEsim from "../images/cutEsim.png";

const PortableWifi = () => {
  return (
    <div className="container xl:flex m-auto mt-20">
      <div className="container flex flex-col items-center md:w-3/4 m-auto p-5 xl:2/4">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          SkyGo <span className="text-indigo-600">Global SIM (eSIM)</span> Cards
        </h1>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          The SKYGO Global Data SIM/eSIM is a roaming SIM product that can be used in over 100 countries.
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Customers can access www.skygosim.com or download the SkyGo App to purchase data packages to be used on their trip.
          After usage, the same SIM/eSIM can be used for their next trip.
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          No more hassel of purchasing SIM card for each country that a traveler travels. SKYGO Global data SIM is an ultimate
          solution for travelers who need reliable connection at low price wherever they travel. 
        </p>
      </div>
      <div className="container flex md:w-3/4 m-auto xl:w-2/4 relative p-3">
        <img src={cutEsim} alt="SkyGo eSIM website, desktop vesrion" className="m-h-20" />
      </div>
    </div>
  );
};
export default PortableWifi;
