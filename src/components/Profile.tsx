import { motion } from 'framer-motion';
import { Trophy, Clock, Award, Edit, Facebook, Instagram, Linkedin, Youtube, Mail, Globe, Link } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const skills = [
  { name: 'Course', variant: 'gray' },
  { name: 'Analytics', variant: 'gray' },
  { name: 'Public Speaking', variant: 'gray' },
  { name: 'Gratix', variant: 'gray' },
  { name: 'Digital', variant: 'gray' },
  { name: 'Meadsering', variant: 'orange' },
  { name: 'Gatfialt', variant: 'gray' },
  { name: 'Cutmnd courses', variant: 'gray' },
  { name: 'Doclow', variant: 'gray' },
  { name: 'Pront is cason', variant: 'gray' },
  { name: 'Public Speaking', variant: 'orange' },
];

export default function Profile() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold text-gray-900"
      >
        My Profile
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl border border-gray-900 overflow-hidden"
      >
        <div
          className="h-32 relative"
          style={{
            background: 'linear-gradient(135deg, #FFE177 0%, #E9D5FF 25%, #B4E4F9 50%, #FFD566 75%, #FFB4B4 100%)',
            backgroundSize: '400% 400%',
          }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-8 w-20 h-20 bg-pink-300 rounded-full"></div>
            <div className="absolute top-8 right-16 w-24 h-24 bg-purple-300 rounded-full"></div>
            <div className="absolute top-12 left-1/3 w-16 h-16 bg-blue-300 rounded-full"></div>
            <div className="absolute top-6 right-1/4 w-28 h-14 bg-yellow-200 rounded-full transform rotate-45"></div>
            <div className="absolute bottom-4 left-1/4 w-20 h-10 bg-green-200 rounded-full transform -rotate-12"></div>
            <div className="absolute bottom-8 right-1/3 w-16 h-16 bg-orange-200 rounded-full"></div>
          </div>
        </div>

        <div className="px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                alt="Kacie Velasquez"
                className="w-32 h-32 rounded-full border-4 border-white -mt-16 relative z-10 object-cover shadow-lg"
              />
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Kacie Velasquez</h2>
                  <p className="text-gray-600">@k_velasquez • Joined February 2024</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#FFD566] text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full border border-gray-900">
                    Marketing
                  </span>
                  <span className="bg-[#E9D5FF] text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full border border-gray-900">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              className="bg-[#FF6B57] text-white font-bold px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-[#FF5643] transition-colors border border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Edit size={20} />
              Edit Profile
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-[#FFE177] rounded-3xl p-8 border border-gray-900"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
              <Trophy size={32} className="text-[#FFE177]" />
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-900">24</p>
              <p className="text-gray-900 font-semibold text-lg mt-2">Courses Completed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#D7B4F3] rounded-3xl p-8 border border-gray-900"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
              <Clock size={32} className="text-[#D7B4F3]" />
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-900">186</p>
              <p className="text-gray-900 font-semibold text-lg mt-2">Hours Learned</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#B4E4F9] rounded-3xl p-8 border border-gray-900"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
              <Award size={32} className="text-[#B4E4F9]" />
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-900">12</p>
              <p className="text-gray-900 font-semibold text-lg mt-2">Certificates Earned</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-900"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me & Skills</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bio has apposative bio and professional remasking, and;mi sat more professional motilers
            and comaty owns. Shrokering, Public luoarfting and design, uisunlry;tap creative and mow
            skills;;;and ocjamy; outnemans.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className={`${
                  skill.variant === 'orange'
                    ? 'bg-[#FF6B57] text-white'
                    : 'bg-gray-100 text-gray-900'
                } text-sm font-semibold px-4 py-2 rounded-full border border-gray-900`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 border border-gray-900"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect</h3>

          <div className="flex gap-4 mb-8">
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={24} className="text-white" fill="currentColor" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={24} className="text-white" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="text-white" fill="currentColor" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube size={24} className="text-white" fill="currentColor" />
            </motion.a>
          </div>

          <div className="space-y-4">
            <motion.a
              href="https://a.learnify.com"
              className="flex items-center gap-3 text-gray-900 hover:text-[#FF6B57] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Mail size={20} />
              <span className="underline">https://a.learnify.com</span>
            </motion.a>
            <motion.a
              href="https://www.learnify.com/"
              className="flex items-center gap-3 text-gray-900 hover:text-[#FF6B57] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Globe size={20} />
              <span className="underline">https://www.learnify.com/</span>
            </motion.a>
            <motion.a
              href="https://www.learnify.com/"
              className="flex items-center gap-3 text-gray-900 hover:text-[#FF6B57] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Link size={20} />
              <span className="underline">https://www.learnify.com/</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
