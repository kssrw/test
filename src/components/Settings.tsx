import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Camera, Moon, Sparkles, Layout, Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [username, setUsername] = useState('@k_velasquez');
  const [toggles, setToggles] = useState({
    darkMode: false,
    animations: true,
    compactView: false,
  });

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

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 h-full"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-gray-900">
        Settings
      </motion.h1>

      {/* Используем items-stretch, чтобы левая колонка тянулась по высоте правой */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* ЛЕВОЕ МЕНЮ НАВИГАЦИИ */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-white rounded-3xl border border-gray-900 py-6 px-4"
        >
          <nav className="space-y-2">
            {[
              { id: 'general', label: 'General', icon: SettingsIcon },
              { id: 'account', label: 'Account', icon: User },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'privacy', label: 'Privacy & Security', icon: Lock },
            ].map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-semibold text-left ${
                    isActive
                      ? 'bg-orange-50 text-[#FF6B57] border-l-4 border-l-[#FF6B57] shadow-sm'
                      : 'border-l-4 border-l-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-[#FF6B57]' : 'text-gray-500'} />
                  {label}
                </button>
              );
            })}
          </nav>
        </motion.div>

        {/* ПРАВАЯ ОБЛАСТЬ КОНТЕНТА */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 bg-white rounded-3xl border border-gray-900 p-8 flex flex-col"
        >
          {activeTab === 'general' && (
            <div className="space-y-8 flex-1">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">General</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: 'Dark Mode',
                    description: 'Switch to dark theme',
                    key: 'darkMode' as const,
                    icon: Moon,
                  },
                  {
                    label: 'Enable UI Animations',
                    description: 'Show smooth transitions and animations',
                    key: 'animations' as const,
                    icon: Sparkles,
                  },
                  {
                    label: 'Compact View',
                    description: 'Use a more compact layout',
                    key: 'compactView' as const,
                    icon: Layout,
                  },
                ].map(({ label, description, key, icon: Icon }) => (
                  <motion.div
                    key={key}
                    className="flex items-center justify-between p-5 rounded-2xl border border-gray-900 hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                        <Icon size={24} className="text-gray-900" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{label}</p>
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggle(key)}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors border border-gray-900 ${
                        toggles[key] ? 'bg-[#FF6B57]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white border border-gray-900 transition-transform ${
                          toggles[key] ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-8 flex-1 flex flex-col">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Account</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-8">
                {/* Блок с аватаркой (слева) */}
                <div className="flex flex-col items-center">
                  <p className="text-sm font-bold text-gray-900 mb-4 w-full text-left md:text-center">Profile Information</p>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                      alt="Kacie Velasquez"
                      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_0_0_2px_rgba(17,24,39,1)]"
                    />
                    <button className="absolute bottom-0 right-2 bg-[#FF6B57] text-white p-3 rounded-full border-4 border-white hover:bg-[#FF5643] transition-colors shadow-sm">
                      <Camera size={20} />
                    </button>
                  </div>
                </div>

                {/* Блок с инпутами (справа) */}
                <div className="space-y-6 pt-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Kacie Velasquez"
                      disabled
                      className="w-full px-4 py-3 border border-gray-900 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="k.velasquez@email.com"
                      disabled
                      className="w-full px-4 py-3 border border-gray-900 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-900 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/50"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 mt-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Password Management</h3>
                <motion.button
                  className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Change Password
                </motion.button>
              </div>

              <motion.button
                className="w-full bg-[#FF6B57] text-white font-bold rounded-2xl border border-gray-900 py-4 hover:bg-[#FF5643] transition-colors mt-8 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Save Changes
              </motion.button>
            </div>
          )}

          {(activeTab === 'notifications' || activeTab === 'privacy') && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-gray-500 font-medium text-lg">Coming soon...</div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
