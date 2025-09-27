"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ✅ Ab sirf client render ke baad hi dikhega
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition">
        {/* Placeholder taaki server & client match ho */}
        <Moon size={18} className="opacity-50" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
