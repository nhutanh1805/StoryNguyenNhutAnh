"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, BookMarked, FileText, Loader2 } from "lucide-react";

export default function UpTruyen() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Đang lưu...");
    setLoading(true);

    let imageUrl = form.image;

    // Upload file ảnh
    if (file) {
      const data = new FormData();
      data.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      const uploadData = await uploadRes.json();
      if (uploadData.success) {
        imageUrl = uploadData.url;
      } else {
        setStatus("❌ Lỗi upload ảnh");
        setLoading(false);
        return;
      }
    }

    // Lưu MongoDB
    const res = await fetch("/api/truyen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, image: imageUrl }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("✅ Lưu thành công!");
      setForm({ title: "", description: "", image: "", content: "" });
      setFile(null);
      setPreview(null);
    } else {
      setStatus("❌ " + data.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-purple-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-200 space-y-8"
      >
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          📖 Upload Truyện
        </h1>

        {/* Tiêu đề */}
        <div>
          <label className="flex items-center gap-2 text-gray-800 mb-2 font-medium">
            <BookMarked className="w-5 h-5 text-purple-500" />
            Tiêu đề truyện
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề truyện..."
            className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-900"
            required
          />
        </div>

        {/* Mô tả */}
        <div>
          <label className="flex items-center gap-2 text-gray-800 mb-2 font-medium">
            <FileText className="w-5 h-5 text-pink-500" />
            Mô tả ngắn
          </label>
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Mô tả sơ lược về truyện..."
            className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none text-gray-900"
          />
        </div>

        {/* Upload ảnh */}
        <div>
          <label className="flex items-center gap-2 text-gray-800 mb-2 font-medium">
            <Upload className="w-5 h-5 text-green-500" />
            Ảnh bìa truyện
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
          />
          {preview && (
            <div className="mt-4 flex justify-center">
              <Image
                src={preview}
                alt="Preview"
                width={300}
                height={200}
                className="rounded-xl shadow-lg border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Nội dung */}
        <div>
          <label className="flex items-center gap-2 text-gray-800 mb-2 font-medium">
            <FileText className="w-5 h-5 text-blue-500" />
            Nội dung truyện
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Nhập nội dung truyện..."
            className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 h-48 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            required
          />
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-4 rounded-xl font-bold text-lg text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Đang lưu...
            </>
          ) : (
            "🚀 Lưu truyện"
          )}
        </button>

        {/* Trạng thái */}
        {status && (
          <p className="text-center text-gray-700 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}
