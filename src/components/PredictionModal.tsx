import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw, Heart } from "lucide-react";
import type { PredictionResult } from "../types";

interface PredictionModalProps {
  prediction: PredictionResult | null;
  isOpen: boolean;
  onClose: () => void;
}

const PredictionModal: React.FC<PredictionModalProps> = ({
  prediction,
  isOpen,
  onClose,
}) => {
  if (!prediction) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 z-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </motion.button>

              <div className="grid md:grid-cols-2 h-full max-h-[80vh]">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative h-64 md:h-full"
                >
                  <img
                    src={prediction.imagePreview}
                    alt="Your dog"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Hearts */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 left-4"
                  >
                    <Heart size={24} className="text-white drop-shadow-lg" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-12 left-12"
                  >
                    <Heart size={16} className="text-pink-300 drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-purple-50 to-pink-50"
                >
                  <div className="text-center md:text-left">
                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight"
                    >
                      {prediction.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line"
                    >
                      {prediction.description}
                    </motion.p>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex justify-center md:justify-start"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onClose}
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                      >
                        <RefreshCw size={20} className="mr-2" />
                        Try Another Dog
                      </motion.button>
                    </motion.div>

                    {/* Timestamp */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-sm text-gray-500 mt-4"
                    >
                      Predicted on {prediction.timestamp.toLocaleDateString()}{" "}
                      at {prediction.timestamp.toLocaleTimeString()}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PredictionModal;
