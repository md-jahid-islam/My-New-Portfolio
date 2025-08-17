import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

 // ========== Contact Components start ========== //
 const ContactComponents = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // ========== validate Form start ============ //
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      toast.error("Name is required! ⚠️");
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      toast.error("Email is required! ⚠️");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
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
  // ========== validate Form end ============ //
  // ========== Handle Input Change ============ //
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ========= handle Submit start ========== //
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
  
  // ========= handle Submit end ========== //
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-16 mt-20 text-center ">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 underline">
        Contact Me!
        </h2>
        <p className="mt-2 text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
        Let’s Start A New Project
        </p>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className=" space-y-5 mt-8 max-w-lg mx-auto ">
          
          <input type="text"name="name" placeholder="Enter Your Name!" value={formData.name} onChange={handleChange} className="w-full p-4 border text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition"/>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        
          <input type="email" name="email" placeholder="Enter Your Email!" value={formData.email} onChange={handleChange} className="w-full p-4 border text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition"/>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          
          <textarea name="message" placeholder="Write your message...!" value={formData.message} onChange={handleChange} className="w-full p-4 border text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition"/>
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <button type="submit" className="w-36 h-12 bg-gradient-to-r text-gray-900 dark:text-gray-100 p-4 shadow hover:shadow-md font-bold rounded-lg flex justify-center items-center gap-2 hover:scale-105 transition">
          {loading ? <ClipLoader size={20} color="#fff" /> : <FaPaperPlane />} Send!
          </button>
        </form>

        {/* Contact Info Section */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg">
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <FaMapMarkerAlt className="text-xl text-gray-900 dark:text-gray-100" />
            <span className="text-gray-900 dark:text-gray-100">
            <strong>Present Address:</strong> Dhaka, Uttara Azampur, Bangladesh,
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <FaMapMarkerAlt className="text-xl text-gray-900 dark:text-gray-100" />
            <span className="text-gray-900 dark:text-gray-100">
            <strong>Permanent Address:</strong> Habiganj, Sylhet,
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <FaPhoneAlt className="text-xl text-gray-900 dark:text-gray-100" />
            <span className="text-gray-900 dark:text-gray-100">
            <strong>Phone:</strong> +880 1540 587085,
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <FaEnvelope className="text-xl text-gray-900 dark:text-gray-100" />
            <span className="text-gray-900 dark:text-gray-100">
            <strong>Email:</strong> jahidulislamwebbd@gmail.com,
            </span>
          </div>
        </section>

        {/* Google Map */}
        <div className="mt-10 relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7882750495895!2d90.366667914982!3d23.791788684570996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41a8323b3a1%3A0xb37e8efb77a5b5b2!2sUttara%20Azimpur!5e0!3m2!1sen!2sbd!4v1708365826925!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <ToastContainer />
      </section>
    </>
  );
 };

 //=========== Contact Components end ============ //
 export default ContactComponents;
