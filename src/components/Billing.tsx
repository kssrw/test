import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard';
  lastFour: string;
  expiry: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'visa',
    lastFour: '4589',
    expiry: '12/28',
  },
  {
    id: '2',
    type: 'mastercard',
    lastFour: '1234',
    expiry: '09/26',
  },
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: 'Feb 11, 2026',
    description: 'Pro Annual Subscription',
    amount: 120.0,
    status: 'paid',
  },
  {
    id: '2',
    date: 'Jan 15, 2026',
    description: 'Course: Advanced UI Design',
    amount: 45.0,
    status: 'paid',
  },
  {
    id: '3',
    date: 'Dec 10, 2025',
    description: 'Monthly Subscription',
    amount: 12.0,
    status: 'paid',
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

export default function Billing() {
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
        Payments & Billing
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-[#E9D5FF] rounded-3xl border border-gray-900 p-8"
        >
          <div className="flex flex-col h-full">
            <p className="text-gray-700 text-sm font-medium mb-2">Current Plan</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lumen Pro Annual
            </h2>
            <p className="text-4xl font-bold text-gray-900 mb-4">
              $120<span className="text-lg font-normal text-gray-700">/year</span>
            </p>
            <p className="text-gray-700 text-sm mb-8 mt-auto">
              Next billing date: Feb 11, 2027
            </p>
            <motion.button
              className="w-full bg-[#FF6B57] text-white font-bold rounded-2xl py-3 px-6 hover:bg-[#FF5643] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Manage Subscription
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-white rounded-3xl border border-gray-900 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Payment Methods
          </h3>

          <div className="space-y-4 mb-8">
            <p className="text-sm font-semibold text-gray-600">Saved Cards</p>
            {mockPaymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                variants={itemVariants}
                className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  {method.type === 'visa' ? (
                    <div className="w-12 h-8 bg-gradient-to-br from-[#1434CB] to-[#1434CB] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">VISA</span>
                    </div>
                  ) : (
                    <div className="w-12 h-8 flex items-center gap-0.5">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 -ml-3"></div>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">
                      **** {method.lastFour}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Exp. {method.expiry}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            variants={itemVariants}
            className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-900 rounded-2xl text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={20} />
            Add Payment Method
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-white rounded-3xl border border-gray-900 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Billing Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold text-gray-900">$120.00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700">Tax</span>
              <span className="font-semibold text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between items-center py-4 pt-4">
              <span className="font-bold text-gray-900 text-lg">Total Due</span>
              <span className="font-bold text-gray-900 text-lg">$120.00</span>
            </div>
            <motion.button
              className="w-full bg-[#FF6B57] text-white font-bold rounded-2xl py-3 px-6 hover:bg-[#FF5643] transition-colors mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pay Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl border border-gray-900 p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Transaction History
        </h3>

        <div className="space-y-1">
          <div className="grid grid-cols-4 gap-4 px-4 py-3 text-sm font-semibold text-gray-600 border-b border-gray-200">
            <span>Date</span>
            <span>Description</span>
            <span className="text-center">Status</span>
            <span className="text-right">Amount</span>
          </div>

          {mockTransactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              variants={itemVariants}
              className="grid grid-cols-4 gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0 items-center"
            >
              <span className="font-medium text-gray-900">{transaction.date}</span>
              <span className="text-gray-700">{transaction.description}</span>
              <div className="flex justify-center">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    transaction.status === 'paid'
                      ? 'bg-[#DCFCE7] text-[#166534]'
                      : transaction.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.status.charAt(0).toUpperCase() +
                    transaction.status.slice(1)}
                </span>
              </div>
              <span className="text-right font-semibold text-gray-900">
                ${transaction.amount.toFixed(2)}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#"
          className="inline-block mt-8 text-[#FF6B57] font-semibold hover:underline"
          whileHover={{ x: 5 }}
        >
          View all transactions
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
