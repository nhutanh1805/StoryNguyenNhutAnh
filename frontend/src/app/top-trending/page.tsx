"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function TopTrendingPage() {
  const [filter, setFilter] = useState("week");

  const stories = [
    {
      id: 1,
      title: "Đại Đường Huyền Giả",
      img: "/images/trending/truyen1.jpg",
      desc: "Một hành trình kỳ ảo nơi lịch sử và giả tưởng giao thoa.",
      views: "125K",
      rank: 1,
    },
    {
      id: 2,
      title: "Học Đường Hỗn Loạn",
      img: "/images/trending/truyen2.jpg",
      desc: "Drama, tình cảm và hài hước trong môi trường học đường.",
      views: "98K",
      rank: 2,
    },
    {
      id: 3,
      title: "Vùng Đất Bóng Đêm",
      img: "/images/trending/truyen3.jpg",
      desc: "Thế giới tăm tối nơi sinh tồn là thử thách mỗi ngày.",
      views: "87K",
      rank: 3,
    },
    {
      id: 4,
      title: "Người Chơi Hệ Ma Pháp",
      img: "/images/trending/truyen4.jpg",
      desc: "Sức mạnh ma pháp và hành trình trở thành huyền thoại.",
      views: "72K",
      rank: 4,
    },
    {
      id: 5,
      title: "Tình Yêu Trong Mưa",
      img: "/images/trending/truyen5.jpg",
      desc: "Một mối tình lãng mạn đẫm nước mắt dưới mưa chiều.",
      views: "65K",
      rank: 5,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-700/40 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Top Trending 🔥
          </h1>
          <nav className="flex gap-6 text-lg font-medium">
            <Link href="/trang-chu" className="hover:text-yellow-400 transition">Trang chủ</Link>
            <Link href="/the-loai" className="hover:text-yellow-400 transition">Thể loại</Link>
            <Link href="/truyen-moi" className="hover:text-yellow-400 transition">Mới cập nhật</Link>
            <Link href="/top-trending" className="hover:text-yellow-400 transition">Top trending</Link>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/banner-trending.jpg"
          alt="Trending Banner"
          fill
          className="object-cover opacity-40 animate-pulse"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            BXH Truyện Hot Nhất 🔥
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cập nhật liên tục top những bộ truyện{" "}
            <span className="text-yellow-400">được đọc nhiều nhất</span> và{" "}
            <span className="text-pink-400">yêu thích nhất</span>!
          </p>
        </div>
      </section>

      {/* ============ FILTER ============ */}
      <div className="container mx-auto px-8 py-12 text-center">
        <div className="inline-flex rounded-full border border-yellow-400/40 bg-black/40 backdrop-blur-lg overflow-hidden">
          {["week", "month", "all"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-lg font-semibold transition ${
                filter === f
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-300 hover:bg-yellow-400/20"
              }`}
            >
              {f === "week" && "Tuần này"}
              {f === "month" && "Tháng này"}
              {f === "all" && "Tất cả"}
            </button>
          ))}
        </div>
      </div>

      {/* ============ LIST TRENDING ============ */}
      <main className="container mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((s) => (
            <div
              key={s.id}
              className="relative group rounded-2xl overflow-hidden border border-yellow-500/30 shadow-xl hover:scale-105 hover:shadow-yellow-500/40 transition-transform duration-300"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-4 py-1 rounded-full shadow-lg">
                #{s.rank}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h4 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-300 line-clamp-2">{s.desc}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                  <span>👁 {s.views} lượt đọc</span>
                  <Link
                    href={`/truyen/${s.id}`}
                    className="text-yellow-400 hover:underline"
                  >
                    Đọc ngay →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ============ CTA ============ */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-800 via-orange-700 to-red-800 text-center">
        <div className="relative z-10">
          <h3 className="text-4xl font-extrabold mb-6">
            Trở thành độc giả VIP 📖✨
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Đăng ký để lưu trữ lịch sử đọc, truyện yêu thích và nhận thông báo
            khi có chap mới.
          </p>
          <Link
            href="/dang-ky"
            className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded-full shadow-2xl transition transform hover:scale-110"
          >
            Đăng ký ngay 🌟
          </Link>
        </div>
        {/* ============ BACK BUTTON ============ */}
<div className="container mx-auto px-8 py-6">
  <Link
    href="/trang-chu"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-500 hover:text-black font-semibold transition"
  >
    ← Trở về Trang Chủ
  </Link>
</div>

      </section>
      

      {/* ============ FOOTER ============ */}
      <footer className="text-center py-10 border-t border-white/20 bg-black/70 backdrop-blur-md">
        <p className="text-gray-400 mb-4">
          © 2025 StoryNguyenNhutAnh - Bảng xếp hạng bởi{" "}
          <span className="font-bold text-yellow-400">Nguyễn Nhựt Anh</span>
        </p>
        <div className="flex justify-center gap-6 text-gray-400 text-2xl">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">🌐</Link>
          <Link href="https://github.com" target="_blank" className="hover:text-gray-300">💻</Link>
          <Link href="https://youtube.com" target="_blank" className="hover:text-red-400">▶️</Link>
        </div>
      </footer>
    </div>
  );
}
