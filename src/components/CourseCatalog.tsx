import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, Star } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  author: string;
  authorAvatar: string;
  rating: number;
  reviews: number;
  price: number;
  bgColor: string;
  description: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced UX/UI Design',
    category: 'Design',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 5,
    reviews: 19,
    price: 49,
    bgColor: 'bg-[#D7B4F3]',
    description: 'Learn more about about shortcriting your developme...',
  },
  {
    id: 2,
    title: 'Course Title: Advanced UX/UI Design',
    category: 'Design',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 4,
    reviews: 14,
    price: 49,
    bgColor: 'bg-gradient-to-br from-pink-300 via-orange-200 to-blue-300',
    description: 'Learn more about about shortcriting your developme...',
  },
  {
    id: 3,
    title: 'Course Title: Fastein',
    category: 'Development',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 5,
    reviews: 10,
    price: 49,
    bgColor: 'bg-[#FF6B57]',
    description: 'Learn more about about shortcriting your developme...',
  },
  {
    id: 4,
    title: 'Course Marketing Design',
    category: 'Marketing',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 5,
    reviews: 5,
    price: 49,
    bgColor: 'bg-[#FF6B57]',
    description: 'Learn more about about shortcriting your developme...',
  },
  {
    id: 5,
    title: 'Course Title Day Design',
    category: 'Design',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 5,
    reviews: 5,
    price: 49,
    bgColor: 'bg-[#7C5CFF]',
    description: 'Learn more about about shortcriting your developme...',
  },
  {
    id: 6,
    title: 'Course Title: Development',
    category: 'Design',
    author: 'Kacie Velasquez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    rating: 5,
    reviews: 5,
    price: 49,
    bgColor: 'bg-[#2D2F33]',
    description: 'Learn more about about shortcriting your developme...',
  },
];

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

