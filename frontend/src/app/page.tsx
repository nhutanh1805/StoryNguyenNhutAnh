"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TrangChu() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      // ✅ Sau khi login thành công → chuyển sang trang chủ
      router.push("/trang-chu");
    } else {
      setError("Vui lòng nhập đầy đủ username và password 😅");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Đăng nhập
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}

        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Đăng nhập
        </button>

        {/* Link đăng ký */}
        <p className="text-gray-700 mt-4 text-center">
          Chưa có tài khoản?{" "}
          <Link
            href="/dang-ky"
            className="text-purple-600 font-bold hover:underline"
          >
            Đăng ký
          </Link>
        </p>
      </form>
    </div>
  );
}
