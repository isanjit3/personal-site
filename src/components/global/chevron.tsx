"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollChevronProps {
  targetId: string;
}

const ScrollChevron: React.FC<ScrollChevronProps> = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to the target component when the chevron is clicked
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Set a timeout to fade in the chevron icon after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
      {/* Chevron Icon with fade-in effect */}
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown size={48} className="cursor-pointer" onClick={handleScroll} />
      </div>
    </div>
  );
};

export default ScrollChevron;