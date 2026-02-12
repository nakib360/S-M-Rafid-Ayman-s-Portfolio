import smRafidAymanPng from "../../assets/S M Rafid Ayman.png"
import smRafidAymanJpg from "../../assets/S M Rafid Ayman.jpg"
import { FaLink, FaLayerGroup, FaRegBookmark, FaPrint } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { NavLink } from "react-router";

// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";


const Home = () => {
  const portfolioItems = [
    {
      title: "Social Media Design",
      desc: "Scroll-stopping visuals designed to elevate brand presence and engagement.",
      icon: <FaLink size={28} />,
      path: "/SocialMediaDesign"
    },
    {
      title: "Logo Design",
      desc: "Strong, timeless logos built to represent your brand with confidence.",
      icon: <FaLayerGroup size={28} />,
      path: "/LogoDesign"
    },
    {
      title: "Cover Design",
      desc: "Eye-catching covers designed to instantly grab attention.",
      icon: <FaRegBookmark size={28} />,
      path: "/CoverDesign"
    },
    {
      title: "Thumbnail Design",
      desc: "High-impact thumbnails optimized for clicks and visibility.",
      icon: <MdOutlinePhotoSizeSelectActual size={30} />,
      path: "/ThumbnailDesign"
    },
    {
      title: "Print Design",
      desc: "Clean and professional print materials that communicate clearly.",
      icon: <FaPrint size={26} />,
      path: "/PrintDesign"
    },
    {
      title: "Manipulation Design",
      desc: "Creative photo manipulation to bring bold ideas to life.",
      icon: <LuSparkles size={30} />,
      path: "/ManipulationDesign"
    },
  ];
  return (
    <div className="text-white space-y-4">
      <div className="flex flex-col-reverse md:flex-row justify-around items-center ">
        <motion.div initial={{ x: -50, y: 50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 1 }} className="md:space-y-2 text-right -mt-10 md:mt-0 md:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl text-yellow-100">Assalamu Alaikum</p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-purple-600 font-bold">I am{" "}
            <div className="relative inline-block font-extrabold">
              <motion.span
                className="relative"
                initial={{ y: 0 }}
                whileHover={{ y: [-2, 2, -1, 1, 0] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                 S M Rafid Ayman
              </motion.span>

              <motion.span
                className="absolute top-0 left-0 text-red-500 mix-blend-screen"
                initial={{ x: 0, y: 0, opacity: 0.7 }}
                animate={{ x: [0, 2, -2, 1, 0], y: [0, -1, 1, -2, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                S M Rafid Ayman
              </motion.span>

              <motion.span
                className="absolute top-0 left-0 text-blue-500 mix-blend-screen"
                initial={{ x: 0, y: 0, opacity: 0.7 }}
                animate={{ x: [0, -2, 2, -1, 0], y: [0, 1, -1, 2, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                S M Rafid Ayman
              </motion.span>
            </div>
          </p>
          <p className="md:text-xl lg:text-2xl">From <span className="italic text-gray-300">Chattogram, Bangladesh</span></p>
        </motion.div>

        <motion.div initial={{ x: 50, y: 50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative">
          <img className="fade-middle-to-bottom" src={smRafidAymanPng} alt="S M Rafid Ayman" />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-around mt-20 md:mt-0 md:gap-5">
        <motion.div initial={{ filter: "blur(20px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.5 }} className="">
          <img className="rounded-2xl" src={smRafidAymanJpg} alt="S M Rafid Ayman" />
        </motion.div>
        <div className="max-w-3xl mt-20 md:space-y-4">
          <motion.h2 initial={{ x: -3, opacity: 0 }} whileInView={{ x: 3, opacity: 1 }} transition={{ delay: 0.5 }} className="text-3xl md:text-4xl font-extrabold text-[#9333ea] drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-4">
            About me
          </motion.h2>
          <motion.p initial={{ x: -3, opacity: 0 }} whileInView={{ x: 3, opacity: 1 }} transition={{ delay: 0.5 }} className=" md:text-xl">I am S M Rafid Ayman, a creative Graphic Designer with a strong focus on modern, clean, and effective visual design. Based in Chattogram, Bangladesh, I work with clients to create impactful designs that strengthen brand identity and improve digital presence. Alongside client work, I continuously refine my skills to stay aligned with current design trends and industry standards. </motion.p>
        </div>
      </div>

      <div>
        <div className="min-h-screen text-white py-16 px-4 ">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className=" text-3xl md:text-4xl text-center font-extrabold text-[#9333ea] drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-14">
              View My Portfolio
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} 
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 8px 30px rgba(40,81,138,0.5)",
                    transition: { duration: 0.2 },
                  }}
                  className="bg-[#0f0a1a] border border-purple-900/30 rounded-3xl p-8 flex flex-col items-center text-center group"
                >
                  {/* Icon Container with Glow */}
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>

                  <h3  className="text-xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-15">
                    {item.desc}
                  </p>

                  {/* Button with Inner Glow */}
                  <NavLink to={item.path} className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                    View Work <span>→</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
