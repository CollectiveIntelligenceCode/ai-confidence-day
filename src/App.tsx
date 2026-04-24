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
  const [variant, setVariant] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);

  return (
    <div className="relative">
      {/* Variant Switcher - Floating UI for preview */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-brand-border p-2 rounded-full shadow-2xl flex items-center gap-2">
        <button 
          onClick={() => setVariant(1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 1 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <FileText className="w-3 h-3" />
          Editorial
        </button>
        <button 
          onClick={() => setVariant(2)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 2 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <LayoutGrid className="w-3 h-3" />
          Strategic
        </button>
        <button 
          onClick={() => setVariant(3)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 3 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <Shield className="w-3 h-3" />
          Safe House
        </button>
        <button 
          onClick={() => setVariant(4)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 4 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <Sparkles className="w-3 h-3" />
          Mastery
        </button>
        <button 
          onClick={() => setVariant(5)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 5 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <Zap className="w-3 h-3" />
          Clarity (Dark)
        </button>
        <button 
          onClick={() => setVariant(6)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 6 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <Target className="w-3 h-3" />
          Clarity (Light)
        </button>
        <button 
          onClick={() => setVariant(7)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${variant === 7 ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <Monitor className="w-3 h-3" />
          CXO Landing
        </button>
      </div>

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
