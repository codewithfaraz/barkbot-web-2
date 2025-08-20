import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import type { FileRejection } from "react-dropzone";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { DogData, DragState } from "../types";

interface ImageUploadProps {
  dogData: DogData;
  setDogData: (data: DogData) => void;
  onNext: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  dogData,
  setDogData,
  onNext,
}) => {
  const [dragState, setDragState] = useState<DragState>({
    isDragActive: false,
    isDragReject: false,
    isDragAccept: false,
  });

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const preview = URL.createObjectURL(file);

        setDogData({
          ...dogData,
          image: file,
          imagePreview: preview,
        });
      } else if (fileRejections.length > 0) {
        alert("Please select a valid image file (JPEG, PNG, GIF, or WebP)");
      }
    },
    [dogData, setDogData]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxFiles: 1,
    onDragEnter: () =>
      setDragState((prev) => ({ ...prev, isDragActive: true })),
    onDragLeave: () =>
      setDragState((prev) => ({ ...prev, isDragActive: false })),
    onDragOver: () => setDragState((prev) => ({ ...prev, isDragActive: true })),
  });

  const removeImage = () => {
    if (dogData.imagePreview) {
      URL.revokeObjectURL(dogData.imagePreview);
    }
    setDogData({
      ...dogData,
      image: null,
      imagePreview: "",
    });
  };

  const getBorderColor = () => {
    if (dragState.isDragReject) return "border-red-400 bg-red-50";
    if (dragState.isDragAccept) return "border-green-400 bg-green-50";
    if (dragState.isDragActive) return "border-blue-400 bg-blue-50";
    return "border-gray-300 hover:border-blue-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          🐾 Upload Your Dog's Photo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-base"
        >
          Let's see what your furry friend is thinking!
        </motion.p>
      </div>

      <AnimatePresence>
        {dogData.imagePreview ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative mb-6"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={dogData.imagePreview}
                alt="Your dog"
                className="w-full h-72 object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={removeImage}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={onNext}
              disabled={!dogData.image}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed mt-6"
            >
              Next: Describe the Situation 🐕
            </motion.button>
          </motion.div>
        ) : (
          <div
            {...getRootProps()}
            className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${getBorderColor()}`}
          >
            <input {...getInputProps()} />
            <motion.div
              animate={{
                scale: dragState.isDragActive ? 1.1 : 1,
                y: dragState.isDragActive ? -5 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <motion.div
                  animate={{
                    rotate: dragState.isDragActive ? 360 : 0,
                    scale: dragState.isDragActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageIcon size={80} className="mx-auto text-gray-400 mb-4" />
                </motion.div>
                <motion.h3
                  animate={{ scale: dragState.isDragActive ? 1.05 : 1 }}
                  className="text-xl font-semibold text-gray-700 mb-2"
                >
                  {dragState.isDragActive
                    ? "Drop your dog's photo here!"
                    : "Drag & drop your dog's photo"}
                </motion.h3>
                <p className="text-gray-500 mb-4">or click to browse files</p>
                <p className="text-sm text-gray-400">
                  Supports: JPEG, PNG, GIF, WebP
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                <Upload size={20} className="mr-2" />
                Choose Photo
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageUpload;
