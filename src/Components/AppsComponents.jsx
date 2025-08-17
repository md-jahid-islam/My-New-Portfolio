import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaComment, FaTimes, FaMoneyBillWave, FaCopy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

 // ======== Floating Action Button ============ //
 const AppsComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);

  // ============ Handle click outside to close =========== //
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ========= Payment methods data ============= // 
  const paymentMethods = [
    {
      id: 1,
      name: 'Bikash number',
      number: '01540587085',
      ussd: '*247#',
      icon: <FaPhone className="text-lg" />,
      color: 'bg-[#E2136E] hover:bg-[#C0115D]',
      copyText: 'Bikash number copied!'
    },
    {
      id: 2,
      name: 'Nagad number',
      number: '01540601832',
      ussd: '*167#',
      icon: <FaMoneyBillWave className="text-lg" />,
      color: 'bg-[#E82D89] hover:bg-[#D0277A]',
      copyText: 'Nagad number copied!'
    },

  ];

  // ============ Copy to clipboard function ============ //
   const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  return (
    <div ref={fabRef} className="fixed bottom-6 left-8 z-50 flex flex-col items-center space-y-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-end mb-3 space-y-3">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center space-x-2">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
                  <div className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer" onClick={() => copyToClipboard(method.number, method.copyText)}>
                  {method.number}
                  </div>
                  <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" onClick={() => copyToClipboard(method.number, method.copyText)} title="Copy!">
                <FaCopy className="text-sm" />
                </button>
                </div>
                
                <a href={method.ussd ? `tel:${method.ussd}` : method.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-10 h-10 rounded-full ${method.color} text-white shadow-md hover:shadow-lg transition-all`}
                title={method.name}>
                {method.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center">
        <h1>Open Payment Options!!</h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${
            isOpen ? 'bg-red-500' : 'bg-blue-600'
          } text-white transition-colors`}
          aria-label={isOpen ? 'Turn off payment options' : 'Turn on payment options'}>
          {isOpen ? <FaTimes /> : <FaComment />}
        </motion.button>
      </div>
    </div>
  );
 };

 // =========== Apps Components end ============ //
 export default AppsComponents;