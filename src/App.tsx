import { useState } from "react";
import Variant1 from "./components/Variant1";
import Variant2 from "./components/Variant2";
import Variant3 from "./components/Variant3";
import Variant4 from "./components/Variant4";
import Variant5 from "./components/Variant5";
import Variant6 from "./components/Variant6";
import Variant7 from "./components/Variant7";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, FileText, Shield, Sparkles, Zap, Target, Monitor } from "lucide-react";

export default function App() {
  const [variant, setVariant] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(7);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {variant === 1 && <Variant1 />}
          {variant === 2 && <Variant2 />}
          {variant === 3 && <Variant3 />}
          {variant === 4 && <Variant4 />}
          {variant === 5 && <Variant5 />}
          {variant === 6 && <Variant6 />}
          {variant === 7 && <Variant7 />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
