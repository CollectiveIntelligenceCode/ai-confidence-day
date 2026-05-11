import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Variant1 from "./components/Variant1";
import Variant2 from "./components/Variant2";
import Variant3 from "./components/Variant3";
import Variant4 from "./components/Variant4";
import Variant5 from "./components/Variant5";
import Variant6 from "./components/Variant6";
import Variant7 from "./components/Variant7";
import ConsultantVariant7 from "./components/consultants/ConsultantVariant7";
import ApplyConsultants from "./components/ApplyConsultants";
import BetterFitCXO from "./components/BetterFitCXO";
import ThankYou from "./components/ThankYou";

import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, FileText, Shield, Sparkles, Zap, Target, Monitor } from "lucide-react";

function VariantSelector({ current, onSelect, variants, prefix = "" }: { current: number, onSelect: (v: number) => void, variants: any[], prefix?: string }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-brand-border p-2 rounded-full shadow-2xl flex items-center gap-2">
      {variants.map((v) => (
        <button 
          key={v.id}
          onClick={() => onSelect(v.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${current === v.id ? "bg-brand-primary text-white" : "text-gray-400 hover:text-brand-primary"}`}
        >
          <v.icon className="w-3 h-3" />
          {v.label}
        </button>
      ))}
    </div>
  );
}

const variantConfig = [
  { id: 1, label: "Editorial", icon: FileText, component: Variant1 },
  { id: 2, label: "Strategic", icon: LayoutGrid, component: Variant2 },
  { id: 3, label: "Safe House", icon: Shield, component: Variant3 },
  { id: 4, label: "Mastery", icon: Sparkles, component: Variant4 },
  { id: 5, label: "Clarity (D)", icon: Zap, component: Variant5 },
  { id: 6, label: "Clarity (L)", icon: Target, component: Variant6 },
  { id: 7, label: "CXO Landing", icon: Monitor, component: Variant7 },
];


function ConsultantWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ConsultantVariant7 />
    </motion.div>
  );
}

function MainWrapper() {
  const [variant, setVariant] = useState<number>(7);
  const location = useLocation();
  const isConsultantRoute = location.pathname.startsWith('/consultants');

  const ActiveComponent = variantConfig.find(v => v.id === variant)?.component || Variant7;

  if (isConsultantRoute) return null; // Handled by other route

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
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
      {/* Navigator is hidden by default for CXO according to previous request, 
          uncomment below if you want it back for Main too */}
      {/* <VariantSelector current={variant} onSelect={setVariant} variants={variantConfig} /> */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWrapper />} />
        <Route path="/cxo" element={<MainWrapper />} />
        <Route path="/consultants" element={<ConsultantWrapper />} />
        <Route path="/apply/consultants" element={<ApplyConsultants />} />
        <Route path="/apply/better-fit" element={<BetterFitCXO />} />
        <Route path="/thank-you/cxo" element={<ThankYou variant="cxo" />} />
        <Route path="/thank-you/consultants" element={<ThankYou variant="consultants" />} />
      </Routes>
    </BrowserRouter>
  );
}
