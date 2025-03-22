"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, FileText, ShoppingBag, X, Youtube, ArrowRight } from "lucide-react"

export default function FloatingButtons() {
  const [showPromoText, setShowPromoText] = useState(true)

  // 페이지 로드 시 프로모션 텍스트 표시
  useEffect(() => {
    setShowPromoText(true)
  }, [])

  // 모든 버튼에 적용할 공통 스타일
  const buttonStyle =
    "bg-[#000a5e] text-white p-3 rounded-full shadow-lg hover:bg-[#001394] transition-colors flex items-center justify-center w-12 h-12"

  return (
    <>
      {/* 플로팅 버튼 */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* 버튼 그룹 */}
        <div className="flex flex-col gap-3 items-end">
          {/* 마플샵 버튼과 프로모션 텍스트 */}
          <div className="flex items-center">
            {showPromoText && (
              <div className="relative mr-3 bg-gradient-to-r from-[#000a5e] to-[#001394]/80 rounded-lg shadow-lg p-3 max-w-[180px]">
                <button
                  onClick={() => setShowPromoText(false)}
                  className="absolute -top-2 -right-2 text-black hover:text-gray-700 cursor-pointer"
                  aria-label="Close promotion"
                >
                  <X className="w-2 h-2" />
                </button>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 font-bold text-xs flex flex-col">
                  <span>I-WAY가 직접 디자인한</span>
                  <span className="flex items-center">
                    제품들을 만나보세요!
                    <ArrowRight className="w-3 h-3 ml-1 text-white" />
                  </span>
                </div>
              </div>
            )}
            <Link
              href="https://marpple.shop/kr/iway_football_club?srsltid=AfmBOop_cnvi2gktOKZ4TjK5WJ2dmBAHy9MmrcTV-zXKwk57UbwS_dvk"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyle}
              aria-label="Shop"
            >
              <ShoppingBag className="w-6 h-6" />
            </Link>
          </div>

          <Link
            href="https://www.instagram.com/hufs_iway/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </Link>

          <Link
            href="https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%9B%A8%EC%9D%B4%EC%95%84%EB%A7%88%EC%B6%94%EC%96%B4%EC%B6%95%EA%B5%AC%EB%8B%A8"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="Namu Wiki"
          >
            <FileText className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.youtube.com/@hufs_i-way"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  )
}

