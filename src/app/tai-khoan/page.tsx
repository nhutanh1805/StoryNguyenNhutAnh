"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Settings,
  Star,
  ArrowLeft,
  LogOut,
} from "lucide-react";

export default function TaiKhoanPage() {
  const [tab, setTab] = useState("info");

  const menu = [
    { key: "info", label: "Thông tin", icon: <User className="w-5 h-5" /> },
    { key: "history", label: "Lịch sử đọc", icon: <BookOpen className="w-5 h-5" /> },
    { key: "settings", label: "Cài đặt", icon: <Settings className="w-5 h-5" /> },
    { key: "vip", label: "Nâng cấp VIP", icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Cover */}
      <div className="relative h-64 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 shadow-xl">
        <Link
          href="/trang-chu"
          className="absolute top-5 left-6 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-white font-medium hover:bg-white/20 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Về Trang Chủ
        </Link>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.img
            src="/image/Avatar.jpg"
            alt="Avatar"
            className="w-36 h-36 rounded-full border-4 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
            whileHover={{ scale: 1.05 }}
          />
          <h2 className="mt-3 text-2xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-400 to-red-300 bg-clip-text text-transparent drop-shadow-lg">
            Nguyễn Nhựt Anh
          </h2>
          <p className="text-gray-300">Thành viên VIP 🌟</p>
        </div>
      </div>

      <div className="mt-28 max-w-6xl mx-auto flex gap-8 px-6">
        {/* Sidebar */}
        <div className="w-64 hidden md:flex flex-col gap-4">
          {menu.map((m) => (
            <button
              key={m.key}
              onClick={() => setTab(m.key)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition shadow ${
                tab === m.key
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20 text-gray-300"
              }`}
            >
              {m.icon}
              {m.label}
            </button>
          ))}

          <button className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600/80 text-white hover:bg-red-700 transition shadow">
            <LogOut className="w-5 h-5" /> Đăng xuất
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-purple-700/40"
        >
          {tab === "info" && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Thông tin cá nhân
              </h3>
              <ul className="space-y-3">
                <li className="p-3 bg-white/5 rounded-lg">📧 Email: nguyennhutanh@example.com</li>
                <li className="p-3 bg-white/5 rounded-lg">📚 Truyện đã đọc: 152</li>
                <li className="p-3 bg-white/5 rounded-lg">🏆 Điểm tích lũy: 3250</li>
              </ul>
            </div>
          )}
          {tab === "history" && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-300">
                Lịch sử đọc gần đây
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["One Piece", "Conan", "Attack on Titan", "Jujutsu Kaisen"].map(
                  (t, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl hover:shadow-lg transition"
                    >
                      <h4 className="font-semibold text-white">{t}</h4>
                      <p className="text-sm text-gray-300">Chương {100 + i}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {tab === "settings" && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-200">Cài đặt</h3>
              <form className="space-y-5">
                <div>
                  <label className="block font-medium text-gray-300">Tên hiển thị</label>
                  <input
                    type="text"
                    defaultValue="Nguyễn Nhựt Anh"
                    className="mt-1 w-full border border-purple-500/30 bg-black/30 px-3 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-300">Mật khẩu mới</label>
                  <input
                    type="password"
                    className="mt-1 w-full border border-purple-500/30 bg-black/30 px-3 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold shadow hover:shadow-purple-500/40 transition">
                  Lưu thay đổi
                </button>
              </form>
            </div>
          )}
          {tab === "vip" && (
            <div className="text-center">
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-3">
                Nâng cấp VIP 🌟
              </h3>
              <p className="text-gray-300 mb-6">
                Trở thành VIP để đọc truyện không quảng cáo, tốc độ cao và nhiều ưu đãi khác.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition">
                Nâng cấp ngay
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
