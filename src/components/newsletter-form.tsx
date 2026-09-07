"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
      className="w-full"
    >
      <div className="flex items-center border-b border-border-strong pb-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-fg-faint"
          aria-label="Email address"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform hover:scale-105"
        >
          {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
      {done && (
        <p className="mt-3 text-xs text-fg-muted">
          You’re in. Watch your inbox for the next drop.
        </p>
      )}
    </form>
  );
}
