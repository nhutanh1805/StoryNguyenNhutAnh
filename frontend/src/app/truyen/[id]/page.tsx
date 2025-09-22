"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface Props {
  params: Promise<{ id: string }>; // params là Promise
}

export default function TruyenChiTiet({ params }: Props) {
  // unwrap params để lấy id
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const contentRef = useRef<HTMLDivElement>(null);

  // Fade-in khi cuộn
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    const children = contentRef.current?.querySelectorAll(".fade-in");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Dữ liệu truyện tình cảm
  const stories: Record<string, any> = {
    "1": {
      title: "Chuyện Tình Nhựt Anh & Khả Ái",
      image: "/images/story1.jpg",
      description:
        "Một câu chuyện tình cảm lãng mạn, ngọt ngào nhưng cũng đầy thử thách giữa Nhựt Anh và Khả Ái.",
      content: `
### Chương 1: Gặp gỡ định mệnh

Nhựt Anh bước vào quán cà phê giữa chiều thu vàng rực rỡ, ánh nắng len qua khung cửa sổ chiếu lên tóc Khả Ái đang ngồi đọc sách. Cái nhìn đầu tiên đã khiến tim anh chùng xuống, như thể cả thế giới chỉ còn lại khoảnh khắc ấy.

*"Xin lỗi, đây có phải chỗ trống không?"* - Nhựt Anh hỏi, giọng trầm ấm.  

Khả Ái ngẩng lên, nụ cười nhẹ nhàng khiến lòng anh rung động.  

*"Vâng, mời anh ngồi."*

### Chương 2: Những ngày ngọt ngào

Họ bắt đầu trò chuyện, từ những điều bình thường như sở thích đọc sách, âm nhạc, cho tới những mơ ước sâu kín. Mỗi ngày trôi qua đều ngập tràn tiếng cười và những tin nhắn dài đêm khuya, cảm giác gần gũi mà vẫn đầy mới mẻ.

> "Có những người gặp một lần, nhưng cảm giác như đã quen cả đời." - Nhựt Anh viết cho Khả Ái.

### Chương 3: Sóng gió bất ngờ

Một hiểu lầm nhỏ khiến cả hai giận nhau, cả tuần không liên lạc. Trong những ngày đó, Nhựt Anh nhận ra: trái tim anh không thể thiếu Khả Ái.  

Anh quyết định đến gặp cô, đứng trước cửa nhà cô với bó hoa tím – màu yêu thích của Khả Ái.  

*"Xin lỗi, mình không muốn mất em..."* - Nhựt Anh nói, mắt ngấn lệ.

Khả Ái nhìn anh, rồi mỉm cười nhẹ:  
*"Mình cũng vậy… mình cũng nhớ anh."*

### Chương 4: Hạnh phúc trọn vẹn

Sau những sóng gió, họ hiểu rằng tình yêu không chỉ là những ngày nắng đẹp, mà còn là vượt qua những cơn mưa cùng nhau.  

Nhựt Anh và Khả Ái nắm tay nhau, bước vào quán cà phê nơi họ gặp nhau lần đầu, nơi mà mọi thứ bắt đầu và cũng là nơi họ hứa sẽ cùng nhau đi hết quãng đời còn lại.

> **Hạnh phúc không phải là điểm đến, mà là hành trình cùng nhau vượt qua mọi thử thách.**
      `,
    },
  };

  const story = stories[id];

  if (!story)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-10">
        <p className="text-2xl mb-4">Truyện không tồn tại 😢</p>
        <Link
          href="/trang-chu"
          className="text-purple-400 hover:underline text-lg"
        >
          ← Quay lại trang chủ
        </Link>
      </div>
    );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Back button cố định */}
      <Link
        href="/trang-chu"
        className="fixed top-6 left-6 z-50 px-5 py-2 bg-purple-700/70 backdrop-blur-md rounded-lg shadow-lg hover:bg-purple-600 transition text-white font-semibold"
      >
        ← Quay lại
      </Link>

      {/* Background hero ảnh */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover brightness-75 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
      </div>

      {/* Nội dung */}
      <div
        ref={contentRef}
        className="relative max-w-4xl mx-auto px-10 py-32 space-y-8"
      >
        <h1 className="text-5xl font-extrabold text-center fade-in opacity-0 translate-y-10 transition-all duration-700">
          {story.title}
        </h1>
        <p className="text-xl text-center text-gray-300 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
          {story.description}
        </p>

        <div className="rounded-xl overflow-hidden shadow-2xl fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <Image
            src={story.image}
            alt={story.title}
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Nội dung chi tiết */}
        <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
          {story.content.split("\n\n").map((para: string, i: number) => {
            if (para.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-3xl font-bold fade-in opacity-0 translate-y-10 transition-all duration-700"
                >
                  {para.replace("### ", "")}
                </h3>
              );
            } else if (para.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-purple-500 pl-6 italic text-gray-300 fade-in opacity-0 translate-y-10 transition-all duration-700"
                >
                  {para.replace("> ", "")}
                </blockquote>
              );
            } else {
              return (
                <p
                  key={i}
                  className="fade-in opacity-0 translate-y-10 transition-all duration-700"
                >
                  {para}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
