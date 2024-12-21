import Link from "next/link";
import { LinkButton } from "./link-button";

export const Hero = () => (
  <div
    style={{
      backgroundImage: "url('/images/home-colosseum.jpg')",
      backgroundSize: "cover",
      width: "100%",
      height: "480px",
      paddingTop: "340px",
    }}
  >
    <div className="flex justify-center">
      <LinkButton href="/speisekarte">Speisen & Getränke</LinkButton>
    </div>
  </div>
);
