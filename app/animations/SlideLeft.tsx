import { motion, AnimatePresence } from "framer-motion";

export default function SlideLeft({ children, isVisible }: { children: React.ReactNode, isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )	}
    </AnimatePresence>
  );
}
