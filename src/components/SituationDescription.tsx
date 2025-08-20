import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import type { DogData } from "../types";

interface SituationDescriptionProps {
  dogData: DogData;
  setDogData: (data: DogData) => void;
  onBack: () => void;
  onPredict: () => void;
  isLoading: boolean;
}

const SituationDescription: React.FC<SituationDescriptionProps> = ({
  dogData,
  setDogData,
  onBack,
  onPredict,
  isLoading,
}) => {
  const maxLength = 500;
  const minLength = 10;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setDogData({
        ...dogData,
        situation: text,
      });
    }
  };

  const isValid =
    dogData.situation.length >= minLength &&
    dogData.situation.length <= maxLength;
  const remainingChars = maxLength - dogData.situation.length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-gray-800 mb-3"
        >
          📝 Describe the Situation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-base"
        >
          What's happening with your dog? Be as descriptive as possible!
        </motion.p>
      </div>

      {/* Dog Image Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6"
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src={dogData.imagePreview}
            alt="Your dog"
            className="w-full h-36 object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>

      {/* Text Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What's your dog thinking about? 🐾
        </label>
        <div className="relative">
          <textarea
            value={dogData.situation}
            onChange={handleTextChange}
            placeholder="e.g., My dog is staring at me while I'm eating dinner... or My dog just came back from a long walk and is exhausted..."
            className="w-full h-32 p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-colors bg-white/50 backdrop-blur-sm"
            disabled={isLoading}
          />

          {/* Character Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-2 right-2 text-sm"
          >
            <span
              className={`font-medium ${
                remainingChars < 50
                  ? remainingChars < 20
                    ? "text-red-500"
                    : "text-orange-500"
                  : "text-gray-500"
              }`}
            >
              {remainingChars}
            </span>
            <span className="text-gray-400"> / {maxLength}</span>
          </motion.div>
        </div>

        {/* Validation Message */}
        {!isValid && dogData.situation.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm mt-2"
          >
            Please write at least {minLength} characters to help us understand
            your dog's situation.
          </motion.p>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          disabled={isLoading}
          className="flex items-center justify-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: isValid ? 1.05 : 1 }}
          whileTap={{ scale: isValid ? 0.95 : 1 }}
          onClick={onPredict}
          disabled={!isValid || isLoading}
          className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform disabled:hover:scale-100 disabled:cursor-not-allowed flex-1"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
            />
          ) : (
            <Send size={20} className="mr-2" />
          )}
          {isLoading ? "Reading Dog's Mind..." : "Predict Thoughts! 🧠"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SituationDescription;
