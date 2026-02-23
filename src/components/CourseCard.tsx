import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

interface CourseCardProps {
  bgColor: string;
  tagColor: string;
  tagTextColor?: string;
  progressColor?: string;
  tagText: string;
  title: string;
  progress: number;
  total: number;
  avatars: string[];
  count: number;
  index: number;
}

export default function CourseCard({
  bgColor,
  tagColor,
  tagTextColor = 'text-gray-900',
  progressColor = 'bg-[#FF6B57]',
  tagText,
  title,
  progress,
  total,
  avatars,
  count,
  index,
}: CourseCardProps) {
  const progressPercent = (progress / total) * 100;

  return (
    <motion.div
      className={`${bgColor} rounded-3xl p-6 flex flex-col gap-4 h-full min-h-[300px] border border-gray-900`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between">
        <span
          className={`${tagColor} ${tagTextColor} text-xs font-bold px-3 py-1 rounded-full border border-gray-900`}
        >
          {tagText}
        </span>
        <Bookmark size={24} className="text-gray-900" fill="currentColor" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 leading-snug flex-grow mt-2">
        {title}
      </h3>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-800">Progress</span>
          <span className="text-xs font-semibold text-gray-800">
            {progress}/{total} lessons
          </span>
        </div>
        <div className="w-full bg-gray-900/10 rounded-full h-1.5 border border-gray-900/20">
          <div
            className={`${progressColor} h-1.5 rounded-full transition-all duration-300`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1">
          {avatars.map((avatar, idx) => (
            <img
              key={idx}
              src={avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-900 -ml-2 object-cover"
              style={{
                marginLeft: idx === 0 ? 0 : -8,
              }}
            />
          ))}
          {count > 0 && (
            <div className="w-8 h-8 rounded-full bg-[#FFD566] border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-gray-900 -ml-2">
              +{count}
            </div>
          )}
        </div>
        <motion.button
          className="bg-[#FF6B57] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#FF5643] transition-colors shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
}
