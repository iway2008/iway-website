import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Newspaper } from "lucide-react"

export default function Home() {
  // 최신 소식 데이터 (실제로는 API나 CMS에서 가져올 수 있음)
  const latestNews = [
    {
      id: 1,
      type: "news",
      title: "2024 시즌 새로운 유니폼 공개",
      date: "2024-03-15",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      type: "schedule",
      title: "대학 축구 리그 일정 확정",
      date: "2024-03-10",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      type: "news",
      title: "신입 선수 모집 안내",
      date: "2024-03-05",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="wave-gradient h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Orbitron'] tracking-wider">
            JUST IN OUR WAY
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            한국외국어대학교 글로벌스포츠산업학부 소속 아마추어 축구단
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/club"
              className="bg-white text-[#000a5e] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              구단 소개
            </Link>
            <Link
              href="/team"
              className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              선수단 보기
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center font-['Orbitron']">LATEST NEWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#000a5e] text-white text-xs px-2 py-1 rounded">
                    {item.type === "news" ? (
                      <div className="flex items-center">
                        <Newspaper className="w-3 h-3 mr-1" />
                        <span>뉴스</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>일정</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-[#000a5e] font-medium flex items-center text-sm hover:underline"
                  >
                    자세히 보기
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

