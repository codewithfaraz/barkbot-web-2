import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";
import { Heart, Bone, X } from "lucide-react";
import "./App.css";
import { Link } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import SituationDescription from "./components/SituationDescription";
import PredictionModal from "./components/PredictionModal";
import PricingPage from "./components/PricingPage";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import Navbar from "./components/Navbar";
import type { AppState, DogData, PredictionResult } from "./types";
import { predictDogThoughts, generateId } from "./utils/llmService";

const initialDogData: DogData = {
  image: null,
  imagePreview: "",
  situation: "",
};

const initialAppState: AppState = {
  currentStep: "upload",
  dogData: initialDogData,
  prediction: null,
  isLoading: false,
  error: null,
};

// Main BarkBot Component
function BarkBotApp() {
  const [appState, setAppState] = useState<AppState>(initialAppState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const updateAppState = (updates: Partial<AppState>) => {
    setAppState((prev) => ({ ...prev, ...updates }));
  };

  const handleNextFromUpload = () => {
    updateAppState({ currentStep: "description" });
  };

  const handleBackToUpload = () => {
    updateAppState({ currentStep: "upload" });
  };

  const handlePredict = async () => {
    if (!appState.dogData.image || !appState.dogData.situation) return;

    updateAppState({ isLoading: true, error: null });

    try {
      const llmResponse = await predictDogThoughts(
        appState.dogData.image,
        appState.dogData.situation
      );

      const prediction: PredictionResult = {
        id: generateId(),
        imagePreview: appState.dogData.imagePreview,
        title: llmResponse.title,
        description: llmResponse.description,
        timestamp: new Date(),
      };

      updateAppState({
        prediction,
        isLoading: false,
        currentStep: "result",
      });

      setIsModalOpen(true);
    } catch (error) {
      updateAppState({
        error: "Failed to predict dog thoughts. Please try again!",
        isLoading: false,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAppState(initialAppState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  const openWelcomeModal = () => {
    setShowWelcomeModal(true);
  };

  return (
    <>
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
          onOpenWelcomeModal={openWelcomeModal}
        />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-base mt-4 px-4 sm:px-6 lg:px-8"
        >
          Discover what your dog is really thinking! 🧠✨
        </motion.div>

        {/* Main Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-4"
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                      appState.currentStep === "upload" ||
                      appState.currentStep === "description" ||
                      appState.currentStep === "predicting" ||
                      appState.currentStep === "result"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    📷
                  </div>
                  <span
                    className={`text-xs font-medium mt-1 ${
                      appState.currentStep === "upload" ||
                      appState.currentStep === "description" ||
                      appState.currentStep === "predicting" ||
                      appState.currentStep === "result"
                        ? "text-purple-600"
                        : "text-gray-400"
                    }`}
                  >
                    Upload
                  </span>
                </div>

                <div
                  className={`w-6 h-0.5 transition-colors ${
                    appState.currentStep === "description" ||
                    appState.currentStep === "predicting" ||
                    appState.currentStep === "result"
                      ? "bg-purple-500"
                      : "bg-gray-200"
                  }`}
                />

                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                      appState.currentStep === "description" ||
                      appState.currentStep === "predicting" ||
                      appState.currentStep === "result"
                        ? "bg-pink-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    📝
                  </div>
                  <span
                    className={`text-xs font-medium mt-1 ${
                      appState.currentStep === "description" ||
                      appState.currentStep === "predicting" ||
                      appState.currentStep === "result"
                        ? "text-pink-600"
                        : "text-gray-400"
                    }`}
                  >
                    Describe
                  </span>
                </div>

                <div
                  className={`w-6 h-0.5 transition-colors ${
                    appState.currentStep === "predicting" ||
                    appState.currentStep === "result"
                      ? "bg-pink-500"
                      : "bg-gray-200"
                  }`}
                />

                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                      appState.currentStep === "result"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    🧠
                  </div>
                  <span
                    className={`text-xs font-medium mt-1 ${
                      appState.currentStep === "result"
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    Predict
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {appState.error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 text-center"
                >
                  {appState.error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {appState.currentStep === "upload" && (
                <ImageUpload
                  key="upload"
                  dogData={appState.dogData}
                  setDogData={(data) => updateAppState({ dogData: data })}
                  onNext={handleNextFromUpload}
                />
              )}

              {appState.currentStep === "description" && (
                <SituationDescription
                  key="description"
                  dogData={appState.dogData}
                  setDogData={(data) => updateAppState({ dogData: data })}
                  onBack={handleBackToUpload}
                  onPredict={handlePredict}
                  isLoading={appState.isLoading}
                />
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Prediction Modal */}
        <PredictionModal
          prediction={appState.prediction}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative z-10 py-3 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm"
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

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
          onClick={closeWelcomeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-bold mb-2"
              >
                🐕 Welcome to BarkBot!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-purple-100"
              >
                Discover what your dog is really thinking!
              </motion.p>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  AI-Powered Dog Mind Reading
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Upload a photo of your dog and describe their situation. Our
                  advanced AI will predict exactly what your furry friend is
                  thinking!
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3 mb-6"
              >
                <div className="flex items-center text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Free predictions to get started</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced AI technology</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fun insights into your dog's mind</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Perfect for dog lovers everywhere</span>
                </div>
              </motion.div>

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={closeWelcomeModal}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
              >
                Start Exploring! 🐾
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Menu Portal */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50"
                style={{
                  zIndex: 2147483647,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl"
                style={{
                  zIndex: 2147483647,
                  position: "fixed",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <Bone size={28} className="text-orange-500 mr-2" />
                      <h2 className="text-xl font-bold text-gray-800">
                        BarkBot 🐕
                      </h2>
                      <Heart size={28} className="text-pink-500 ml-2" />
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={closeMobileMenu}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X size={24} className="text-gray-700" />
                    </motion.button>
                  </div>

                  <nav className="space-y-4">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
                    >
                      🏠 Home
                    </Link>
                    <button
                      onClick={() => {
                        closeMobileMenu();
                        setShowWelcomeModal(true);
                      }}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors text-left w-full"
                    >
                      ❓ About
                    </button>
                    <Link
                      to="/pricing"
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
                    >
                      💰 Pricing
                    </Link>
                    <Link
                      to="/terms"
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
                    >
                      📋 Terms of Service
                    </Link>
                    <Link
                      to="/privacy"
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
                    >
                      🔒 Privacy Policy
                    </Link>
                    <Link
                      to="/refund"
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
                    >
                      💳 Refund Policy
                    </Link>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BarkBotApp />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
