import { motion } from "motion/react";
import { type ReactNode, forwardRef } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  layout?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  },
};

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(function BentoCard(
  { children, className = "", title, subtitle, icon, layout = false },
  ref
) {
  return (
    <motion.div
      ref={ref}
      layout={layout}
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-[2rem] border border-[#e8e6e3] bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-[#d4d1cd] ${className}`}
    >
      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>
      
      {/* Decorative background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#faf9f7] opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
        aria-hidden="true" 
      />
    </motion.div>
  );
});
