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
    const body = encodeURIComponent(
      `From: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:sujalghorse9@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:sujalghorse9@gmail.com">
          sujalghorse9@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-lg border border-black/10 flex flex-col"
      >
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="h-15 rounded-lg border border-black border-dotted p-4"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          className="h-52 my-3 rounded-lg border border-black p-4 border-dotted"
        />

        <button
          type="submit"
          className="group flex h-12 w-32 bg-gray-900 text-white rounded-full items-center justify-center gap-2 hover:scale-110 transition"
        >
          Send <FaPaperPlane className="text-xs opacity-70" />
        </button>
      </form>
    </section>
  );
}
