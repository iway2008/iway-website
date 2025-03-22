"use client"

import Image from "next/image"
import { ArrowRight, Award, Target, Users, BookOpen, BarChart, Lightbulb } from "lucide-react"

export default function ClubPage() {
  // 미션, 비전, 핵심 목표 데이터
  const philosophy = [
    {
      title: "미션",
      description: "미래 스포츠 산업 인재 육성",
    },
    {
      title: "비전",
      description: "아마추어 축구 문화 및 산업 활성화",
    },
    {
      title: "핵심 가치",
      description:
        "한국 축구를 진지하게 고민하고, 능력과 철학을 겸비한 인재들이 모여 사회를 변화시키는 지식 기반 스포츠 집단",
    },
  ]

  // 핵심 목표 데이터
  const coreGoals = [
    {
      title: "구단 창단/운영 체계 정립",
      items: ["지속가능한 학회 시스템", "팀 경기력 향상"],
    },
    {
      title: "문화 선도",
      items: ["이색 리그/산업 모델 도입", "네트워크 확장"],
    },
    {
      title: "인재 육성",
      items: ["현장 중심 교육", "축구 기반 사회문제 해결"],
    },
  ]

  // 연혁 데이터
  const history = [
    {
      stage: "1단계: 학회 기반",
      events: ["아이웨이 스포츠매니지먼트 학회 창설", "스포츠 행정/법률 및 매니지먼트 연구"],
    },
    {
      stage: "2단계: 실전 경험",
      events: [
        "시흥시민축구단과 MOU 체결",
        "KUSF 축구부문 본선 진출",
        "AI 전술 분석 도입",
        "GUFA/SUCL 등 아마추어 대회 다수 참가",
      ],
    },
    {
      stage: "3단계: 비영리법인화",
      events: [
        "2023년 비영리법인 등록 및 TFT 발족",
        "K7 리그 출전",
        "BI 발표: The SPIRIT of I-WAY",
        "2024~26 끼리엔코 KIT 스폰서십 체결",
        'I-WAY 게임모델 "BLUEPRINT" 발표',
      ],
    },
  ]

  // 조직도 데이터
  const organization = {
    owner: "OWNER",
    director: "단 장",
    departments: [
      {
        name: "경영본부",
        teams: ["PR/마케팅팀", "행정지원팀", "전략기획팀"],
      },
      {
        name: "기술본부",
        teams: ["선수운영팀", "전력분석팀", "스포츠과학팀"],
      },
      {
        name: "코칭스태프",
        teams: [],
      },
    ],
    specialUnits: ["축구인재육성실", "신규 TFT 신설 예정"],
  }

  // 선수단 운영 구조 데이터
  const teamStructure = [
    {
      title: "정예 23인 대표팀",
      description: "A팀(K7 리그 참가)과 B팀(JV: 훈련 중심, 실전 경험 강화)으로 구성",
    },
    {
      title: "출전 대회",
      items: ["경기광주 K7 리그", "SUCL", "KUSF 예선", "광주시의회 클럽대회"],
    },
  ]

  // 2025 주요 정책 방향 데이터
  const policyDirections = [
    {
      title: "철학 수립 및 전술 모델 정립",
      icon: <BookOpen className="w-10 h-10 text-white" />,
      items: ["BLUEPRINT 축구철학 도입", "팀 간 체계 일원화"],
    },
    {
      title: "외연 확장 및 홍보",
      icon: <Target className="w-10 h-10 text-white" />,
      items: ["I-WAY의 가치와 철학을 외부에 알림", "아마추어 구단 운영 모델 보급"],
    },
    {
      title: "기술 발전과 인재 시스템",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      items: ["외부 전문가 협업", "기술 매뉴얼 및 피지컬 트레이닝 가이드 제작", "분석관/심판/코치 등 인재 양성"],
    },
    {
      title: "재정 계획 수립",
      icon: <BarChart className="w-10 h-10 text-white" />,
      items: ["정부/학교 기금 확보", "신규 수입원 발굴 및 다각화", "e스포츠팀 창단 모델 개발"],
    },
  ]

  // 신규 프로젝트 데이터
  const newProjects = [
    {
      title: "I-WAY Edu",
      items: ["영어 축구교실", "스포츠 테이핑 교육", "스포츠 디자이너 양성 과정"],
    },
    {
      title: "MINERVA 매치",
      items: ["신입생 학교 적응을 위한 축구 이벤트"],
    },
  ]

  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="relative h-[80vh] bg-[#000a5e] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=I-WAY"
            alt="I-WAY Football Club"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron'] tracking-wider">
            One team, <br />
            one mission
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 font-['Pretendard']">
            한국 축구를 진지하게 고민하고, 능력과 철학을 겸비한 인재들이 모여 사회를 변화시키는 지식 기반 스포츠 집단
          </p>
          <button className="bg-white text-[#000a5e] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center font-['Pretendard']">
            더 알아보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 구단 소개 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=I-WAY Team"
                  alt="I-WAY Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#000a5e] font-['Orbitron']">
                비영리법인 아이웨이아마추어축구단
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-['Pretendard'] text-lg">
                한국외국어대학교 글로벌스포츠산업학부 산하 아이웨이 축구매니지먼트학회가 설립한 비영리법인 아마추어
                축구단입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 font-['Pretendard'] text-lg">
                "JUST IN OUR WAY"라는 슬로건 아래, 미래 스포츠산업 인재 양성, 축구 산업의 실질적 운영 경험 제공, 한국
                아마추어 축구문화/산업 발전을 목표로 합니다.
              </p>
              <button className="bg-[#000a5e] text-white px-6 py-3 rounded-full font-medium hover:bg-[#001394] transition-colors inline-flex items-center font-['Pretendard']">
                더 알아보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 미션 및 비전 섹션 */}
      <section className="relative py-24 bg-gradient-to-b from-[#000a5e] to-[#000a5e] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-16 text-center font-['Orbitron']">WHY WE EXIST</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-4 font-['Orbitron']">{item.title}</h3>
                <p className="text-white/90 font-['Pretendard'] text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 구단주 소개 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#000a5e] font-['Orbitron']">OWNER</h2>
          <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=김남수 교수"
                    alt="김남수 교수"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#000a5e] font-['Pretendard']">김남수 교수</h3>
                <p className="text-gray-700 mb-4 font-['Pretendard'] text-lg">한국외대 글로벌스포츠산업학부 교수</p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 font-['Pretendard'] text-lg">
                  <li>서울대 스포츠과학연구소 수석연구원</li>
                  <li>수원FC 사외이사</li>
                  <li className="font-['Pretendard']">2002 한일 월드컵 특별행사 기획 담당</li>
                  <li className="font-['Pretendard']">1998~1999 루트에듀케이션 마케팅 매니저</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 핵심 목표 섹션 */}
      <section className="relative py-24 bg-gradient-to-b from-[#000a5e] to-[#000a5e] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-16 text-center font-['Orbitron']">CORE GOALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreGoals.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-4 font-['Orbitron']">{goal.title}</h3>
                <ul className="list-disc pl-5 space-y-3 text-white/90 font-['Pretendard'] text-lg">
                  {goal.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 연혁 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#000a5e] font-['Orbitron']">HISTORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {history.map((stage, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#000a5e] text-white p-4">
                  <h3 className="text-xl font-bold font-['Orbitron'] font-['Pretendard']">{stage.stage}</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 font-['Pretendard'] text-lg">
                    {stage.events.map((event, eventIndex) => (
                      <li key={eventIndex}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 조직도 섹션 */}
      <section className="relative py-24 bg-gradient-to-b from-[#000a5e] to-[#000a5e] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-16 text-center font-['Orbitron']">ORGANIZATION</h2>

          <div className="max-w-5xl mx-auto">
            {/* 조직도 */}
            <div className="org-chart">
              {/* OWNER */}
              <div className="flex justify-center">
                <div className="org-box owner">
                  <span className="font-['Orbitron']">{organization.owner}</span>
                </div>
              </div>

              {/* 연결선 */}
              <div className="org-line vertical" style={{ top: "60px" }}></div>

              {/* 단장 */}
              <div className="flex justify-center">
                <div className="org-box director">
                  <span className="font-['Pretendard']">{organization.director}</span>
                </div>
              </div>

              {/* 연결선 */}
              <div className="org-line vertical" style={{ top: "140px" }}></div>

              {/* 특별 부서 */}
              <div className="flex justify-center">
                <div className="special-units">
                  {organization.specialUnits.map((unit, index) => (
                    <div key={index} className="special-unit font-['Pretendard']">
                      {unit}
                    </div>
                  ))}
                </div>
              </div>

              {/* 부서들 */}
              <div className="departments">
                {organization.departments.map((dept, index) => (
                  <div key={index} className="department-container">
                    <div className="org-box department">
                      <span className="font-['Pretendard']">{dept.name}</span>
                    </div>
                    {dept.teams.length > 0 && (
                      <div className="teams">
                        {dept.teams.map((team, teamIndex) => (
                          <div key={teamIndex} className="team font-['Pretendard']">
                            {team}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 선수단 운영 구조 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#000a5e] font-['Orbitron']">TEAM STRUCTURE</h2>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* 정예 23인 대표팀 */}
              <div className="md:w-1/2 bg-gradient-to-br from-[#000a5e] to-[#001394] text-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="w-10 h-10 mr-4" />
                    <h3 className="text-2xl font-bold font-['Orbitron']">정예 23인 대표팀</h3>
                  </div>
                  <div className="font-['Pretendard'] text-lg leading-relaxed">
                    <p className="mb-6">A팀(K7 리그 참가)과 B팀(JV: 훈련 중심, 실전 경험 강화)으로 구성</p>

                    <div className="flex flex-col gap-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">A팀</h4>
                        <p>K7 리그 참가 / 주요 대회 출전</p>
                      </div>

                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">B팀 (JV)</h4>
                        <p>훈련 중심 / 실전 경험 강화</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 출전 대회 */}
              <div className="md:w-1/2 bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#000a5e]">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-10 h-10 mr-4 text-[#000a5e]" />
                    <h3 className="text-2xl font-bold text-[#000a5e] font-['Orbitron']">출전 대회</h3>
                  </div>

                  <ul className="space-y-4 font-['Pretendard'] text-lg">
                    {teamStructure[1].items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#000a5e] text-white flex items-center justify-center mr-4 font-bold font-['Pretendard']">
                          {index + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 2025 주요 정책 방향 섹션 */}
      <section className="relative py-24 bg-gradient-to-b from-[#000a5e] to-[#000a5e] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-16 text-center font-['Orbitron']">2025 POLICY DIRECTIONS</h2>

          <div className="max-w-6xl mx-auto">
            <div className="policy-grid">
              {policyDirections.map((policy, index) => (
                <div key={index} className="policy-card">
                  <div className="policy-icon">{policy.icon}</div>
                  <div className="policy-content">
                    <h3 className="policy-title font-['Orbitron']">{policy.title}</h3>
                    <ul className="policy-items font-['Pretendard']">
                      {policy.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 신규 프로젝트 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#000a5e] font-['Orbitron']">NEW PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newProjects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#000a5e] text-white p-4">
                  <h3 className="text-xl font-bold font-['Orbitron']">{project.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 font-['Pretendard'] text-lg">
                    {project.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-8"></div>

      {/* 마무리 섹션 - JUST IN OUR WAY */}
      <section className="py-32 bg-[#000a5e] text-white">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 font-['Orbitron'] tracking-wider outline-text">
              JUST IN
            </h2>
            <h2 className="text-6xl md:text-8xl font-bold font-['Orbitron'] tracking-wider text-white">OUR WAY</h2>
          </div>
        </div>
      </section>

      {/* 뉴스레터 구독 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#000a5e] font-['Orbitron']">STAY CONNECTED</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-700 mb-6 font-['Pretendard'] text-lg">
              I-WAY의 최신 소식과 이벤트 정보를 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#000a5e] font-['Pretendard']"
              />
              <button className="bg-[#000a5e] text-white px-6 py-3 rounded-full font-medium hover:bg-[#001394] transition-colors font-['Pretendard']">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='1440' height='800' viewBox='0 0 1440 800' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L48 26.7C96 53.3 192 107 288 133.3C384 160 480 160 576 144C672 128 768 96 864 101.3C960 107 1056 149 1152 165.3C1248 181 1344 171 1392 165.3L1440 160V800H1392C1344 800 1248 800 1152 800C1056 800 960 800 864 800C768 800 672 800 576 800C480 800 384 800 288 800C192 800 96 800 48 800H0V0Z' fill='white' fillOpacity='0.1'/%3E%3Cpath d='M0 200L48 213.3C96 227 192 253 288 240C384 227 480 173 576 165.3C672 157 768 195 864 224C960 253 1056 275 1152 261.3C1248 248 1344 200 1392 176L1440 152V800H1392C1344 800 1248 800 1152 800C1056 800 960 800 864 800C768 800 672 800 576 800C480 800 384 800 288 800C192 800 96 800 48 800H0V200Z' fill='white' fillOpacity='0.1'/%3E%3Cpath d='M0 400L48 384C96 368 192 336 288 325.3C384 315 480 325 576 362.7C672 400 768 464 864 469.3C960 475 1056 421 1152 384C1248 347 1344 325 1392 314.7L1440 304V800H1392C1344 800 1248 800 1152 800C1056 800 960 800 864 800C768 800 672 800 576 800C480 800 384 800 288 800C192 800 96 800 48 800H0V400Z' fill='white' fillOpacity='0.1'/%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
        }
        
        /* 조직도 스타일 */
        .org-chart {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
        }

        .org-box {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          border-radius: 30px;
          font-weight: bold;
          font-size: 1.25rem;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .owner {
          width: 240px;
          background: linear-gradient(90deg, #000a5e 0%, #ffffff 100%);
          color: white;
          margin-bottom: 20px; /* 간격 줄임 */
        }

        .director {
          width: 240px;
          background: linear-gradient(90deg, #000a5e 0%, #ffffff 100%);
          color: white;
          margin-bottom: 20px; /* 간격 줄임 */
        }

        .department {
          width: 240px;
          border: 2px solid white;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .department:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .special-units {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          color: white;
          font-size: 1.1rem;
          margin-bottom: 20px; /* 간격 줄임 */
          background-color: rgba(255, 255, 255, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
        }

        .special-unit {
          display: flex;
          align-items: center;
        }

        .departments {
          display: flex;
          justify-content: space-around;
          width: 100%;
          position: relative;
          z-index: 2;
          margin-top: 20px; /* 간격 줄임 */
        }

        .department-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30%;
        }

        .teams {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 0.75rem;
          width: 100%;
        }

        .team {
          color: white;
          font-size: 1rem;
        }

        .org-line {
          position: absolute;
          background-color: white;
          z-index: 1;
        }

        .vertical {
          width: 2px;
          height: 20px; /* 세로줄 길이 조정 */
          left: 50%;
          transform: translateX(-50%);
        }

        .vertical-to-dept {
          display: none;
        }

        /* 정책 방향 스타일 */
        .policy-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .policy-card {
          display: flex;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%);
        }

        .policy-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #001394;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }

        .policy-content {
          flex: 1;
        }

        .policy-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .policy-items {
          list-style-type: disc;
          padding-left: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .policy-grid {
            grid-template-columns: 1fr;
          }

          .departments {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }

          .department-container {
            width: 100%;
          }
        }

        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px white;
          text-stroke: 2px white;
        }

        @media (max-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 1px white;
            text-stroke: 1px white;
          }
        }
      `}</style>
    </div>
  )
}

