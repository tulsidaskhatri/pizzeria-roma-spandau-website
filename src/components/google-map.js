"use client";
import { useState, useEffect } from "react";

const GoogleMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <section className="px-4 py-7 sm:px-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d151.67679576880855!2d13.204604219974408!3d52.536532843281904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8575a7b0da47d%3A0x70210911011830ba!2sPizzeria%20Roma%20Spandau%20-%20Pizza%2C%20Pasta%2C%20Salat%20und%20Florida%20Eis!5e0!3m2!1sen!2sus!4v1734826841069!5m2!1sen!2sus"
        style={{ border: 0, width: "100%", height: "400px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
