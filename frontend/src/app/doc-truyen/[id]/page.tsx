// src/app/doc-truyen/[id]/page.tsx
"use client";

import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { Moon, Sun, Share2, ZoomIn, ZoomOut } from "lucide-react";

interface Story {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  content: string;
}

async function getStory(id: string): Promise<Story | { error: string }> {
  const res = await fetch(`http://localhost:1800/api/stories/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return { error: "Không tìm thấy truyện" };
  }

  return res.json();
}

export default function DocTruyenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // ✅ unwrap Promise trong Next.js 15
  const [story, setStory] = useState<Story | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    async function fetchStory() {
      const data = await getStory(id);
      if ("error" in data) {
        setError(data.error);
      } else {
        setStory(data);
      }
    }
    fetchStory();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-red-500 text-xl font-semibold">
        ❌ {error}
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-400">
        ⏳ Đang tải truyện...
      </div>
    );
  }

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      } min-h-screen`}
    >
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          >
            {story.title}
          </motion.h1>
          {story.description && (
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-gray-200 mt-2 max-w-xl"
            >
              {story.description}
            </motion.p>
          )}
        </div>
      </div>

      {/* Công cụ đọc */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/30 dark:bg-white/30 flex items-center justify-between px-6 py-3 shadow">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setFontSize((f) => Math.min(f + 2, 28))}
            className="p-2 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={() => setFontSize((f) => Math.max(f - 2, 14))}
            className="p-2 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition"
          >
            <ZoomOut size={20} />
          </button>
        </div>

        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="flex items-center gap-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
        >
          <Share2 size={18} /> Chia sẻ
        </button>
      </div>

      {/* Nội dung */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto p-6 leading-relaxed"
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="whitespace-pre-line">{story.content}</div>
      </motion.div>

      {/* Điều hướng chương */}
      <div className="max-w-3xl mx-auto p-6 flex justify-between">
        <a
          href="#"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow transition"
        >
          ⬅️ Chương trước
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow transition"
        >
          Chương tiếp ➡️
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-sm text-gray-400">
        📖 Đọc truyện online miễn phí | Made with ❤️
      </footer>
    </div>
  );
}
