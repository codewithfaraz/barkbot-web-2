import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const PrivacyPolicy: React.FC = () => {
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
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Last updated: August 20, 2025
        </p>
      </motion.div>

      {/* Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Privacy Policy explains how Faraz Maqsood collects, uses,
                and protects your information when you use this website and any
                associated services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <ul className="text-gray-700 mb-6 ml-6">
                <li className="mb-2">
                  When you visit this site, basic analytics data may be
                  collected (such as pages visited, browser type, or device).
                </li>
                <li>
                  When you make a payment, our partner (Paddle) collects your
                  name, email, and payment details. We do not store your full
                  payment information.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. How We Use Information
              </h2>
              <ul className="text-gray-700 mb-6 ml-6">
                <li className="mb-2">
                  To process payments and provide receipts.
                </li>
                <li className="mb-2">To improve the website and services.</li>
                <li>
                  To communicate with you if needed about your payment or
                  account.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Data Sharing
              </h2>
              <ul className="text-gray-700 mb-6 ml-6">
                <li className="mb-2">
                  Payments are processed by Paddle, who acts as the payment
                  processor and merchant of record.
                </li>
                <li>
                  We do not sell or rent your personal data to third parties.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Security
              </h2>
              <p className="text-gray-700 mb-6">
                Reasonable measures are taken to protect your information.
                Sensitive payment details are handled securely by Paddle.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-6">
                You can request that your personal data be corrected or deleted
                by contacting us at farazmaqsood97@gmail.com.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-6">
                This Privacy Policy may be updated from time to time. Updates
                will be posted on this page, and continued use of this website
                means you accept the updated policy.
              </p>
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

export default PrivacyPolicy;
