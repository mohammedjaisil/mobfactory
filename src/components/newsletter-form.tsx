"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

/**
 * Sits on the obsidian footer panel, so it paints its own light-on-dark
 * colours rather than reading theme tokens.
 */
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
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="h-11 w-full border border-white/15 bg-white/10 px-3 text-sm text-chalk outline-none transition-colors placeholder:text-heather/50 focus:border-varsity-soft"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="label-lg flex h-11 shrink-0 items-center gap-2 bg-varsity px-5 text-chalk transition-transform hover:scale-[1.03]"
        >
          {done ? (
            <>
              In <Check className="h-4 w-4" />
            </>
          ) : (
            <>
              Join <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {done && (
        <p className="mt-3 text-xs text-heather/70">
          You’re in. Watch your inbox 30 minutes before the next drop.
        </p>
      )}
    </form>
  );
}
