"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname === "/") {
      router.push("/de");
    }
  }, [router]);
  return (
    <html>
      <body>
        <p>Redirecting to /de</p>
      </body>
    </html>
  );
}
