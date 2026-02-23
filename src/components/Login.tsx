import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, EyeOff, Eye } from 'lucide-react';
import FloatingIllustration from './FloatingIllustration';
import GoogleIcon from './GoogleIcon';

// Добавляем пропс onLogin, чтобы передать команду перехода на дэшборд
interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Функция, которая сработает при отправке формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    onLogin(); // Вызываем переход на дэшборд
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <motion.div
        className="w-full md:w-1/2 bg-[#2B2D42] relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FloatingIllustration />
        <motion.div
          className="relative z-10 text-center max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Unlock Your Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Join thousands of students learning new skills every day.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Lumen</h2>
          </div>
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Welcome Back!</h1>
            <p className="text-gray-600 text-base">Please enter your details to sign in.</p>
          </div>
          <motion.button
            type="button"
            onClick={onLogin} // Сделаем так, чтобы и кнопка Google пускала в дэшборд
            className="w-full bg-white border border-gray-300 rounded-full py-3.5 px-6 flex items-center justify-center gap-3 text-gray-700 font-medium hover:shadow-md transition-shadow duration-200 mb-6"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </motion.button>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or sign in with email</span>
            </div>
          </div>
          
          {/* Добавили onSubmit={handleSubmit} к форме */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/50 focus:border-[#FF6B57] transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/50 focus:border-[#FF6B57] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-[#FF6B57] hover:underline font-medium">
                Forgot password?
              </a>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#FF6B57] text-white font-bold rounded-full py-4 px-6 shadow-lg shadow-[#FF6B57]/40 hover:bg-[#FF5643] transition-colors duration-200 mt-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </form>
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{' '}
            <a href="#" className="text-gray-900 font-bold hover:underline">
              Sign up
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
