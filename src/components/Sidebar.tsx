import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Folder,
  PenTool,
  Mail,
  Layout,
  Bookmark,
  Headphones,
  Settings,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  activeIcon: string;
  onIconClick: (icon: string) => void;
}

export default function Sidebar({ activeIcon, onIconClick }: SidebarProps) {
  const icons = [
    { id: 'grid', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'folder', icon: Folder, label: 'Courses' },
    { id: 'pen', icon: PenTool, label: 'Tasks' },
    { id: 'mail', icon: Mail, label: 'Messages' },
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'bookmark', icon: Bookmark, label: 'Saved' },
    { id: 'headphones', icon: Headphones, label: 'Support' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div
      className="hidden md:flex flex-col w-24 h-[100dvh] bg-[#2D2F33] rounded-r-[40px] items-center py-6 fixed left-0 top-0 z-50 shadow-2xl"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Контейнер с иконками (скроллится, если не хватает места) */}
      <div 
        className="flex flex-col gap-4 flex-1 overflow-y-auto w-full items-center pt-2 pb-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {icons.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeIcon === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className={`p-3.5 rounded-xl transition-all duration-200 flex-shrink-0 ${
                isActive
                  ? 'bg-[#FFD566] text-gray-900'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={item.label}
            >
              <IconComponent
                size={24}
                className={isActive ? 'text-gray-900' : ''}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Кнопка выхода всегда прижата к низу */}
      <div className="pt-4 mt-auto">
        <motion.button
          className="p-3.5 rounded-xl text-gray-400 hover:text-white transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Logout"
        >
          <LogOut size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
}
