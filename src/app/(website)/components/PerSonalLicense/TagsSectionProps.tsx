"use client"

import { useState } from "react"

interface TagsSectionProps {
  tags?: string[]
  selectedTag?: string
  onTagSelect?: (tag: string) => void
}

export default function TagsSection({
  tags = [
    "Agency",
    "Builder",
    "Business",
    "Corporate",
    "Multipurpose",
    "Gym",
    "Revolution",
    "Industry",
    "Personal",
    "Portfolio",
    "Responsive",
    "Portfolio",
  ],
  selectedTag = "Multipurpose",
  onTagSelect = () => {},
}: TagsSectionProps) {
  const [selected, setSelected] = useState(selectedTag)

  const handleTagClick = (tag: string) => {
    setSelected(tag)
    onTagSelect(tag)
  }

  return (
    <div className="border border-[#E5E7EB] rounded-lg p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Tags</h3>
      <div className="border-t border-[#E5E7EB] pt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-md text-sm ${
                selected === tag ? "bg-[#2F1C6A] text-white" : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

