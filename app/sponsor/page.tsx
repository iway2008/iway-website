import Image from "next/image"
import Link from "next/link"

export default function SponsorPage() {
  // 스폰서 데이터
  const sponsors = [
    {
      name: "스포츠 브랜드 A",
      description: "유니폼 및 장비 공식 후원사",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: "에너지 드링크 B",
      description: "공식 에너지 드링크 파트너",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: "스포츠 의학 센터 C",
      description: "의료 지원 파트너",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: "대학 동문회",
      description: "재정 지원 파트너",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
  ]

  return (
    <div className="pt-20">
      {/* 스폰서 헤더 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-['Orbitron']">OUR SPONSORS</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            I-WAY의 성장과 발전을 함께하는 소중한 파트너들입니다. 후원사들의 지원에 깊은 감사를 표합니다.
          </p>

          {/* 스폰서 로고 스트립 */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 bg-gray-200 py-8 px-4 rounded-lg">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="w-32 h-32 relative">
                <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스폰서 상세 정보 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center card-hover">
                <div className="w-32 h-32 relative mx-auto mb-4">
                  <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                <p className="text-gray-600 mb-4">{sponsor.description}</p>
                <Link
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000a5e] font-medium hover:underline"
                >
                  웹사이트 방문
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후원 문의 섹션 */}
      <section className="py-16 bg-[#000a5e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-['Orbitron']">BECOME A SPONSOR</h2>
          <p className="max-w-2xl mx-auto mb-8">
            I-WAY와 함께 성장하고 싶으신가요? 다양한 후원 프로그램을 통해 한국 축구의 미래를 함께 만들어갈 파트너를 찾고
            있습니다.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#000a5e] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            후원 문의하기
          </Link>
        </div>
      </section>
    </div>
  )
}

