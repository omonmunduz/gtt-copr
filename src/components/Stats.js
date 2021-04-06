const Stats = () => {
  return (
    <div className="container p-5 lg:p-16 bg-indigo-600 mx-auto rounded mt-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:6xl">
        Trusted by businesses from all over the world.
      </h1>
      <p className="mt-3 text-base text-white text-center break-words sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Great and safe travels require good connection wherever a traveler
        travels,
      </p>
      <ul className="block mt-10 p-5 font-extrabold md:flex md:justify-around text-white">
        <li className="text-3xl p-3 md:text-4xl">
          <span className="text-3xl block md:text-5xl">50k+</span> travelers
          connected
        </li>
        <li className="text-3xl p-3 md:text-4xl">
          <span className="text-3xl block md:text-5xl">50+</span> satisfied
          dealers{" "}
        </li>
        <li className="text-3xl p-3 md:text-4xl">
          <span className="text-3xl block md:text-5xl">200k+</span> transactions
        </li>
      </ul>
    </div>
  );
};
export default Stats;
