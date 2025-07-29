import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

 const BlogComponents = () => {
 //========== useEffect AOS duration start =========//
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);

 //========== useEffect AOS duration end =========//
 //========== design part start =========//
 return (
   <div className="min-h-screen py-20 transition-all duration-1000">
     <div className="container px-4 md:px-0">
       {/* Header Section */}
       <div className="text-center">
         <h2 className="text-3xl font-bold text-[#b8aaaa] mb-2 underline mt-5">Blogs!</h2>
         <div className=" bg-blue-500 mx-auto animate-underlineGlow"></div>
       </div>

       {/* Blog Cards Section */}
       <div className="mt-14 flex flex-wrap justify-center gap-8">
         {/* Blog Card 1 */}
         <div data-aos="zoom-in" className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center text-[#868181] transition-all duration-500 rounded-lg p-6 shadow-lg group">
           <img className="w-full h-[250px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300" src="/images/website.png"alt="img"/>
           <h2 className="text-[16px] font-bold text-[#868181] transition mt-5"> 20 April 2026 | Front End Design
           </h2>
           <h3 className="font-bold text-[14px] text-[#868181] transition mt-4">
             Become a Frontend Developer in 5 Simple Steps
           </h3>
           <p className="text-[12px] font-bold text-[#868181] transition mt-4">
            Est a quis ipsum et arcu. Sit eros leo enim sed vivamus. Nulla et eget commodo mus suspendisse imperdiet.
           </p>
         </div> 

         {/* Blog Card 2 */}
         <div data-aos="zoom-in" data-aos-delay="200" className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center text-[#868181] transition-all duration-500 rounded-lg p-6 shadow-lg group">
           <img className="w-full h-[250px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"src="/images/mobail.png" alt="img"/>
           <h2 className="text-[16px] font-bold text-[#868181] transition mt-5"> 
           15 August 2028 | Web Design
           </h2>
           <h3 className="font-bold text-[14px] text-[#868181] transition mt-5">
            Become a Web Designer in 5 Simple Steps
           </h3>
           <p className="text-[12px] font-bold text-[#868181] transition mt-5">
             Learn the Basics: Start with HTML, CSS, and JavaScript to build
             foundational skills. Practice Design Tools: Get familiar with tools like
             Figma, Adobe XD, or Sketch.
           </p>
         </div>

         {/* Blog Card 3 */}
         <div data-aos="zoom-in"data-aos-delay="400"className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center text-[#868181] transition-all duration-500 rounded-lg p-6 shadow-lg group">
           <img className="w-full h-[250px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"src="/images/website1.png" alt="img"/>
           <h2 className="text-[16px] font-bold text-[#868181] transition mt-4">
            20 July 2029 | Web Development
           </h2>
           <h3 className="font-bold text-[14px] text-[#36C2CE]transition mt-4">
            Become a Frontend Developer in 5 Simple Steps
           </h3>
           <p className="text-[12px] font-bold text-[#868181] transition mt-4">
             Master the Fundamentals: Learn HTML, CSS, and JavaScript thoroughly. Learn
             Frameworks: Get proficient with React, Angular, or Vue.js.
           </p>
         </div>
         <div data-aos="zoom-in" data-aos-delay="400" className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center  transition-all duration-500 rounded-lg p-6 shadow-lg group">
           <img className="w-full h-[250px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"src="/images/website2.png" alt="img"/>
           <h2 className="text-[16px] font-bold text-[#868181] transition mt-4">
            20 July 2029 | Node.js all development
           </h2> 
           <h3 className="font-bold text-[14px] text-[#868181] transition mt-4">
            Become a Node.js in 5 Simple Steps
           </h3>
           <p className="text-[12px] font-bold text-[#868181] transition mt-4">
           Master the Fundamentals: Learn HTML, CSS, and JavaScript thoroughly. Learn
           Frameworks: Get proficient with React, Angular, or Vue.js.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
 };
 //========== design part end =======//

 export default BlogComponents;
