import Image from "next/image"

export default function TeamPage() {
  // 사무국 데이터
  const office = [
    // 구단주 및 단장
    {
      name: "김남수",
      position: "구단주",
      department: "글로벌스포츠산업학부",
      year: "교수",
      contact: "010-0000-0000",
    },
    {
      name: "이우진",
      position: "단장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-9902-8727",
    },

    // 경영본부
    {
      name: "김광민",
      position: "경영본부장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-6663-7287",
    },

    // 축구인재육성실
    {
      name: "김민우",
      position: "축구인재육성실장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-2553-0699",
    },
    {
      name: "강유찬",
      position: "축구인재육성실 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9247-5737",
    },

    // PR/마케팅팀
    {
      name: "최서현",
      position: "PR/마케팅팀장",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-6225-9866",
    },
    {
      name: "문가연",
      position: "PR/마케팅팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-3367-4677",
    },
    {
      name: "박주형",
      position: "PR/마케팅팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-4194-0750",
    },
    {
      name: "서지윤",
      position: "PR/마케팅팀 사진매니저",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-6377-4920",
    },
    {
      name: "채연지",
      position: "PR/마케팅팀 영상매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-0000-0000",
    },
    {
      name: "강형빈",
      position: "PR/마케팅팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2022",
      contact: "010-9938-7482",
    },
    {
      name: "오재윤",
      position: "PR/마케팅팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-0000-0000",
    },
    {
      name: "정승엽",
      position: "PR/마케팅팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-6501-1705",
    },
    {
      name: "이수영",
      position: "PR/마케팅팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-7565-2235",
    },

    // 전략기획팀
    {
      name: "고민수",
      position: "전략기획팀장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-3207-9488",
    },
    {
      name: "이하경",
      position: "전략기획팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4910-8640",
    },
    {
      name: "윤규현",
      position: "전략기획팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9668-7071",
    },

    // 중앙사령팀
    {
      name: "조성재",
      position: "중앙사령팀장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4914-3432",
    },
    {
      name: "김충원",
      position: "중앙사령팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-4525-8765",
    },
    {
      name: "정준우",
      position: "중앙사령팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2022",
      contact: "010-7578-5688",
    },

    // 기술본부
    {
      name: "안수민",
      position: "기술본부장",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9483-7386",
    },

    // 선수운영팀
    {
      name: "정록윤",
      position: "선수운영팀장",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-5038-3793",
    },
    {
      name: "김완희",
      position: "선수운영팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-2676-4330",
    },
    {
      name: "김수성",
      position: "선수운영팀 핏매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-8797-5168",
    },

    // 전력분석팀
    {
      name: "이우준",
      position: "전력분석팀장",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-2370-9279",
    },
    {
      name: "이태환",
      position: "전력분석팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-2108-6314",
    },
    {
      name: "김현지",
      position: "전력분석팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-8393-0930",
    },

    // 스포츠과학팀
    {
      name: "김태현",
      position: "스포츠과학팀장",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-9390-9429",
    },
    {
      name: "임민규",
      position: "스포츠과학팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-0000-0000",
    },

    // 오재은 (명단에 있지만 조직도에 없는 경우)
    {
      name: "오재은",
      position: "매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9423-1787",
    },
  ]

  // 선수단 데이터 (사무국겸 선수 + 순수 선수)
  const players = [
    // 사무국겸 선수
    {
      name: "김충원",
      position: "MF / 중앙사령팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-4525-8765",
      playerNumber: 17,
      isOfficeStaff: true,
    },
    {
      name: "김민우",
      position: "DF / 축구인재육성실장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-2553-0699",
      playerNumber: 11,
      isOfficeStaff: true,
    },
    {
      name: "이하경",
      position: "FW / 전략기획팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4910-8640",
      playerNumber: 32,
      isOfficeStaff: true,
      isCaptain: "VC", // 부주장
    },
    {
      name: "김광민",
      position: "MF / 경영본부장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-6663-7287",
      playerNumber: 25,
      isOfficeStaff: true,
    },
    {
      name: "이태환",
      position: "GK / 전력분석팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-2108-6314",
      playerNumber: 1,
      isOfficeStaff: true,
    },
    {
      name: "임민규",
      position: "FW / 스포츠과학팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9373-7296",
      playerNumber: 24,
      isOfficeStaff: true,
    },
    {
      name: "김완희",
      position: "DF / 선수운영팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-2676-4330",
      playerNumber: 4,
      isOfficeStaff: true,
    },
    {
      name: "정예철",
      position: "MF / 매니저",
      department: "독일어통번역학과",
      year: "2021",
      contact: "010-4613-5433",
      playerNumber: 5,
      isOfficeStaff: true,
    },
    {
      name: "조성재",
      position: "FW / 중앙사령팀장",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4914-3432",
      playerNumber: 12,
      isOfficeStaff: true,
    },
    {
      name: "김태현",
      position: "MF / 스포츠과학팀장",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-9390-9429",
      playerNumber: 2,
      isOfficeStaff: true,
    },
    {
      name: "박주형",
      position: "DF / PR/마케팅팀 수석매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-4194-0750",
      playerNumber: 29,
      isOfficeStaff: true,
    },
    {
      name: "김성태",
      position: "FW / 매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-6329-3015",
      playerNumber: 34,
      isOfficeStaff: true,
    },
    {
      name: "윤규현",
      position: "MF / 전략기획팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-9668-7071",
      playerNumber: 6,
      isOfficeStaff: true,
    },
    {
      name: "정승엽",
      position: "DF / PR/마케팅팀 매니저",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-6501-1705",
      playerNumber: 15,
      isOfficeStaff: true,
    },
    {
      name: "김태현",
      position: "MF / 매니저",
      department: "글로벌스포츠산업학부",
      year: "2025",
      contact: "010-3155-0433",
      playerNumber: 13,
      isOfficeStaff: true,
    },

    // 순수 선수
    {
      name: "신동재",
      position: "GK",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4594-4232",
      playerNumber: 22,
      isOfficeStaff: false,
    },
    {
      name: "김지환",
      position: "DF",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-3323-3982",
      playerNumber: 7,
      isOfficeStaff: false,
    },
    {
      name: "장시원",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-6568-6812",
      playerNumber: 8,
      isOfficeStaff: false,
    },
    {
      name: "심영웅",
      position: "FW",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-1234-5678",
      playerNumber: 9,
      isOfficeStaff: false,
    },
    {
      name: "김남수",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "구단주(교수)",
      contact: "010-0000-0000",
      playerNumber: 10,
      isOfficeStaff: false,
      isCaptain: "KING",
    },
    {
      name: "김충배",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2022",
      contact: "010-0000-0000",
      playerNumber: 16,
      isOfficeStaff: false,
      isCaptain: "C", // 주장
    },
    {
      name: "변찬결",
      position: "FW",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-4426-3295",
      playerNumber: 20,
      isOfficeStaff: false,
    },
    {
      name: "한정현",
      position: "DF",
      department: "글로벌스포츠산업학부",
      year: "2022",
      contact: "010-6520-3613",
      playerNumber: 23,
      isOfficeStaff: false,
    },
    {
      name: "이찬우",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-4722-3363",
      playerNumber: 33,
      isOfficeStaff: false,
    },
    {
      name: "박건",
      position: "FW",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-4779-1726",
      playerNumber: 18,
      isOfficeStaff: false,
    },
    {
      name: "박찬호",
      position: "DF",
      department: "생명공학과",
      year: "2021",
      contact: "010-9609-4105",
      playerNumber: 39,
      isOfficeStaff: false,
    },
    {
      name: "김태현",
      position: "MF",
      department: "독일어통번역학과",
      year: "2023",
      contact: "010-4921-5259",
      playerNumber: 14,
      isOfficeStaff: false,
    },
    {
      name: "정록윤",
      position: "FW / 선수운영팀장",
      department: "글로벌스포츠산업학부",
      year: "2024",
      contact: "010-5038-3793",
      playerNumber: 19,
      isOfficeStaff: true,
    },
    {
      name: "김서호",
      position: "DF",
      department: "글로벌스포츠산업학부",
      year: "2025",
      contact: "010-4912-4759",
      playerNumber: 15,
      isOfficeStaff: false,
    },
    {
      name: "서예준",
      position: "MF",
      department: "C&T융합대학 통합모집",
      year: "2025",
      contact: "010-8534-9711",
      playerNumber: 26,
      isOfficeStaff: false,
    },
    {
      name: "김우진",
      position: "FW",
      department: "C&T융합대학 통합모집",
      year: "2025",
      contact: "010-8434-6323",
      playerNumber: 28,
      isOfficeStaff: false,
    },
    {
      name: "김의현",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-2563-7392",
      playerNumber: 35,
      isOfficeStaff: false,
    },
    {
      name: "김홍배",
      position: "DF",
      department: "국제금융학과",
      year: "2022",
      contact: "010-7517-0051",
      playerNumber: 30,
      isOfficeStaff: false,
    },
    {
      name: "김대현",
      position: "FW",
      department: "글로벌스포츠산업학부",
      year: "2025",
      contact: "010-6654-2503",
      playerNumber: 31,
      isOfficeStaff: false,
    },
    {
      name: "진종민",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2021",
      contact: "010-9975-9670",
      playerNumber: 37,
      isOfficeStaff: false,
    },
    {
      name: "박건하",
      position: "DF",
      department: "자유전공학부",
      year: "2025",
      contact: "010-8214-2248",
      playerNumber: 3,
      isOfficeStaff: false,
    },
    {
      name: "조형철",
      position: "FW",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-5672-4449",
      playerNumber: 38,
      isOfficeStaff: false,
    },
    {
      name: "김병휘",
      position: "MF",
      department: "화학과",
      year: "2023",
      contact: "010-9600-0693",
      playerNumber: 20,
      isOfficeStaff: false,
    },
    {
      name: "유영탁",
      position: "DF",
      department: "화학과",
      year: "2024",
      contact: "010-6427-1162",
      playerNumber: 36,
      isOfficeStaff: false,
    },
    {
      name: "김대현",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-0000-0000",
      playerNumber: 27,
      isOfficeStaff: false,
    },
    {
      name: "김태현",
      position: "MF",
      department: "글로벌스포츠산업학부",
      year: "2023",
      contact: "010-0000-0000",
      playerNumber: 30,
      isOfficeStaff: false,
    },
  ]

  // 인턴 데이터
  const interns = [
    {
      name: "김규연",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "서예인",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "천청운",
      department: "C&T융합대학 통합모집",
      year: "2025",
    },
    {
      name: "진윤권",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "김정우",
      department: "글로벌스포츠산업학부",
      year: "2021",
    },
    {
      name: "박선후",
      department: "글로벌스포츠산업학부",
      year: "2022",
    },
    {
      name: "김태호",
      department: "글로벌자유전공학부",
      year: "2025",
    },
    {
      name: "정호성",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "고승한",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "최윤식",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "금동빈",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "허에준",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
    {
      name: "박하람",
      department: "글로벌스포츠산업학부",
      year: "2025",
    },
  ]

  return (
    <div className="pt-20">
      {/* 사무국 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center font-['Orbitron']">TEAM</h1>
          <h2 className="text-2xl font-bold mb-8 text-center">사무국</h2>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#000a5e] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">이름</th>
                  <th className="py-3 px-4 text-left">직책</th>
                  <th className="py-3 px-4 text-left">학과</th>
                  <th className="py-3 px-4 text-left">학번</th>
                  <th className="py-3 px-4 text-left">연락처</th>
                </tr>
              </thead>
              <tbody>
                {office.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border-b">{member.name}</td>
                    <td className="py-3 px-4 border-b">{member.position}</td>
                    <td className="py-3 px-4 border-b">{member.department}</td>
                    <td className="py-3 px-4 border-b">{member.year}</td>
                    <td className="py-3 px-4 border-b">{member.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 선수단 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">선수단</h2>

          {/* GK 섹션 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#000a5e] border-b-2 border-[#000a5e] pb-2">골키퍼 (GK)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players
                .filter((player) => player.position.includes("GK"))
                .sort((a, b) => a.playerNumber - b.playerNumber)
                .map((player, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${
                      player.isOfficeStaff ? "border-l-4 border-[#000a5e]" : ""
                    }`}
                  >
                    <div className="relative h-64">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${player.name}`}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#000a5e] text-white text-xl font-bold w-12 h-12 flex items-center justify-center">
                        {player.playerNumber}
                      </div>
                      {player.isCaptain && (
                        <div
                          className={`absolute top-0 left-0 ${player.isCaptain === "C" ? "bg-yellow-500" : player.isCaptain === "VC" ? "bg-blue-500" : "bg-purple-500"} text-white text-sm font-bold px-2 py-1`}
                        >
                          {player.isCaptain}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{player.name}</h3>
                      <p className="text-[#000a5e] font-medium mb-2">{player.position}</p>
                      <p className="text-gray-600 text-sm">{player.department}</p>
                      <p className="text-gray-600 text-sm">
                        {player.year}
                        {player.year.includes("교수") ? "" : "학번"}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* DF 섹션 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#000a5e] border-b-2 border-[#000a5e] pb-2">수비수 (DF)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players
                .filter((player) => player.position.includes("DF"))
                .sort((a, b) => a.playerNumber - b.playerNumber)
                .map((player, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${
                      player.isOfficeStaff ? "border-l-4 border-[#000a5e]" : ""
                    }`}
                  >
                    <div className="relative h-64">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${player.name}`}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#000a5e] text-white text-xl font-bold w-12 h-12 flex items-center justify-center">
                        {player.playerNumber}
                      </div>
                      {player.isCaptain && (
                        <div
                          className={`absolute top-0 left-0 ${player.isCaptain === "C" ? "bg-yellow-500" : player.isCaptain === "VC" ? "bg-blue-500" : "bg-purple-500"} text-white text-sm font-bold px-2 py-1`}
                        >
                          {player.isCaptain}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{player.name}</h3>
                      <p className="text-[#000a5e] font-medium mb-2">{player.position}</p>
                      <p className="text-gray-600 text-sm">{player.department}</p>
                      <p className="text-gray-600 text-sm">
                        {player.year}
                        {player.year.includes("교수") ? "" : "학번"}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* MF 섹션 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#000a5e] border-b-2 border-[#000a5e] pb-2">미드필더 (MF)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players
                .filter((player) => player.position.includes("MF"))
                .sort((a, b) => a.playerNumber - b.playerNumber)
                .map((player, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${
                      player.isOfficeStaff ? "border-l-4 border-[#000a5e]" : ""
                    }`}
                  >
                    <div className="relative h-64">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${player.name}`}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#000a5e] text-white text-xl font-bold w-12 h-12 flex items-center justify-center">
                        {player.playerNumber}
                      </div>
                      {player.isCaptain && (
                        <div
                          className={`absolute top-0 left-0 ${player.isCaptain === "C" ? "bg-yellow-500" : player.isCaptain === "VC" ? "bg-blue-500" : "bg-purple-500"} text-white text-sm font-bold px-2 py-1`}
                        >
                          {player.isCaptain}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{player.name}</h3>
                      <p className="text-[#000a5e] font-medium mb-2">{player.position}</p>
                      <p className="text-gray-600 text-sm">{player.department}</p>
                      <p className="text-gray-600 text-sm">
                        {player.year}
                        {player.year.includes("교수") ? "" : "학번"}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* FW 섹션 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#000a5e] border-b-2 border-[#000a5e] pb-2">공격수 (FW)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players
                .filter((player) => player.position.includes("FW"))
                .sort((a, b) => a.playerNumber - b.playerNumber)
                .map((player, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${
                      player.isOfficeStaff ? "border-l-4 border-[#000a5e]" : ""
                    }`}
                  >
                    <div className="relative h-64">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${player.name}`}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#000a5e] text-white text-xl font-bold w-12 h-12 flex items-center justify-center">
                        {player.playerNumber}
                      </div>
                      {player.isCaptain && (
                        <div
                          className={`absolute top-0 left-0 ${player.isCaptain === "C" ? "bg-yellow-500" : player.isCaptain === "VC" ? "bg-blue-500" : "bg-purple-500"} text-white text-sm font-bold px-2 py-1`}
                        >
                          {player.isCaptain}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{player.name}</h3>
                      <p className="text-[#000a5e] font-medium mb-2">{player.position}</p>
                      <p className="text-gray-600 text-sm">{player.department}</p>
                      <p className="text-gray-600 text-sm">
                        {player.year}
                        {player.year.includes("교수") ? "" : "학번"}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 인턴 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">INTERN</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#000a5e] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">이름</th>
                  <th className="py-3 px-4 text-left">학과</th>
                  <th className="py-3 px-4 text-left">학번</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border-b">{intern.name}</td>
                    <td className="py-3 px-4 border-b">{intern.department}</td>
                    <td className="py-3 px-4 border-b">{intern.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

