"use client";

import { useRef, useEffect, useState } from "react";

export const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
  outerClassname = "",
  innerClassname = "",
  activeOuterClassname = "",
  activeInnerClassname = "",
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  let outer = outerClassname;
  let inner = innerClassname;
  if (isOpen) {
    outer = `${activeOuterClassname} ${outerClassname}`.trim();
    inner = `${innerClassname} ${activeInnerClassname}`.trim();
  }

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
    <div className={outer}>
      <button className={inner} onClick={onClick}>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="ml-2 w-full">{title}</span>
      </button>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out`}
        style={{
          maxHeight: `${height}px`,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};
