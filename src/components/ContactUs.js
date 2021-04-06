const ContactUs = () => {
  return (
    <div className="container md:w-3/4 m-auto lg:w-2/6 my-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Contact US</h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Have any questions? We'd love to hear from you.
        </p>
      <form className="shadow-2xl p-5">
        <label className="block font-bold">
          <span className="text-gray-700">Name</span>
          <input
            className="form-input mt-3 block w-full p-5 border-2 border-gray-400 rounded"
            placeholder="Type your name"
          />
        </label>
        <label className="block font-bold">
          <span className="text-gray-700">E-mail</span>
          <input
            type="email"
            className="form-input mt-3 block w-full p-5 border-2 border-gray-400 rounded"
            placeholder="yourEmail@example.com"
          />
        </label>
        <label class="block font-bold">
          <span className="text-gray-700">Textarea</span>
          <textarea
            class="form-textarea mt-3 block w-full p-5 border-2 border-gray-400 rounded"
            rows="8"
            placeholder="Your message."
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-blue-500 text-white font-bold mt-3 py-2 p-5 rounded shadow-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