export default function CourseCatalog() {
  const [catalogTab, setCatalogTab] = useState<'available' | 'buy'>('buy');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState({
    design: false,
    marketing: false,
    development: false,
    business: false,
  });
  const [yourGroup, setYourGroup] = useState({
    purchased: false,
    issued: false,
    free: false,
  });

  const handleCategoryChange = (category: keyof typeof categories) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleGroupChange = (group: keyof typeof yourGroup) => {
    setYourGroup((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const getCategoryBgColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Design: 'bg-purple-100 text-purple-800',
      Marketing: 'bg-orange-100 text-orange-800',
      Development: 'bg-red-100 text-red-800',
      Business: 'bg-blue-100 text-blue-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#FBBF24' : 'none'}
            color={i < rating ? '#FBBF24' : '#D1D5DB'}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <h1 className="text-3xl font-bold text-gray-900">Course Catalog</h1>

        <div className="flex items-center gap-4">
          <div className="rounded-full border border-gray-900 p-1 flex bg-white">
            <button
              onClick={() => setCatalogTab('available')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                catalogTab === 'available'
                  ? 'bg-[#FF6B57] text-white'
                  : 'text-gray-700'
              }`}
            >
              Available to me
            </button>
            <button
              onClick={() => setCatalogTab('buy')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                catalogTab === 'buy'
                  ? 'bg-[#FF6B57] text-white'
                  : 'text-gray-700'
              }`}
            >
              Buy courses
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl border border-gray-900 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#FF6B57] text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl border border-gray-900 transition-all ${
                viewMode === 'list'
                  ? 'bg-[#FF6B57] text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-64 flex-shrink-0 bg-white rounded-3xl border border-gray-900 p-6"
        >
          <AnimatePresence mode="wait">
            {catalogTab === 'buy' ? (
              <motion.div
                key="buy-filters"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'design', label: 'Design' },
                      { key: 'marketing', label: 'Marketing' },
                      { key: 'development', label: 'Development' },
                      { key: 'business', label: 'Business' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={categories[key as keyof typeof categories]}
                          onChange={() => handleCategoryChange(key as keyof typeof categories)}
                          className="w-5 h-5 border border-gray-900 rounded text-[#FF6B57] focus:ring-[#FF6B57]"
                        />
                        <span className="text-gray-900 font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Price</h3>
                  <div className="relative pt-2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="relative flex-1">
                        <div className="h-1 bg-gray-200 rounded-full border border-gray-900"></div>
                        <div
                          className="absolute h-1 bg-[#FF6B57] rounded-full top-0"
                          style={{
                            left: `${(priceRange[0] / 1000) * 100}%`,
                            right: `${100 - (priceRange[1] / 1000) * 100}%`,
                          }}
                        ></div>
                        <div
                          className="absolute w-5 h-5 bg-white border-2 border-[#FF6B57] rounded-full -top-2 cursor-pointer"
                          style={{ left: `${(priceRange[0] / 1000) * 100}%`, marginLeft: '-10px' }}
                        ></div>
                        <div
                          className="absolute w-5 h-5 bg-white border-2 border-[#FF6B57] rounded-full -top-2 cursor-pointer"
                          style={{ left: `${(priceRange[1] / 1000) * 100}%`, marginLeft: '-10px' }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-gray-900">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="available-filters"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Your group</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'purchased', label: 'Purchased' },
                      { key: 'issued', label: 'Issued to you' },
                      { key: 'free', label: 'Free' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={yourGroup[key as keyof typeof yourGroup]}
                          onChange={() => handleGroupChange(key as keyof typeof yourGroup)}
                          className="w-5 h-5 border border-gray-900 rounded text-[#FF6B57] focus:ring-[#FF6B57]"
                        />
                        <span className="text-gray-900 font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="flex-1">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {mockCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl border border-gray-900 p-4 flex flex-col"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 10px 0 0 rgba(17,24,39,1)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`${course.bgColor} h-40 rounded-2xl border border-gray-900 mb-4`}
                    ></div>

                    <div className="flex flex-col gap-3 flex-grow">
                      <span
                        className={`${getCategoryBgColor(course.category)} text-xs font-semibold px-3 py-1 rounded-full border border-gray-900 inline-block w-fit`}
                      >
                        {course.category}
                      </span>

                      <h3 className="text-lg font-bold text-gray-900 leading-snug">
                        {course.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-auto">
                        <img
                          src={course.authorAvatar}
                          alt={course.author}
                          className="w-6 h-6 rounded-full border border-gray-900"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {course.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {renderStars(course.rating)}
                        <span className="text-sm text-gray-600 font-medium">
                          {course.reviews} reviews
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-200">
                        <span className="text-2xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                        <motion.button
                          className="bg-[#FF6B57] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#FF5643] transition-colors border border-gray-900"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Enroll
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {mockCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl border border-gray-900 p-6 flex flex-col md:flex-row gap-6"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 10px 0 0 rgba(17,24,39,1)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`${course.bgColor} w-full md:w-64 h-32 rounded-2xl border border-gray-900 flex-shrink-0`}
                    ></div>

                    <div className="flex flex-col gap-2 flex-grow">
                      <span
                        className={`${getCategoryBgColor(course.category)} text-xs font-semibold px-3 py-1 rounded-full border border-gray-900 inline-block w-fit`}
                      >
                        {course.category}
                      </span>

                      <h3 className="text-xl font-bold text-gray-900">
                        {course.title}
                      </h3>

                      <p className="text-sm text-gray-600">{course.description}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <img
                          src={course.authorAvatar}
                          alt={course.author}
                          className="w-6 h-6 rounded-full border border-gray-900"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {course.author}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between gap-4 min-w-[140px]">
                      <div className="flex items-center gap-2">
                        {renderStars(course.rating)}
                        <span className="text-lg font-bold text-gray-900">
                          {course.reviews}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <span className="text-2xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                        <motion.button
                          className="bg-[#FF6B57] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#FF5643] transition-colors border border-gray-900"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Enroll
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
