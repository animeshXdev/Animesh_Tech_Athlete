import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaWhatsapp,
  FaTelegram,
  FaSnapchatGhost,
  FaGoogle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    { label: "About", path: "/about", icon: <FaUser className="mr-2" /> },
    { label: "Skills", path: "/skills", icon: <FaCode className="mr-2" /> },
    { label: "Contact", path: "/contact", icon: <FaEnvelope className="mr-2" /> },
  ];

  const socialLinks = [
    {
      label: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70",
      hoverColor: "hover:text-red-600",
      iconColor: "text-red-600",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0",
      hoverColor: "hover:text-pink-500",
      iconColor: "text-pink-500",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/animesh.prakash.16",
      hoverColor: "hover:text-blue-600",
      iconColor: "text-blue-600",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      url: "https://discord.gg/wMD6K9mn",
      hoverColor: "hover:text-indigo-500",
      iconColor: "text-indigo-500",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/+916207039191",
      hoverColor: "hover:text-green-600",
      iconColor: "text-green-600",
    },
    {
      label: "Telegram",
      icon: <FaTelegram />,
      url: "https://t.me/who_am_i_geek",
      hoverColor: "hover:text-blue-400",
      iconColor: "text-blue-400",
    },
    {
      label: "Snapchat",
      icon: <FaSnapchatGhost />,
      url: "https://www.snapchat.com/add/undisputedanii?share_id=_V61gKd5jw4&locale=en-IN",
      hoverColor: "hover:text-yellow-400",
      iconColor: "text-yellow-400",
    },
    {
      label: "Gmail",
      icon: <FaGoogle />,
      url: "mailto:vegan.athelete.animesh@gmail.com",
      hoverColor: "hover:text-red-500",
      iconColor: "text-red-500",
    },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="navbar bg-base-100 text-base-content shadow-md sticky top-0 z-50" data-theme="dark">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center text-xl ${isActive ? "text-primary font-bold" : "text-base-content"}`
                    }
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/" className="titlem btn btn-ghost text-white text-3xl text-primary">
            Animesh
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center text-xl ${isActive ? "text-primary font-bold" : "text-base-content"}`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-primary text-lg" onClick={() => setModalOpen(true)}>
            Join Now
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-base-100 rounded-lg p-6 w-80 max-w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-primary">Join Me On</h2>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, icon, url, hoverColor, iconColor }) => (
                  <li key={label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 text-lg transition ${hoverColor}`}
                    >
                      <span className={`${iconColor}`}>{icon}</span>
                      <span className="group-hover:inherit">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <button className="btn btn-sm btn-outline mt-6 block mx-auto" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
