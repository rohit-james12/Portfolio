import React, { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setName("");
    setEmail("");
    setMessage("");
  }, []);
  return (
    <div
      name="contact"
      className="w-full h-[850px] md:h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/a9c4595e-103a-454f-821d-cc28bd0f924f"
        className="flex flex-col max-w-[600px] w-full text-white"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-400 text-emerald-500">
            Contact
          </p>
          <p className="py-4 mt-1 text-emerald-500 font-semibold">
            Submit the form below or send me an email - rohitjames89@gmail.com
          </p>
          <p className="text-red-600 font-semibold">
            ( Note: Only upon filling all the fields below, the submit button
            will appear. )
          </p>
        </div>
        <input
          className="p-2 bg-gray-200/20 backdrop-blur outline-none focus:bg-gray-100/30"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-gray-200/20 backdrop-blur outline-none focus:bg-gray-100/30"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="p-2 bg-gray-200/20 backdrop-blur outline-none focus:bg-gray-100/30"
          name="message"
          rows={10}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {name && email && message && (
          <button className="text-white border-2 hover:bg-emerald-600 hover:border-emerald-600 px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
