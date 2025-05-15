import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

 const ContactComponents = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      toast.error("Name is required! ⚠️");
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      toast.error("Email is required! ⚠️");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      toast.error("Invalid email format! ⚠️");
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      toast.error("Message is required! ⚠️");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        setTimeout(() => {
          const newMessage = {
            id: Date.now(),
            name: formData.name,
            message: formData.message,
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          toast.success("Message sent successfully! 📩");
          setFormData({ name: "", email: "", message: "" });
        }, 1000);
      } catch (error) {
        toast.error("Failed to send message");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
    <section>
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center mt-20 relative">
      <h2 className="text-3xl font-bold text-blue-500 underline">Contact Me!</h2>
      <p className="mt-2 text-blue-500 text-4xl md:text-5xl">Let’s Start A New Project</p>

       <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 mt-8 max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} className="w-full p-4 border-2 border-gray-300 rounded-lg h-32 focus:border-blue-500" />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button type="submit" className="w-36 h-12 bg-gradient-to-r from-[#FF0075] to-[#FC4100] text-white font-bold rounded-lg flex justify-center items-center gap-2 hover:scale-105 transition">
        {loading ? <ClipLoader size={20} color="#fff" /> : <FaPaperPlane />} Send Message </button>
      </form>

     {/*Present Address start  */}
     <section>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-600 text-base sm:text-lg">
      <div className="flex items-center justify-start md:justify-center gap-3 bg-white dark:bg-[#1E1E2E] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <FaMapMarkerAlt className="text-xl" />
      <span><strong>Present Address:</strong> Dhaka, Uttara Azamput, Bangladesh</span>
      </div>

      <div className="flex items-center justify-start md:justify-center gap-3 bg-white dark:bg-[#1E1E2E] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <FaMapMarkerAlt className="text-xl" />
      <span><strong>Permanent Address:</strong> Habiganj, Bangladesh</span>
      </div>

      <div className="flex items-center justify-start md:justify-center gap-3 bg-white dark:bg-[#1E1E2E] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <FaPhoneAlt className="text-xl" />
      <span><strong>Phone:</strong> +880 1540 587085</span>
      </div>

      <div className="flex items-center justify-start md:justify-center gap-3 bg-white dark:bg-[#1E1E2E] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <FaEnvelope className="text-xl" />
      <span><strong>Email:</strong> jahidulislamwebbd@gmail.com </span>
      </div>
      </div>

     </section>
      {/*Present Address end */}
      
      {/*Google map */}
      <div className="mt-10 relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7882750495895!2d90.366667914982!3d23.791788684570996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41a8323b3a1%3A0xb37e8efb77a5b5b2!2sUttara%20Azimpur!5e0!3m2!1sen!2sbd!4v1708365826925!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ToastContainer />
      </div>   
      {/*Google map */}
    </section>
    </>
  );
 };

 export default ContactComponents;
