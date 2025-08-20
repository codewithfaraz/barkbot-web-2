import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const RefundPolicy: React.FC = () => {
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
          Refund Policy
        </h1>
        <p className="text-gray-500 text-sm mt-2">Last updated: 20/08/2025</p>
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
                Thank you for using my services. I strive to provide the best
                tools and experiences. However, if you are not satisfied with
                your purchase, here is how I handle refunds:
              </p>

              <ul className="text-gray-700 mb-6 ml-6">
                <li className="mb-2">
                  Refunds are available within 7 days of purchase.
                </li>
                <li className="mb-2">
                  No refunds will be provided after this period unless required
                  by law.
                </li>
                <li className="mb-2">
                  Digital services, once accessed or downloaded, are generally
                  not refundable.
                </li>
                <li className="mb-6">
                  If you believe you are eligible for a refund, please contact
                  me directly.
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:farazmaqsood97@gmail.com"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      farazmaqsood97@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href="tel:+923246827267"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      +92 324 6827267
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-gray-700">
                If you have any questions about this Refund Policy, feel free to
                contact me using the information above.
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

export default RefundPolicy;
