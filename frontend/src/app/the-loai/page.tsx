"use client";

import Link from "next/link";
import Image from "next/image";

export default function TheLoaiPage() {
  const genres = [
    { name: "Ngôn Tình", slug: "ngon-tinh", img: "/images/genres/ngontinh.jpg", desc: "Những câu chuyện tình yêu lãng mạn, ngọt ngào nhưng cũng đầy thử thách." },
    { name: "Hành Động", slug: "hanh-dong", img: "/images/genres/hanhdong.jpg", desc: "Những trận chiến nghẹt thở, kịch tính và đầy cảm xúc." },
    { name: "Phiêu Lưu", slug: "phieu-luu", img: "/images/genres/phieuluu.jpg", desc: "Cùng nhân vật chính bước vào hành trình khám phá thế giới mới." },
    { name: "Kinh Dị", slug: "kinh-di", img: "/images/genres/kinhdi.jpg", desc: "Rùng rợn, ám ảnh và kịch bản bất ngờ khiến bạn lạnh sống lưng." },
    { name: "Hài Hước", slug: "hai-huoc", img: "/images/genres/haihuoc.jpg", desc: "Những câu chuyện mang đến tiếng cười sảng khoái, vui nhộn." },
    { name: "Giả Tưởng", slug: "gia-tuong", img: "/images/genres/giatuong.jpg", desc: "Thế giới phép thuật, siêu nhiên, đầy sáng tạo và độc đáo." },
    { name: "Trinh Thám", slug: "trinh-tham", img: "/images/genres/trinhtham.jpg", desc: "Cùng giải mã những vụ án bí ẩn, hồi hộp từng chi tiết." },
    { name: "Học Đường", slug: "hoc-duong", img: "/images/genres/hocduong.jpg", desc: "Thanh xuân, tình bạn, tình yêu và những kỷ niệm tuổi học trò." },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-700/40 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            Thể Loại 📚
          </h1>
          <nav className="flex gap-6 text-lg font-medium">
            <Link href="/trang-chu" className="hover:text-purple-300 transition">Trang chủ</Link>
            <Link href="/the-loai" className="hover:text-purple-300 transition">Thể loại</Link>
            <Link href="/truyen-moi" className="hover:text-purple-300 transition">Mới cập nhật</Link>
            <Link href="/top-trending" className="hover:text-purple-300 transition">Top trending</Link>
          </nav>
        </div>
      </header>

      {/* ================= BANNER HERO ================= */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/banner-genre.jpg"
          alt="Genres Banner"
          fill
          className="object-cover opacity-40 animate-pulse"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            Khám phá thể loại yêu thích 🎉
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hàng ngàn câu chuyện đa dạng từ <span className="text-purple-300">ngọt ngào</span>,{" "}
            <span className="text-pink-400">kịch tính</span> đến{" "}
            <span className="text-red-400">rùng rợn</span> – chọn ngay thể loại bạn thích!
          </p>
        </div>
      </section>

      {/* ================= GENRE GRID ================= */}
      <main className="container mx-auto px-8 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center text-purple-300">
          Danh sách thể loại nổi bật ✨
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {genres.map((g, idx) => (
            <Link
              key={g.slug}
              href={`/the-loai/${g.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-2xl border border-purple-600/40 hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300"
            >
              <Image
                src={g.img}
                alt={g.name}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h4 className="text-2xl font-bold group-hover:text-purple-300 transition">
                  {g.name}
                </h4>
                <p className="text-sm text-gray-300 line-clamp-2">{g.desc}</p>
              </div>
              {/* Badge số thứ tự */}
              <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full">
                #{idx + 1}
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* ================= FEATURED SECTION ================= */}
      <section className="bg-black/70 backdrop-blur-md py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-pink-400">
            Gợi ý dành riêng cho bạn 💡
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition duration-300"
              >
                <Image
                  src={`/images/featured${i}.jpg`}
                  alt={`Featured ${i}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">Truyện gợi ý {i}</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Một bộ truyện cực hot mà bạn không nên bỏ lỡ!
                  </p>
                  <Link
                    href={`/truyen/${i}`}
                    className="inline-block px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold text-sm transition"
                  >
                    Đọc ngay →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-center">
        <div className="relative z-10">
          <h3 className="text-4xl font-extrabold mb-6">Tham gia cộng đồng StoryNguyenNhutAnh ✨</h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Tạo tài khoản để lưu truyện yêu thích, bình luận và kết nối với hàng ngàn độc giả khác.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/dang-ky"
              className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded-full shadow-2xl transition transform hover:scale-110"
            >
              Đăng ký ngay 🌟
            </Link>

            {/* Nút Trở về Trang chủ */}
            <Link
              href="/trang-chu"
              className="text-purple-200 hover:text-pink-400 transition font-medium flex items-center gap-2"
            >
              ← Trở về Trang chủ
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/20 bg-black/70 backdrop-blur-md">
        <p className="text-gray-400 mb-4">
          © 2025 StoryNguyenNhutAnh - Dấu ấn của{" "}
          <span className="font-bold text-purple-300">Nguyễn Nhựt Anh</span>
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
