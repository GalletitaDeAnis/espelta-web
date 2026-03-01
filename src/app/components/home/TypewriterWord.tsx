"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterWordProps = {
  words: string[];
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
  className?: string;
};

export function TypewriterWord({
  words,
  typingMs = 95,
  deletingMs = 55,
  pauseMs = 1100,
  className,
}: TypewriterWordProps) {
  const safeWords = useMemo(() => (words.length > 0 ? words : ["ideal"]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex % safeWords.length];

    let timeout = typingMs;

    if (!isDeleting && display === currentWord) {
      timeout = pauseMs;
      const timer = setTimeout(() => setIsDeleting(true), timeout);
      return () => clearTimeout(timer);
    }

    if (isDeleting && display.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % safeWords.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplay((prev) => {
        if (!isDeleting) {
          return currentWord.slice(0, prev.length + 1);
        }

        return currentWord.slice(0, Math.max(0, prev.length - 1));
      });
    }, isDeleting ? deletingMs : typingMs);

    return () => clearTimeout(timer);
  }, [display, isDeleting, wordIndex, safeWords, typingMs, deletingMs, pauseMs]);

  return (
    <span className={className}>
      {display}
      <span className="ml-0.5 inline-block animate-pulse text-white/80">|</span>
    </span>
  );
}
