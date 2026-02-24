import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';
import CourseCard from './CourseCard';
import Settings from './Settings';
import LessonRow from './LessonRow';
import Billing from './Billing';
import Profile from './Profile';
import CourseCatalog from './CourseCatalog';

const mockCourses = [
  {
    id: 1,
    bgColor: 'bg-[#FFE177]',
    tagColor: 'bg-gray-900',
    tagTextColor: 'text-white',
    progressColor: 'bg-gray-900',
    tagText: 'Marketing',
    title: 'Creative Writing for Beginners',
    progress: 5,
    total: 20,
    avatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
    ],
    count: 120,
  },
  {
    id: 2,
    bgColor: 'bg-[#D7B4F3]',
    tagColor: 'bg-[#FFD566]',
    tagTextColor: 'text-gray-900',
    progressColor: 'bg-purple-800',
    tagText: 'Computer Science',
    title: 'Digital Illustration with Adobe Illustrator',
    progress: 12,
    total: 50,
    avatars: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    ],
    count: 80,
  },
  {
    id: 3,
    bgColor: 'bg-[#B4E4F9]',
    tagColor: 'bg-[#E9D5FF]',
    tagTextColor: 'text-gray-900',
    progressColor: 'bg-[#FF6B57]',
    tagText: 'Psychology',
    title: 'Public Speaking and Leadership',
    progress: 18,
    total: 22,
    avatars: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    ],
    count: 24,
  },
];

const mockLessons = [
  {
    number: '01',
    title: 'Introduction to Creative Writing',
    subtitle: 'Creative writing for beginners',
    teacher: {
      name: 'Conner Garcia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    },
    duration: '22 min',
  },
  {
    number: '03',
    title: 'Foundations of Public Speaking',
    subtitle: 'Public Speaking and Leadership',
    teacher: {
      name: 'Saira Goodman',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
    },
    duration: '40 min',
  },
  {
    number: '05',
    title: 'Getting to know the tool Adobe Illustrator',
    subtitle: 'Digital Illustration with Adobe Illustrator',
    teacher: {
      name: 'Tony Ware',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    },
    duration: '1h 08 min',
  },
  {
    number: '11',
    title: 'Understanding audience psychology',
    subtitle: 'Public Speaking: Basic course',
    teacher: {
      name: 'Mya Guzman',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    },
    duration: '26 min',
  },
  {
    number: '04',
    title: 'The importance of self reflection',
    subtitle: 'Psychology of influence',
    teacher: {
      name: 'Zohaib Osborn',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
    },
    duration: '23 min',
  },
];

export default function Dashboard() {
  const [activeIcon, setActiveIcon] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeView, setActiveView] = useState('overview');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleSidebarClick = (icon: string) => {
    setActiveIcon(icon);
    if (icon === 'grid') {
      setActiveView('overview');
    } else if (icon === 'settings') {
      setActiveView('settings');
    } else if (icon === 'folder') {
      setActiveView('catalog');
    }
  };


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFDFA]">
      <Sidebar activeIcon={activeIcon} onIconClick={handleSidebarClick} />

      <div className="flex-1 md:ml-24 overflow-auto">
        <motion.div
          className="p-6 md:p-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome to <span className="text-[#FF6B57]">Lumen</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1 md:flex-none md:w-72">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-900 rounded-full py-2.5 px-4 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/50"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6B57] text-white p-2 rounded-full hover:bg-[#FF5643] transition-colors">
                  <Search size={16} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  className="relative p-2.5 bg-white border border-gray-900 rounded-full text-gray-900 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-[#FF6B57] border-2 border-white rounded-full"></span>
                </motion.button>
                <div className="relative" ref={profileMenuRef}>
                  <motion.button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                      alt="Kacie Velasquez"
                      className="w-10 h-10 rounded-full border-2 border-gray-900"
                    />
                    <div className="hidden md:block">
                      <p className="text-sm font-bold text-gray-900">
                        Kacie Velasquez
                      </p>
                      <p className="text-xs text-gray-500">@k_velasquez</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-900 transition-transform duration-200 ${
                        isProfileMenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white border-2 border-gray-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] overflow-hidden z-50"
                      >
                        <div className="py-2">
                          <button
                            onClick={() => {
                              setActiveView('profile');
                              setActiveIcon('grid');
                              setIsProfileMenuOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3"
                          >
                            <div className="w-8 h-8 bg-[#FFE177] border border-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                              K
                            </div>
                            <span>My Profile</span>
                          </button>
                          <button
                            onClick={() => {
                              setActiveView('billing');
                              setActiveIcon('settings');
                              setIsProfileMenuOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3"
                          >
                            <div className="w-8 h-8 bg-[#D7B4F3] border border-gray-900 rounded-full flex items-center justify-center text-sm">
                              💳
                            </div>
                            <span>Payments & Billing</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {activeView === 'overview' ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My courses</h2>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['all', 'marketing', 'computer', 'psychology'].map((filter) => (
                    <motion.button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
                        activeFilter === filter
                          ? 'bg-gray-900 text-white border border-gray-900'
                          : 'bg-white border border-gray-900 text-gray-700 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {filter === 'all'
                        ? 'All courses'
                        : filter === 'computer'
                          ? 'Computer Science'
                          : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </motion.button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {mockCourses.map((course, index) => (
                    <CourseCard key={course.id} {...course} index={index} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-gray-900 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      My next lessons
                    </h3>
                    <motion.a
                      href="#"
                      className="text-[#FF6B57] font-medium hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      View all lessons
                    </motion.a>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 font-semibold">
                      <span>Lesson</span>
                      <div className="flex flex-1 md:flex-none md:w-32 justify-center">
                        Teacher
                      </div>
                      <span className="md:w-20 text-right">Duration</span>
                    </div>
                    {mockLessons.map((lesson, index) => (
                      <LessonRow
                        key={index}
                        {...lesson}
                        index={index}
                        isLast={index === mockLessons.length - 1}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  className="bg-[#2D2F33] rounded-3xl p-6 md:p-8 flex flex-col justify-between text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <p className="text-gray-400 text-sm mb-4">
                      New course matching your interests
                    </p>
                    <div className="mb-6">
                      <span className="inline-block bg-[#FFD566] text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                        Computer Science
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold leading-snug">
                        Microsoft Future Ready: Fundamentals of Big Data
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">
                      They are already studying
                    </p>
                    <div className="flex items-center gap-1">
                      {[
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
                      ].map((avatar, idx) => (
                        <img
                          key={idx}
                          src={avatar}
                          alt="student"
                          className="w-8 h-8 rounded-full border-2 border-gray-700 -ml-2"
                          style={{
                            marginLeft: idx === 0 ? 0 : -8,
                          }}
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-[#FFD566] flex items-center justify-center text-xs font-bold text-gray-900 -ml-2 border border-gray-900">
                        +100
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className="w-full bg-[#FF6B57] text-white font-bold rounded-xl py-3 mt-8 hover:bg-[#FF5643] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    More details
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          ) : activeView === 'catalog' ? (
            <CourseCatalog />
          ) : activeView === 'billing' ? (
            <Billing />
          ) : activeView === 'profile' ? (
            <Profile />
          ) : activeView === 'settings' ? (
            <Settings />
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}
