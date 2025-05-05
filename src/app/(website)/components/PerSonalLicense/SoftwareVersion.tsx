interface SoftwareVersionProps {
  versions?: string[]
}

export default function SoftwareVersion({ versions = ["8.1", "7.4", "8.0", "8.2"] }: SoftwareVersionProps) {
  return (
    <div className="border border-[#E5E7EB] rounded-lg p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Software version</h3>
      <div className="border-t border-[#E5E7EB] pt-4">
        <div className="grid grid-cols-2 gap-4">
          {versions.map((version, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#00BA00] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 text-white"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-[#6B7280] font-bold">{version}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

