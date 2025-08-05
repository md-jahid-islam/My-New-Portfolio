 import { Link } from 'react-router-dom';
 import Typewriter from 'typewriter-effect';
 //=========== ProjectCard part start ===========//
 const ProjectCard = ({ image, title, category, liveLink, githubLink }) => (
  <div className="relative text-center w-72 transform hover:scale-105 hover:rotate-2 transition-all duration-500 ease-in-out ">
    <img className="w-full h-52 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 hover:brightness-90" src={image} alt={title}/>
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-[#b8aaaa] rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="text-lg">
        {/*Typewriter part start */}
        <Typewriter
          options={{
            strings: [category],
            autoStart: true,
            loop: true,
            delay: 75,
            cursor: "|",
            pauseFor: 2000, 
          }}
        />
      </h3>
     {/*Typewriter part end */}

    {/*View Live & GitHub part start*/}
      <div className="flex justify-center gap-4 mt-4">
        <Link to={liveLink} target="_blank" className="px-4 py-2 bg-[#FF204E] text-white rounded-full hover:bg-[#008DDA] transition duration-300">
        View Live
        </Link>
        <Link to={githubLink} target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-[#008DDA] transition duration-300">
        GitHub
        </Link>
      </div>
   {/*View Live & GitHub part end*/}

    </div>
  </div>
 );
 //============== Portfolio projects added part start =======//
 const Portfolio = () => {
  const projects = [
    {
      image: "/images/code.png",
      title: "Code shortener website",
      category: "React, Typescript, mysql, react-toastify,Tailwind CSS",
      liveLink: "https://code-shortener-dash.lovable.app/",
      githubLink: "https://github.com/md-jahid-islam/Filter-website-design-Responsive-.git",
    },
      {
      image: "/images/time.png",
      title: "Daily Students Study Plan Time management website",
      category: "html, css, javascript, responsive mobile devices, laptop devices ,desktop device",
      liveLink: "https://routine-plan.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Routine-Plan-.git",
    },
      {
      image: "/images/html.png",
      title: "DoctorCare Início Serviços Sobre Depoimentos Study Plan Time management website",
      category: "html, css, javascript, Tailwind.css, responsive mobile devices laptop devices desktop device",
      liveLink: "https://html-css-js-crash-course-doctor-care-project-main.vercel.app/#home",
      githubLink: "https://github.com/md-jahid-islam/html-css-js-crash-course-doctor-care-project-main.git",
    },
     {
      image: "/images/filtter.png",
      title: "Filtter website",
      category: "React, React-Redux, React Router DOM, react-toastify, react-icons, Tailwind CSS",
      liveLink: "https://filter-website-design-responsive.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/code-shortener-dash.git",
    },
    {
      image: "/images/orbi.png",
      title: "Orbi Project E-Shopping",
      category: "React incorporating React Paginate, React Redux, React Scripts, Redux Persist, React Router DOM, React Slick, Slick Carousel, Tailwind Scrollbar, Responsive, and Web Vitals.",
      liveLink: "https://orebi-showp-website-e-commerce.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/OREBI-E-COMMERCE-WEBSITE.git",
    },
    {
      image: "/images/filltervercel.png",
      title: "Filtter website E-commerce Brand",
      category: "Brand react react-router-dom react-icons web-vitals react-scripts ",
      liveLink: "https://filter-website-development.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/filter-website-development.git",
    },
    {
      image: "/images/chepsdeals.png",
      title: "Corporate Brand",
      category: "reduxjs toolkit ,testing-library jest-dom , testing-library react ,react-redux, react-router-dom ,react-scripts ,react-slick ,react-toastify ,sass ,slick-carousel ,web-vitals ",
      liveLink: "https://cheap-deals-iota.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Cheap-Deals-E-commerce-Shop.git",
    },
    {
      image: "/images/apple.png",
      title: "Cryp to Apple Website",
      category: " React, gsap react , react-three drei , react-three fiber ,gsap ,three  ",
      liveLink: "https://filter-website-development-xg39.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Apple-Project-design.git",
    },
    {
      image: "/images/furniture.png",
      title: "Doctore Website Branding",
      category: "Html , Css, Javascript , Responsive",
      liveLink: "https://furniture-figma-project.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Furniture-figma-project.git",
    },
    {
      image: "/images/carrental.png",
      title: "Car Rental E-commerce website ",
      category: " aos react react-dom react-icons tailwindcss",
      liveLink: "https://car-rental-website-design.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Car-Rental-website-design.git",
    },
    {
      image: "/images/mixedit.png",
      title: "Mixedit-UP",
      category: "React.js React Router dom , Responsive Tailwind.css",
      liveLink: "https://mixedit-up-sepia.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Mixedit-UP.git",
    },
    {
      image: "/images/traveling.png",
      title: "Traveling",
      category: " react.js react router dom tailwind.css javascript farmwork bootstrap!!",
      liveLink: "https://traveling-jet.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Traveling.git",
    },
    {
      image: "/images/dasboard.png",
      title: "Dasboard",
      category: " date-fns react react-date-range react dom react icons react-router-dom recharts sass",
      liveLink: "https://taberna-dashboard.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Dashboard-.git",
    },
    {
      image: "/images/stremvib.png",
      title: "Stremvib",
      category: " @reduxjs/toolkit axios react dom react-router-dom react-icons react-redux react-slick redux-persist reselect slick-carousel styled-components",
      liveLink: "https://stream-vibe-seven-eta.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Stream-Vibe.git",
    },
    {
      image: "/images/Eshop.png",
      title: "News Pro",
      category: "aos react-icons react-dom react-router-dom react-slick slick-carousel ",
      liveLink: "https://e-commerce-shop-five-zeta.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/E-commerce-shop.git",
    },
    
  ];
 //======== Portfolio projects added part end =======//
 
 //======== design part start ===========//
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="header text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 pt-10 underline ">Portfolio!</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
 };

 //======== design part end ===========//
 export default Portfolio;
