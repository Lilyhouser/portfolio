"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImPhone } from "react-icons/im";
import { IoMailOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const loading = toast.loading("Sending email...");

    try {
      const formData = new FormData(e.currentTarget);

      const company = formData.get("company");
      const email = formData.get("email");
      const message = formData.get("message");

      const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;
      const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      if (!SERVICE_KEY || !TEMPLATE_KEY || !PUBLIC_KEY) {
        throw new Error("Missing email service configuration");
      }
      await emailjs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        {
          company,
          email,
          message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );
      toast.success("Message sent!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Fail to send email! Please try again!");
      }
    } finally {
      toast.dismiss(loading);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      toast.error("Fail to send email...");
      return;
    }
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  }, []);

  return (
    <div className="z-10 absolute flex flex-col justify-end gap-[2vh] pt-[4vh] items-center left-[50%] translate-x-[-50%] bottom-0">
      <div className="text-[18px] flex gap-4 items-center">
        <ImPhone className="text-[20px]" />
        <span>0833803102</span>
      </div>
      <div className="text-[18px] flex gap-4 items-center">
        <RiFacebookCircleFill className="text-[24px]" />
        <Link href={"https://web.facebook.com/nga.sy.9822"} target="_blank">
          https://web.facebook.com/nga.sy.9822
        </Link>
      </div>
      <span className="font-bold text-xl">OR</span>
      <div className="text-[18px] flex gap-4 items-center">
        <IoMailOutline className="text-[30px]" />
        <Link href="mailto:houselily010@gmail.com">houselily010@gmail.com</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company" className="flex flex-col gap-2 mb-4">
          <span className="ms-4 font-semibold">Your company*</span>
          <input
            disabled={isLoading}
            name="company"
            required
            className="border-2 border-[#000000a1] p-3 rounded-xl w-[50vw]"
            placeholder="Leave your company name here"
          />
        </label>
        <label htmlFor="company" className="flex flex-col gap-2 mb-4">
          <span className="ms-4 font-semibold">Email*</span>
          <input
            disabled={isLoading}
            name="email"
            required
            type="email"
            className="border-2 border-[#000000a1] p-3 rounded-xl w-[50vw]"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="company" className="flex flex-col gap-2 mb-30">
          <span className="ms-4 font-semibold">Your message*</span>
          <textarea
            disabled={isLoading}
            name="message"
            required
            className="border-2 h-40 border-[#000000a1] p-3 rounded-xl w-[50vw]"
            placeholder="What do you want to send me?"
          />
        </label>
        <button disabled={isLoading} className="bottom-button">
          Send me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
