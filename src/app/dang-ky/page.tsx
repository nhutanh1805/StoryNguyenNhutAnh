"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, Mail, Lock, User } from "lucide-react";

export default function DangKy() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Hàm check độ mạnh mật khẩu
  const getPasswordStrength = (pass: string) => {
    if (pass.length < 6) return "Yếu ❌";
    if (/[A-Z]/.test(pass) && /\d/.test(pass) && /[@$!%*?&]/.test(pass)) {
      return "Mạnh 💪";
    }
    return "Trung bình 🙂";
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin 😅");
      return;
    }

    if (!email.includes("@")) {
      setError("Email không hợp lệ ❌");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp ❌");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Đăng ký thành công 🎉");
      router.push("/trang-chu");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-red-400">
      {/* Video nền */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      <form
        onSubmit={handleRegister}
        className="relative z-10 bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl flex flex-col w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Đăng ký
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}
        {success && (
          <p className="text-green-600 mb-4 text-center font-semibold">
            {success}
          </p>
        )}

        {/* Username */}
        <div className="relative mb-4">
          <User className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <Lock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Thanh đánh giá độ mạnh mật khẩu */}
        {password && (
          <p
            className={`mb-4 text-sm font-medium ${
              getPasswordStrength(password) === "Mạnh 💪"
                ? "text-green-600"
                : getPasswordStrength(password) === "Trung bình 🙂"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Độ mạnh mật khẩu: {getPasswordStrength(password)}
          </p>
        )}

        {/* Confirm Password */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center"
        >
          {loading ? (
            <Loader2 className="animate-spin mr-2" />
          ) : (
            "Đăng ký"
          )}
        </button>

        <button
          type="button"
          className="mt-3 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Đăng ký bằng Google
        </button>

        <p className="text-gray-700 mt-4 text-center">
          Đã có tài khoản?{" "}
          <a href="/" className="text-purple-600 font-bold hover:underline">
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
}
