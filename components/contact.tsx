"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const message = (e.target as HTMLFormElement).message.value;

    const subject = encodeURIComponent("Message from Portfolio");
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:sujalghorse9@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="mb-16 sm:mb-28 w-full max-w-152 mx-auto px-4 sm:px-0 scroll-mt-28"
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-300 text-sm sm:text-base -mt-4 sm:-mt-6">
        Please contact me directly at{" "}
        <a
          href="mailto:sujalghorse9@gmail.com"
          className="underline hover:text-white transition-colors"
        >
          sujalghorse9@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 sm:mt-10 rounded-lg border border-black/10 flex flex-col gap-3"
      >
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="h-12 sm:h-14 rounded-lg border border-black border-dotted p-4 bg-transparent text-white placeholder:text-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          className="h-44 sm:h-52 rounded-lg border border-black p-4 border-dotted bg-transparent text-white placeholder:text-gray-400 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          type="submit"
          className="group self-start flex h-11 sm:h-12 px-6 sm:w-32 bg-gray-900 text-white rounded-full items-center justify-center gap-2 hover:scale-110 transition border border-gray-700"
        >
          Send <FaPaperPlane className="text-xs opacity-70" />
        </button>
      </form>
    </section>
  );
}
