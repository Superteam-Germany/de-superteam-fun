"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/button";
import Spinner from "@/components/spinner";
import { NewsletterGroup } from "@/types/enum";

// newsletter form
export default function NewsletterForm({
  group = NewsletterGroup.DEFAULT,
  title = "Subscribe",
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const create = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const email = input;

    try {
      const res = await axios.post("/api/newsletter", { email, group });

      if (res.status === 201) {
        setMessage(
          "Thank you for subscribing! Please check your email to confirm your subscription."
        );
        setInput("");
        setLoading(false);
        return;
      }
    } catch (error: any) {
      setMessage(
        "Error: Either your email is invalid or you already signed up for this newsletter."
      );
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div>
      <form
        className="mt-10 flex max-w-md gap-x-4 flex-wrap justify-center"
        onSubmit={create}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          className="min-w-0 flex-auto mb-4 rounded-md border-0 bg-white/10 backdrop-blur-sm px-3.5 py-2 text-white shadow-lg ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white focus:bg-white/15 transition-all duration-200 sm:text-sm/6"
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto" // Full width on mobile, auto on larger screens
        >
          {loading ? <Spinner /> : title}
        </Button>
      </form>

      {message && (
        <div className="mt-4 flex justify-center">
          <div
            className={`text-center text-sm px-4 py-2 rounded-md max-w-md backdrop-blur-sm shadow-lg ${
              message.includes("Thank you")
                ? "bg-green-500/20 text-green-300 border border-green-500/30 shadow-green-500/10"
                : "bg-red-500/20 text-red-300 border border-red-500/30 shadow-red-500/10"
            }`}
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
}
