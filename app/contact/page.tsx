import { Mail, MapPin, Phone, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* 컨택트 헤더 */}
      <section className="wave-gradient py-20">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Orbitron'] tracking-wider">
            CONTACT US
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I-WAY에 관심을 가져주셔서 감사합니다. 문의사항이나 제안이 있으시면 언제든지 연락주세요.
          </p>
        </div>
      </section>

      {/* 컨택트 정보 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-['Orbitron']">GET IN TOUCH</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#000a5e] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">주소</h3>
                    <p className="text-gray-700">
                      경기도 용인시 처인구 모현읍 외대로 81
                      <br />
                      한국외국어대학교 글로벌스포츠산업학부
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#000a5e] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">이메일</h3>
                    <p className="text-gray-700">iway.season2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#000a5e] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">전화</h3>
                    <p className="text-gray-700">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-[#000a5e] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">인스타그램</h3>
                    <p className="text-gray-700">@hufs_iway</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 font-['Orbitron']">SEND A MESSAGE</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000a5e]"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000a5e]"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000a5e]"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000a5e]"
                    placeholder="메시지를 입력하세요"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#000a5e] text-white px-6 py-3 rounded-md font-medium hover:bg-[#001394] transition-colors"
                >
                  보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center font-['Orbitron']">LOCATION</h2>
          <div className="max-w-5xl mx-auto h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* 실제 구현 시 Google Maps 또는 Kakao Maps API를 사용하여 지도 표시 */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">지도가 표시될 영역입니다</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

