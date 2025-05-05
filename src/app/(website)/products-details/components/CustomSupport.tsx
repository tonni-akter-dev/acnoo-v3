"use client"

import { useState } from "react"
import commenticon from "/public/commenticon.svg"
import Image from "next/image"
interface CustomerSupportProps {
  rating?: number
  customerName?: string
  daysAgo?: number
  reviewText?: string
  companyName?: string
  companyResponse?: string
}

export default function CustomerSupport({
  rating = 5,
  customerName = "Esther Howard",
  daysAgo = 8,
  reviewText = "I've been working with acnoo for two years now. As a learning tool it's been invaluable. But as I've gone from a beginner to an intermediate React dev I've learnt that the quality of this kit is lacking. I've had to rewrite substantial portions of the original components.\n\nThat said I got further by using this kit then without. So as a tool it has served it's purpose well.",
  companyName = "Acnoo",
  companyResponse = "Thank you for your valuable feedback. Our support team has already replied you before sometime. Please review it and feel free to share more details with support team so they can help you. Your patience will be highly appreciated. Hope you will consider changing your rating soon.\n\nThank you",
}: CustomerSupportProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-3 lg:mb-4">
      <div
        className="bg-[#F5EFFF] rounded-md overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header - Always visible */}
        <div className="px-2.5 lg:px-5 py-2 lg:py-4 flex justify-between items-start">
          <div>
            <h2 className="font-medium text-purple-900">Customer Support</h2>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h2 className="font-medium">{customerName}</h2>
            <span className="text-sm text-gray-500">{daysAgo} days ago</span>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="bg-white  px-2.5 lg:px-5  py-2 lg:py-4">
            {/* Customer review */}
            <p className="text-gray-700 mb-4 text-sm">
              {reviewText.split("\n\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  {index < reviewText.split("\n\n").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </p>

            {/* Company response */}
            <div className="rounded-md lg:p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  <Image src={commenticon} alt="Logo"/>
                </div>
                <span className="font-medium">{companyName}</span>
              </div>
              <p className="text-gray-700 text-sm">
                {companyResponse.split("\n\n").map((paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    {index < companyResponse.split("\n\n").length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

