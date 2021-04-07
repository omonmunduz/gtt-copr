import cutEsim from "../images/cutEsim.png";

const PortableWifi = () => {
  return (
    <div className="container xl:flex m-auto mt-20">
      <div className="container flex flex-col items-center md:w-3/4 m-auto p-5 xl:2/4">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          SkyGo <span className="text-indigo-600">Global SIM (eSIM)</span> Cards
        </h1>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </p>
        <p className="mt-3 break-words text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </p>
      </div>
      <div className="container flex md:w-3/4 m-auto xl:w-2/4 relative p-3">
        <img src={cutEsim} alt="SkyGo eSIM website, desktop vesrion" />
      </div>
    </div>
  );
};
export default PortableWifi;
