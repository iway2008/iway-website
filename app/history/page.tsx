import Image from "next/image"

export default function HistoryPage() {
  // 주요 역사 데이터
  const historySections = [
    {
      title: "설립 배경 및 초기 단계",
      period: "2010년대 후반 ~ 2020년대 초반",
      description: "아이웨이 스포츠매니지먼트 학회에서 출발하여 초기 활동을 시작한 시기",
      milestones: [
        {
          subtitle: "아이웨이 스포츠매니지먼트 학회 창설",
          items: [
            "한국외국어대학교 글로벌스포츠산업학부 내 스포츠 매니지먼트 연구 목적",
            "축구 행정 및 법률 연구 진행",
          ],
          image: "/placeholder.svg?height=400&width=600&text=학회 창설",
        },
        {
          subtitle: "초기 활동",
          items: ["스포츠 산업 내 운영 및 분석 연구", "시흥시민축구단과 MOU 체결", "다양한 아마추어 대회 출전"],
          image: "/placeholder.svg?height=400&width=600&text=초기 활동",
        },
      ],
    },
    {
      title: "본격적인 성장",
      period: "2020~2023년",
      description: "학회에서 비영리법인 축구단으로 발전하며 본격적인 성장을 이룬 시기",
      milestones: [
        {
          subtitle: "2021년",
          items: ["KUSF 대학 축구 본선 진출", "AI 축구 전술 분석 연구 도입", "GUFA, SUCL 등 각종 아마추어 대회 참가"],
          image: "/placeholder.svg?height=400&width=600&text=2021년 활동",
        },
        {
          subtitle: "2022~2023년",
          items: [
            "비영리법인 아이웨이아마추어축구단 창단",
            "K7 리그팀 창단 및 TFT(Task Force Team) 운영",
            'Brand Identity "The SPIRIT of I-WAY" 발표',
            "I-WAY x 끼리엔코 2024~2026 KIT 스폰서십 체결",
          ],
          image: "/placeholder.svg?height=400&width=600&text=2022-2023년 활동",
        },
      ],
    },
    {
      title: "현재 및 향후 발전",
      period: "2024~2025년",
      description: "비영리법인 축구단으로서 새로운 도약을 준비하는 시기",
      milestones: [
        {
          subtitle: "2024년",
          items: [
            "경기광주 K7 리그 참가",
            "경기광주축구협회 산하 오포1동축구협회 회원 가입",
            'I-WAY 게임모델 "BLUEPRINT" 발표',
            "아마추어 축구 자생 비즈니스 모델 연구 착수",
          ],
          image: "/placeholder.svg?height=400&width=600&text=2024년 활동",
        },
        {
          subtitle: "2025년 (예정)",
          items: ["K7 리그 출전 및 성적 향상 목표", "e스포츠팀 창단 연구", "새로운 아마추어 축구 산업 모델 개발"],
          image: "/placeholder.svg?height=400&width=600&text=2025년 계획",
        },
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* 히스토리 헤더 */}
      <section className="wave-gradient py-20">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Orbitron'] tracking-wider">
            OUR HISTORY
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            스포츠 매니지먼트 학회에서 출발하여 비영리법인 축구단으로 성장하기까지의 I-WAY의 여정
          </p>
        </div>
      </section>

      {/* 타임라인 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {historySections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#000a5e] mb-2 font-['Orbitron']">{section.title}</h2>
                  <p className="text-lg font-semibold text-gray-600 mb-4">{section.period}</p>
                  <p className="text-gray-700 max-w-3xl mx-auto">{section.description}</p>
                </div>

                {section.milestones.map((milestone, milestoneIndex) => (
                  <div
                    key={milestoneIndex}
                    className={`flex flex-col ${milestoneIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-16`}
                  >
                    <div className="md:w-1/2">
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.subtitle}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-[#000a5e] text-white py-2 px-4 font-['Orbitron'] font-bold">
                          {milestone.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-[#000a5e]">{milestone.subtitle}</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 미래 방향 섹션 */}
      <section className="py-16 bg-[#000a5e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-['Orbitron']">아이웨이의 미래 방향</h2>
            <p className="text-xl mb-8">I-WAY는 단순한 아마추어 축구팀을 넘어,</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">비즈니스 모델 연구</h3>
                <p>축구 산업 내 지속가능한 비즈니스 모델을 연구하고 개발합니다.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">인재 육성</h3>
                <p>다양한 인재 육성을 통해 스포츠 산업의 새로운 길을 개척합니다.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">한국 축구 발전</h3>
                <p>"JUST IN OUR WAY" 철학을 바탕으로 미래 한국 축구의 발전에 기여합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

