// page.tsx

import GradientReveal from '@/components/sections/gradient'; // Import your GradientReveal component

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div id="gradient-layer" className="fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">Moving Gradient Background</h1>
      </div>
    </div>
  );
}