"use client";

import { useRef, useEffect, useState } from "react";

export const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const currentRef = contentRef.current; // Capture the current value of the ref

    const updateHeight = () => {
      if (isOpen && currentRef) {
        setHeight(currentRef.scrollHeight);
      } else {
        setHeight(0);
      }
    };

    updateHeight();

    // Use ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [isOpen, children]);

  return (
    <div className="mb-4 rounded-lg border border-gray-300">
      <button
        className="flex w-full items-center bg-gray-100 p-4 font-semibold hover:bg-gray-200 focus:outline-none"
        onClick={onClick}
      >
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
        <span className="ml-2 w-full">{title}</span>
      </button>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out`}
        style={{
          maxHeight: `${height}px`,
        }}
      >
        <div ref={contentRef} className="bg-white p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
