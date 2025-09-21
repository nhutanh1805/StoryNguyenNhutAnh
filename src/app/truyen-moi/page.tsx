"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, BookOpen, ArrowLeft } from "lucide-react";

export default function MoiCapNhat() {
  const [sort, setSort] = useState("moi-nhat");

  const stories = [
    {
      id: 1,
      title: "Hành Trình Của Pháp Sư Bóng Đêm",
      category: "Fantasy",
      updated: "2 giờ trước",
      chapter: "Chương 120",
      image: "/images/story5.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Tình Yêu Trong Mưa",
      category: "Romance",
      updated: "5 giờ trước",
      chapter: "Chương 30",
      image: "/images/story6.jpg",
      isNew: false,
    },
    {
      id: 3,
      title: "Ký Ức Vô Hình",
      category: "Mystery",
      updated: "1 ngày trước",
      chapter: "Chương 45",
      image: "/images/story7.jpg",
      isNew: true,
    },
    {
      id: 4,
      title: "Phiêu Lưu Ngoài Vũ Trụ",
      category: "Sci-Fi",
      updated: "2 ngày trước",
      chapter: "Chương 78",
      image: "/images/story8.jpg",
      isNew: false,
    },
    {
      id: 5,
      title: "Kiếm Hiệp Huyễn Tưởng",
      category: "Action",
      updated: "3 ngày trước",
      chapter: "Chương 56",
      image: "/images/story9.jpg",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-950 text-white px-6 md:px-12 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 md:mb-0">
          📖 Truyện Mới Cập Nhật
        </h1>

        {/* Bộ lọc sắp xếp */}
        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-lg text-purple-300">
            Sắp xếp:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-purple-800/50 border border-purple-600 text-purple-200 rounded-md px-3 py-2"
          >
            <option value="moi-nhat">📅 Mới nhất</option>
            <option value="chuong-nhieu">📚 Nhiều chương</option>
          </select>
        </div>
      </div>

      {/* Danh sách truyện */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={`/truyen/${story.id}`}
            className="relative group overflow-hidden rounded-2xl bg-purple-900/40 border border-purple-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Ảnh */}
            <div className="relative">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover group-hover:brightness-90 transition"
              />
              {story.isNew && (
                <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-md">
                  Mới
                </span>
              )}
            </div>

            {/* Nội dung */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold line-clamp-2 group-hover:text-pink-400 transition">
                {story.title}
              </h2>
              <p className="text-sm text-purple-300">{story.category}</p>

              <div className="flex items-center gap-2 text-sm text-purple-400">
                <Clock className="w-4 h-4" />
                {story.updated}
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <BookOpen className="w-4 h-4" />
                {story.chapter}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Nút xem thêm + Trở về */}
      <div className="flex flex-col items-center gap-6 mt-16">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold shadow-lg hover:scale-110 hover:shadow-pink-500/40 transition">
          Xem thêm ➕
        </button>

        <Link
          href="/trang-chu"
          className="flex items-center gap-2 text-purple-300 hover:text-pink-400 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Trở về Trang chủ
        </Link>
      </div>
    </div>
  );
}
