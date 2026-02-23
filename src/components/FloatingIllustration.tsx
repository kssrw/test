import { motion } from 'framer-motion';

export default function FloatingIllustration() {
  const float = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const floatSlow = {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const floatFast = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-40 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-2xl"
        style={{ top: '25%', left: '30%' }}
        animate={float}
      >
        <div className="absolute inset-4 bg-white/20 rounded-lg backdrop-blur-sm">
          <div className="w-8 h-8 bg-blue-400 rounded-full absolute top-4 left-4"></div>
          <div className="w-16 h-1 bg-blue-300 rounded-full absolute top-16 left-4"></div>
          <div className="w-12 h-1 bg-blue-300 rounded-full absolute top-20 left-4"></div>
          <div className="w-20 h-6 bg-orange-400 rounded-full absolute bottom-4 left-4"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-32 h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl shadow-xl"
        style={{ top: '15%', left: '15%' }}
        animate={floatSlow}
      />

      <motion.div
        className="absolute w-28 h-36 bg-gradient-to-br from-purple-300 to-purple-400 rounded-xl shadow-xl"
        style={{ top: '40%', right: '25%' }}
        animate={floatFast}
      >
        <div className="absolute inset-3 bg-white/20 rounded-lg backdrop-blur-sm"></div>
      </motion.div>

      <motion.div
        className="absolute w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg shadow-xl transform rotate-12"
        style={{ top: '60%', left: '20%' }}
        animate={float}
      />

      <motion.div
        className="absolute w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-xl"
        style={{ bottom: '25%', left: '15%' }}
        animate={floatSlow}
      />

      <motion.div
        className="absolute w-24 h-32 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl shadow-xl"
        style={{ bottom: '30%', right: '30%' }}
        animate={floatFast}
      />

      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 shadow-xl transform rotate-45"
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          top: '10%',
          right: '20%'
        }}
        animate={float}
      />

      <motion.div
        className="absolute w-8 h-8 rounded-full bg-purple-400 shadow-lg"
        style={{ top: '12%', left: '40%' }}
        animate={floatFast}
      />

      <motion.div
        className="absolute w-6 h-6 rounded-full bg-blue-500 shadow-lg"
        style={{ bottom: '40%', right: '18%' }}
        animate={floatSlow}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-pink-300 shadow-md"
        style={{ top: '35%', left: '12%' }}
        animate={float}
      />

      <motion.div
        className="absolute w-16 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-md transform rotate-45"
        style={{ top: '50%', right: '15%' }}
        animate={floatFast}
      />

      <motion.div
        className="absolute w-3 h-12 bg-gradient-to-b from-orange-400 to-red-400 rounded-full shadow-md transform rotate-12"
        style={{ top: '25%', right: '35%' }}
        animate={floatSlow}
      />
    </div>
  );
}
