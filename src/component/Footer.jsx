import React, { useState } from 'react'
import { assets } from '../assets/assets';
import SecondButton from './SecondButton';

function Footer() {
    const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("access_key", "95694af3-8ec3-4c61-97b5-cde863752a59"); // Ganti dengan Access Key dari Web3Forms
    formData.append("email", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div
        className="bg-gray-900 w-full md:px-20 lg:px-32 pt-10 px-4 overflow-hidden"
        id="Footer"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img className='mx-auto md:m-0 w-28' src={assets.logo_panjang_putih} alt="" />
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              deserunt vero, recusandae assumenda a voluptatem voluptate fugit
              porro nemo.
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-400">
              <a className="hover:text-white" href="#Home">
                Home
              </a>
              <a className="hover:text-white" href="#About">
                About
              </a>
              <a className="hover:text-white" href="#Project">
                Project
              </a>
              <a className="hover:text-white" href="#Testimonials">
                Testimonials
              </a>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-white text-xl font-semibold">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 my-4 md:max-w-80 ">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex flex-col items-start" >
              <form className="flex gap-4 max-w-96 " onSubmit={handleSubmit} id="subscribeForm" action="">
                <input
                  className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your E-mail"
                />
                <SecondButton
                  type="submit"
                  className=" mr-2 bg-blue-600 text-white px-8 py-2 rounded cursor-pointer"
                >
                  Subscribe
                </SecondButton>
              </form>
              {success && (
                <p className="text-gray-300 text-center mt-1 mb-4">
                  Thank you for subscribing!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center mb-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-700 py-4 mt-8">
          <p className="text-gray-400 ">CharmBox© 2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer