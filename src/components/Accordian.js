"use client";
import React, { useState } from "react";

export function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {children.map((child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onClick: () => toggleIndex(index),
        }),
      )}
    </div>
  );
}
