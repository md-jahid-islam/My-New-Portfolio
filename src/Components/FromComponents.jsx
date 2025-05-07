import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaFacebookMessenger, FaComment, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

 const FromComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);

  //========= Handle click outside to close ==========//
  useEffect(() => {
    const handleClickOutside = (event) => {
    if (fabRef.current && !fabRef.current.contains(event.target)) {
    setIsOpen(false);
    }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  //=========== Prevent body scroll when open ==========//
  useEffect(() => {
    if (isOpen) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const actions = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: 'WhatsApp',
      url: 'https://wa.me/message/O3CTLULQDASLC1',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: <FaFacebookMessenger className="text-2xl" />,
      label: 'Messenger',
      url: 'https://m.me/jahidul.islam.98621',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
   ];
   //============ design part ============//
   return (
    <>
    <section>
    <div ref={fabRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }} className="flex flex-col items-end gap-3 mb-3">
            {actions.map((action, index) => (
              <motion.div 
              key={action.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}>
                <a href={action.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${action.color} text-white transition-all hover:shadow-xl hover:scale-110`} aria-label={action.label}> {action.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <span className=' text-center text-red-500'> visit now!! </span>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl ${ isOpen ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-green-500'
        } text-white transition-all`} aria-label={isOpen ? 'Close social menu' : 'Open social menu'}>
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
        <FaComment className="text-xl" />
        )}
      </motion.button>
    </div>
    </section>
    </>
    //============ design end ============//
  );
 };
 export default FromComponents;
