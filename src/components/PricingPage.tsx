import React, { useState } from "react";
import { motion } from "framer-motion";

import { Check, Star, Zap } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PricingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-8 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Choose Your Plan 🐕
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Discover what your dog is really thinking with our mind-reading AI!
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 text-lg">
              Discover what your dog is really thinking with our mind-reading
              AI!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Free Plan
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-gray-600">
                  Perfect for trying out our service
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>5 predictions per day</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>Basic dog mind reading</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>Standard response quality</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-400 mr-3" size={20} />
                  <span className="line-through">No prediction history</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="text-gray-400 mr-3" size={20} />
                  <span className="line-through">No unlimited predictions</span>
                </li>
              </ul>

              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  Get Started Free
                </motion.button>
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-purple-500 relative"
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Pro Plan
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  $9.99
                </div>
                <p className="text-gray-600">For serious dog lovers</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-purple-500 mr-3" size={20} />
                  <span className="font-semibold">Unlimited predictions</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-purple-500 mr-3" size={20} />
                  <span className="font-semibold">
                    Lifetime prediction history
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="text-purple-500 mr-3" size={20} />
                  <span>Advanced AI responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-purple-500 mr-3" size={20} />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-purple-500 mr-3" size={20} />
                  <span>Early access to new features</span>
                </li>
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Upgrade to Pro
              </motion.button>
            </motion.div>
          </div>

          {/* Features Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Why Choose BarkBot Pro?
            </h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">
                  Unlimited Access
                </h5>
                <p className="text-gray-600 text-sm">
                  Never run out of predictions for your furry friends
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-pink-600" size={24} />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">
                  Complete History
                </h5>
                <p className="text-gray-600 text-sm">
                  Keep track of all your dog's thoughts forever
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="text-orange-600" size={24} />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">
                  Premium Experience
                </h5>
                <p className="text-gray-600 text-sm">
                  Enhanced AI responses and priority features
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 py-4 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-600 text-sm"
          >
            Made with 🐾 for dog lovers everywhere
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

export default PricingPage;
