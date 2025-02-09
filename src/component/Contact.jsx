import React from 'react'
import TitleComponent from './TitleComponent'
import { toast } from 'react-toastify';
import {motion} from "motion/react"
import Button from './Button';


function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "95694af3-8ec3-4c61-97b5-cde863752a59");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Message sent successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.message); 
          setResult("");
        }
      };
  return (
    <motion.div
    initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden mb-6"
      id='Contact'
    >
      <div className="flex flex-col items-center justify-center">
        <TitleComponent
          title="Contact "
          titleSpan="With Us"
          description="Ready to Make a Move? Let’s Build Your Future Together"
        />
      </div>

      <form onSubmit={onSubmit} className=" max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="text" name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="email" name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Your Message
          <textarea
            name="Message"
            placeholder="Message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button className="bg-blue-600 text-white px-8 py-2 rounded cursor-pointer">
            {result ? result : "Send Message"}
          </Button>
        </div>
      </form>
      <span>{result}</span>
    </motion.div>
  )
}

export default Contact