import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#000a5e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I-WAY_Emblem_White-4249ZxpebKCXT7NzoV6QbcNYTV9S44.png"
              alt="I-WAY Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="font-['Orbitron'] text-xl font-bold mb-2">I-WAY</h3>
            <p className="text-sm text-gray-300 text-center md:text-left">
              한국외국어대학교 글로벌스포츠산업학부 소속 아마추어 축구단
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4">CONTACT</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-sm">경기도 용인시 처인구 모현읍 외대로 81</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm">iway.season2@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-2" />
                <span className="text-sm">@hufs_iway</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4">LINKS</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/club" className="text-sm hover:underline">
                구단소개
              </Link>
              <Link href="/team" className="text-sm hover:underline">
                팀 구성
              </Link>
              <Link href="/history" className="text-sm hover:underline">
                연혁
              </Link>
              <Link href="/sponsor" className="text-sm hover:underline">
                스폰서
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} I-WAY AMATEUR FOOTBALL CLUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

