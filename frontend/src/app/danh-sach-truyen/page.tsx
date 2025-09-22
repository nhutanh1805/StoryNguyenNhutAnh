"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Story {
  _id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  createdAt: string;
}

export default function DanhSachTruyen() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await fetch("/api/stories");
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error("Lỗi fetch stories:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStories();
  }, []);

  const filteredStories = stories.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-lg">
        ⏳ Đang tải truyện...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      {/* Tiêu đề */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
        📚 Danh Sách Truyện
      </h1>

      {/* Thanh tìm kiếm */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm truyện..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
        />
      </div>

      {/* Danh sách */}
      {filteredStories.length === 0 ? (
        <p className="text-center text-gray-400">❌ Không tìm thấy truyện nào.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStories.map((story, i) => (
            <motion.div
              key={story._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition"
            >
              {/* Ảnh bìa */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={
                    story.image
                      ? story.image.startsWith("http")
                        ? story.image
                        : story.image // giữ nguyên đường dẫn /uploads/xxx.jpg
                      : "/images/default.jpg"
                  }
                  alt={story.title}
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
                <div className="absolute bottom-3 left-3 text-sm text-gray-300">
                  📅 {new Date(story.createdAt).toLocaleDateString("vi-VN")}
                </div>
              </div>

              {/* Nội dung */}
              <div className="p-5 flex flex-col">
                <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-300 flex-grow line-clamp-3">
                  {story.description}
                </p>

                <Link
                  href={`/doc-truyen/${story._id}`}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-center transition shadow-md"
                >
                  Đọc ngay ➡️
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
