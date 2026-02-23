import { motion } from 'framer-motion';

interface LessonRowProps {
  number: string;
  title: string;
  subtitle: string;
  teacher: {
    name: string;
    avatar: string;
  };
  duration: string;
  index: number;
  isLast: boolean;
}

export default function LessonRow({
  number,
  title,
  subtitle,
  teacher,
  duration,
  index,
  isLast,
}: LessonRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`py-4 ${!isLast ? 'border-b border-gray-200' : ''}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-bold text-gray-900">
            {number}. {title}
          </p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-900 min-w-[100px]">
            {teacher.name}
          </span>
        </div>

        <span className="text-sm text-gray-600 min-w-[80px] text-right">
          {duration}
        </span>
      </div>
    </motion.div>
  );
}
