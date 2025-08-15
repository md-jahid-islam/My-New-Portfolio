import React, { useState } from "react";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { Link } from "react-router-dom";

 const ServicesComponents = () => {
 //=========== useState part start ==========//
 const [expanded, setExpanded] = useState(null); 
 const [servicesToShow, setServicesToShow] = useState(4); 
 //=========== useState part end ==========//

 //========== allServices part start ========//
 const allServices = [
  {
    id: 1,
    title: "Firebase Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
    imgSrc: "/images/firebase.png",
    details: [
      "Authentication",
      "Realtime Database & Firestore",
      "Cloud Storage",
      "Firebase Hosting",
      "Cloud Functions",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase Remote Config",
      "Firebase Cloud Messaging (FCM)",
    ]
  },
  {
    id: 2,
    title: "Visual Branding API",
    description: "A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.",
    imgSrc: "/images/brand.png",
    details: ["Brand.dev", "BrandAPI", "MyBrandAPI"]
  },
  {
    id: 3,
    title: "React Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
    imgSrc: "/images/react.png",
    details: [
      "Custom React Website design ",
      "React Component Library Development",
      "React Performance Optimization",
      "React-based Single Page Applications (SPA)",
      "UI/UX Design with React",
      "React Web Maintenance",
      "Cloud Services Integration",
      "Security Solutions for React",
      "Custom React Dashboard Development"
    ]
  },
  {
    id: 4,
    title: "Web Development",
    description: "Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.",
    imgSrc: "/images/webdevelop.png",
    details: [
      "Custom Website Development",
      "Front-end Web Development",
      "Back-end Web Development",
      "E-commerce Web Development",
      "Web Application Development",
      "UI/UX Design and Prototyping",
      "Web Hosting and Deployment",
      "Web Security Services",
      "Website Redesign & Maintenance",
      "Cloud Services & Web App Hosting",
      "Real-Time Web Applications"
    ]
  },
  {
    id: 5,
    title: "AI Simple Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://images.unsplash.com/photo-1678483789107-0029c61fdcca?q=80&w=1528&auto=format&fit=crop",
    details: ["Machine Learning", "AI Chatbots", "Data Analysis", "Automation Solutions"]
  },
  {
    id: 7,
    title: "Node.js Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/node.png",
    details: ["API Creation", "Server-side Logic", "Authentication", "Database Integration"]
  },
  {
    id: 8,
    title: "Backend Express.js Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/express.png",
    details: ["Middleware Setup", "Routing", "REST API Development", "Authentication"]
  },
  {
    id: 9,
    title: "Database MongoDB Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/mongodb.png",
    details: ["Data Modeling", "Mongoose ODM", "Aggregation Pipelines", "Indexing"]
  },
  {
    id: 10,
    title: "Mongoose Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/mongoose.png",
    details: ["Schema Design", "Population", "Validation", "Hooks"]
  },
  {
    id: 11,
    title: "APIs Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/apis.png",
    details: ["RESTful APIs", "Postman Testing", "Authentication", "CRUD Operations"]
  },
  {
    id: 12,
    title: "EJS Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/ejs.png",
    details: ["Template Engine", "Layout Management", "Dynamic Rendering", "Server-side Views"]
  },
  {
    id: 13,
    title: "Postman Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/postman.png",
    details: ["API Testing", "Environment Setup", "Collections", "Automation"]
  },
  {
    id: 14,
    title: "Nodemon Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/nodemon.png",
    details: ["Auto-Reload", "Local Dev Setup", "Efficient Debugging"]
  },
  {
    id: 15,
    title: "HTTPS Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/https.png",
    details: ["SSL Certificates", "Secure Servers", "HTTPS Setup", "Data Protection"]
  }
 ];

 //========== allServices part end ========//

 //======== Toggle the expanded service ======//
 const toggleExpand = (id) => {
   setExpanded((prev) => (prev === id ? null : id));
 };

 //======== Load more services ======//
 const loadMoreServices = () => {
   setServicesToShow((prev) => prev + 2); 
 };

 //========== design part start ===========//
 return (
   <div className="container mx-auto px-4 py-10">
     {/* Header Section */}
     <div className="text-center">
       <h2 className="text-3xl font-bold mt-11 text-gray-900 dark:text-gray-300 ">  I'm Jahidul Islam I'm Full Stack Developer from Uttara, Azampur, Dhaka!</h2>
       <h3 className=" text-2xl font-bold text-gray-900 dark:text-gray-300 underline ">My All Skills!</h3>
       <h2 className="mt-4 text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-300 ">
       My Experienced Full Stack Developer skilled in React, Node.js, Express, MongoDB, Mongoose, and REST APIs.
       Proficient in building dynamic, responsive, and user-centric web applications. Dedicated to writing clean, scalable code and optimizing performance across the stack.
       Driven by a passion for innovation and delivering seamless digital experiences. Our vision is to be a trailblazing force in web design and development, recognized for excellence,
       integrity, and customer satisfaction.
      </h2>
     </div>

     {/* Services Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
       {allServices.slice(0, servicesToShow).map((service) => (
         <div key={service.id} className="relative text-center p-4 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
           <img className="w-20 h-20 mx-auto rounded-lg mt-5 hover:scale-110 transition duration-300" src={service.imgSrc} alt={service.title} />
           <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-300">{service.title}</h2>

           <button onClick={() => toggleExpand(service.id)} className="block mt-4 text-lg text-gray-900 dark:text-gray-300 transform hover:scale-110 transition duration-300">
            <TbArrowLeftFromArc className={`inline-block text-[20px] ${expanded === service.id ? "rotate-180" : ""} transition-transform duration-300`} />
           </button>

           {/* Expanded Description */}
           <div className={`overflow-hidden transition-all duration-500 ${expanded === service.id ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
             <ul className="list-disc list-inside text-sm md:text-base text-gray-900 dark:text-gray-300">
               {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
               ))}
             </ul>
             <Link to="#" className="mt-3 inline-block text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-[#008DDA] transition duration-300">Read More</Link>
           </div>
         </div>
       ))}
     </div>

     {/* Load More Button */}
     {servicesToShow < allServices.length && (
       <div className="text-center mt-8">
         <button onClick={loadMoreServices} className="text-gray-900 dark:text-gray-300 font-semibold hover:text-[#008DDA] transition duration-300">
          Load More Services
         </button>
       </div>
     )}
   </div>
 );
 };

 //========== Services Components end ===========//
 export default ServicesComponents;
