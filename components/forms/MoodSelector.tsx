"use client";

import { useState } from "react";

const moods = ["спокойно", "вдохновлённо", "устало", "собранно"];

export function MoodSelector() {
  const [selected, setSelected] = useState(moods[0]);

  return (
    <div className="flex flex-wrap gap-2">
      {moods.map((mood) => (
        <button
          key={mood}
          className={`focus-ring min-h-10 rounded-full px-4 text-sm font-medium ${
            selected === mood ? "bg-sage-light text-graphite" : "bg-white/70 text-muted hover:bg-blush-light hover:text-graphite"
          }`}
          onClick={() => setSelected(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
