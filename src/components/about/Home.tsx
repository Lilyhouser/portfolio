"use client";
import BrokenGlass from "@/src/components/about/BrokenGlass";
import "./styles.css";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { PiPhoneCallThin } from "react-icons/pi";
import { useContext } from "react";
import { StoreContext } from "@/src/context";
import { ROUTER } from "@/src/router";

export default function Home() {
  const { handleChangePath } = useContext(StoreContext);
  return (
    <div className="About PageWrapper absolute w-screen h-screen">
      <BrokenGlass />
      <h1 className="About-header">Hello. My name is Lily</h1>
      <p className="About-sub-header">I&apos;m a web developer</p>
      <div className="About-contact">
        <div className="About-contact-item">
          <CiMail size={24} />
          <Link
            onClick={() => handleChangePath("contact")}
            href={ROUTER.find((item) => item.name === "contact")?.url || "/"}
          >
            houselily010@gmail.com
          </Link>
        </div>
        <div className="About-contact-item">
          <PiPhoneCallThin size={24} />
          <span>0833803102</span>
        </div>
      </div>
      <button className="bottom-button">Press arrow keys to continue!</button>
    </div>
  );
}
