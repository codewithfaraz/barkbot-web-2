import React from "react";
import { motion } from "framer-motion";
import { Heart, Bone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onOpenWelcomeModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onOpenWelcomeModal,
}) => {
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="mr-2"
            >
              <Bone size={28} className="text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
            >
              BarkBot 🐕
            </motion.h1>

            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="ml-2"
            >
              <Heart size={28} className="text-pink-500" />
            </motion.div>
          </Link>

          <nav className="flex items-center space-x-6">
            <button
              onClick={onOpenWelcomeModal}
              className="font-medium transition-colors duration-200 text-gray-600 hover:text-purple-600 cursor-pointer"
            >
              About
            </button>
            <Link
              to="/pricing"
              className={`font-medium transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/terms"
              className={`font-medium transition-colors duration-200 text-sm ${
                isActive("/terms") || isActive("/terms-of-service")
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className={`font-medium transition-colors duration-200 text-sm ${
                isActive("/privacy") || isActive("/privacy-policy")
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/refund"
              className={`font-medium transition-colors duration-200 text-sm ${
                isActive("/refund") || isActive("/refund-policy")
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Refund
            </Link>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="mr-2"
            >
              <Bone size={24} className="text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
            >
              BarkBot 🐕
            </motion.h1>

            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="ml-2"
            >
              <Heart size={24} className="text-pink-500" />
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
