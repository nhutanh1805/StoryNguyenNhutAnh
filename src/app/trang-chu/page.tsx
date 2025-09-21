"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TrangChu() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Reset ref mỗi lần render để tránh lỗi index trùng
  videoRefs.current = [];

  // Toggle play/pause toàn bộ video khi bấm nút
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) {
        if (isVideoOn) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [isVideoOn]);

  // Helper để add ref gọn gàng
  const addVideoRef = (el: HTMLVideoElement | null) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover brightness-110"
          priority
        />
      </div>

      {/* Overlay tối */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 bg-black/70 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-purple-800/40">
        <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
          StoryNguyenNhutAnh ✨
        </h1>
        <nav className="flex gap-8 text-lg font-medium">
          <Link href="/trang-chu" className="hover:text-purple-300 transition">
            Trang chủ
          </Link>
          <Link href="/the-loai" className="hover:text-purple-300 transition">
            Thể loại
          </Link>
          <Link href="/truyen-moi" className="hover:text-purple-300 transition">
            Mới cập nhật
          </Link>
          <Link
            href="/top-trending"
            className="hover:text-purple-300 transition"
          >
            Top trending
          </Link>
          <Link href="/tai-khoan" className="hover:text-purple-300 transition">
            Cá nhân
          </Link>
        </nav>
      </header>

      {/* HERO BANNER */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40 z-0" />

        <button
  onClick={() => setIsVideoOn(!isVideoOn)}
  className={`
    fixed top-1/3 right-0 z-50 px-5 py-2 rounded-l-xl font-bold shadow-lg transition-all duration-500
    ${isVideoOn ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-200"}
    transform translate-x-3 hover:translate-x-0
  `}
>
  {isVideoOn ? "Tắt ✖️" : "Bật ▶️"}
</button>


        {/* Banner kết hợp: 2 cột ngang + 4 dọc ở giữa */}
        <div className="z-10 flex items-start justify-center gap-6 mb-10">
          {/* Cột bên trái */}
          <div className="flex flex-col gap-6">
            {["Ngang1.mp4", "Ngang3.mp4"].map((vid, i) => (
              <div
                key={i}
                className="w-64 h-40 rounded-2xl overflow-hidden shadow-xl border border-purple-500/40 hover:scale-105 transition transform hover:shadow-2xl"
              >
                <video
                  ref={addVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-110"
                >
                  <source src={`/video/${vid}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          {/* 4 video dọc ở giữa */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Dọc1.mp4", "Dọc2.mp4", "Dọc3.mp4", "Dọc4.mp4"].map((vid, i) => (
              <div
                key={i}
                className="w-44 h-72 rounded-2xl overflow-hidden shadow-xl border border-purple-500/40 hover:scale-105 transition transform hover:shadow-2xl"
              >
                <video
                  ref={addVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-110"
                >
                  <source src={`/video/${vid}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          {/* Cột bên phải */}
          <div className="flex flex-col gap-6">
            {["Ngang2.mp4", "Ngang5.mp4"].map((vid, i) => (
              <div
                key={i}
                className="w-64 h-40 rounded-2xl overflow-hidden shadow-xl border border-purple-500/40 hover:scale-105 transition transform hover:shadow-2xl"
              >
                <video
                  ref={addVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-110"
                >
                  <source src={`/video/${vid}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* Hero text */}
        <div className="z-10 max-w-3xl">
          <h2 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-pulse bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Thế giới truyện đầy màu sắc 📖
          </h2>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-lg">
            Khám phá hàng ngàn câu chuyện kỳ bí, lãng mạn và phiêu lưu – chỉ dành riêng cho bạn.
          </p>
          <Link
            href="/truyen-moi"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-xl rounded-xl font-bold shadow-2xl transition transform hover:scale-110"
          >
            Khám phá ngay 🚀
          </Link>
        </div>
      </section>

      {/* TRUYỆN NỔI BẬT */}
      <section className="px-10 py-16 bg-black/70 backdrop-blur-md">
        <h3 className="text-4xl font-bold mb-10 text-purple-300 text-center">
          📌 Truyện nổi bật
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition transform hover:rotate-1 group"
            >
              <Image
                src={`/images/story${i}.jpg`}
                alt={`Story ${i}`}
                width={400}
                height={250}
                className="object-cover w-full h-56 group-hover:opacity-80 transition"
              />
              <div className="p-5 flex flex-col">
                <h4 className="text-2xl font-semibold mb-2">Truyện {i}</h4>
                <p className="text-sm text-gray-300 flex-grow">
                  Một câu chuyện hấp dẫn đang chờ bạn...
                </p>
                <Link
                  href={`/truyen/${i}`}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-center transition"
                >
                  Đọc ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP TRENDING */}
      <section className="px-10 py-16 bg-black/60 backdrop-blur-md">
        <h3 className="text-4xl font-bold mb-10 text-pink-400 text-center">
          🔥 Top Trending
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <Image
                src={`/images/story${i}.jpg`}
                alt={`Trending ${i}`}
                width={300}
                height={200}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">Truyện Hot {i}</h4>
                <p className="text-sm text-gray-300">
                  Được nhiều người yêu thích 🔥
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 relative overflow-hidden">
        <h3 className="text-4xl font-extrabold mb-6">
          Tham gia cộng đồng StoryNguyenNhutAnh ✨
        </h3>
        <p className="text-lg text-gray-200 mb-8">
          Tạo tài khoản để lưu truyện yêu thích, bình luận và kết nối với hàng
          ngàn độc giả khác.
        </p>
        <Link
          href="/dang-ky"
          className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded-full shadow-2xl transition transform hover:scale-110"
        >
          Đăng ký ngay 🌟
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/20 mt-10 bg-black/70 backdrop-blur-md">
        <p className="text-gray-400 mb-4">
          © 2025 StoryNguyenNhutAnh - Dấu ấn của{" "}
          <span className="font-bold text-purple-300">Nguyễn Nhựt Anh</span>
        </p>
        <div className="flex justify-center gap-6 text-gray-400 text-2xl">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-400"
          >
            🌐
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            💻
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-red-400"
          >
            ▶️
          </Link>
        </div>
      </footer>
    </div>
  );
}
