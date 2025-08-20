import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const TermsOfService: React.FC = () => {
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
          Terms of Service
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
                Welcome to the website of Faraz Maqsood. By using this website
                and any tools, products, or services offered here, you agree to
                the following terms:
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Use of Service
              </h2>
              <p className="text-gray-700 mb-6">
                You may use this website and its tools for personal or business
                purposes, provided you comply with applicable laws. You agree
                not to use the services for illegal, harmful, or fraudulent
                activities.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Payments
              </h2>
              <p className="text-gray-700 mb-6">
                Payments and tips are processed securely via our payment partner
                (Paddle). By making a payment, you confirm that you are
                authorized to use the chosen payment method.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-gray-700 mb-6">
                All content on this site, including code, designs, and text,
                belongs to Faraz Maqsood unless otherwise stated. You may not
                copy, modify, or redistribute content without permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 mb-6">
                Services are provided "as is" without warranties of any kind. We
                do not guarantee uninterrupted or error-free availability.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-6">
                To the fullest extent permitted by law, Faraz Maqsood is not
                liable for any damages resulting from the use or inability to
                use this site or its services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Changes to Terms
              </h2>
              <p className="text-gray-700 mb-6">
                We may update these Terms occasionally. Continued use of our
                site means you accept the new Terms.
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

export default TermsOfService;
