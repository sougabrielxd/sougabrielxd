import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  const fileUrl = `/certificates/${cert.file}`;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          key="modal-content"
          className="relative bg-white dark:bg-black rounded-2xl shadow-2xl max-w-4xl w-full p-6 mx-4 border border-black/20 dark:border-red-500/30"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">
              {cert.name}
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-red-500/20 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Preview */}
          <div className="w-full max-h-[70vh] overflow-hidden rounded-xl border border-black/20 dark:border-red-500/20">
            {cert.file.endsWith(".pdf") ? (
              <iframe
                src={fileUrl}
                className="w-full h-[70vh] rounded-lg"
              />
            ) : (
              <img
                src={fileUrl}
                alt={cert.name}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-6">
            <a
              href={fileUrl}
              download
              className="flex items-center gap-2 bg-black text-white dark:bg-red-500 dark:text-black px-4 py-2 rounded-lg font-medium hover:opacity-80 transition"
            >
              <Download className="w-5 h-5" />
              Baixar Certificado
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
