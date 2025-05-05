"use client"

import { useState } from "react"
import { FaCartPlus } from "react-icons/fa"
import { IoShareSocial } from "react-icons/io5"

interface ProductDetailsProps {
  title?: string
  rating?: number
  reviewCount?: number
  sales?: number
  personalPrice?: number
  commercialPrice?: number
  services?: {
    title: string
    price: number
    checked?: boolean
  }[]
  finalPrice?: number
  description?: string
  features?: string[]
  lastUpdate?: string
  created?: string
  category?: string
  highResolution?: string
  compatibleBrowsers?: string[]
  softwareVersion?: string
  tags?: string[]
}

export default function ProductDetailsComponent({
  title = "Bizpro - Business WordPress Theme",
  rating = 5.0,
  reviewCount = 89,
  sales = 15,
  services = [
    { title: "Get 6 More Months Of Support And Save", price: 27, checked: true },
    { title: "Installation, Setup and Customization Package", price: 29 },
    { title: "All-in-One Customization", price: 29 },
    { title: "Installation and Customization Package", price: 29 },
  ],
  finalPrice = 36,
  description = "This is a modern and professional WordPress theme designed for finance and business websites, corporate agencies, marketing companies, and similar organizations. The theme is fully responsive with all the features you need to showcase your services.",
  features = [
    "Clean Code and a well-structured project",
    "Responsive design for both desktop & mobile",
    "RTL language for both English & Arabic",
    "SEO optimized",
    "Cross-browser compatibility",
    "Email subscription",
    "Fast Admin dashboard & customization options",
    "Regular updates and more",
  ],
  lastUpdate = "October 2023",
  created = "January 2022",
  category = "Business",
  highResolution = "Yes",
  compatibleBrowsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge"],
  softwareVersion = "Latest",
  tags = ["Business", "Corporate", "Finance", "Modern", "Responsive", "WordPress"],
}: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState("details")
  const [licenseType, setLicenseType] = useState("personal")
  const [checkedServices, setCheckedServices] = useState(services.map((service) => service.checked || false))

  const toggleService = (index: number) => {
    const newCheckedServices = [...checkedServices]
    newCheckedServices[index] = !newCheckedServices[index]
    setCheckedServices(newCheckedServices)
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex border-b overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => setActiveTab("details")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "details" ? " text-[#6021D1] bg-gradient-to-t from-[#7446ca] to-white border border-purple-200" : "text-gray-600"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 font-medium text-sm flex items-center gap-1 ${
            activeTab === "reviews" ? "border-b-2 border-[#6021D1] text-[#6021D1]" : "text-gray-600"
          }`}
        >
          <span>Reviews</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="ml-1 text-xs">{rating}</span>
            <span className="ml-1 bg-[#2353F5] text-white text-xs px-1 rounded">{reviewCount}</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("comment")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "comment" ? "border-b-2 border-[#6021D1] text-[#6021D1]" : "text-gray-600"
          }`}
        >
          Comment
        </button>
        <button
          onClick={() => setActiveTab("support")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "support" ? "border-b-2 border-[#6021D1] text-[#6021D1]" : "text-gray-600"
          }`}
        >
          Support
        </button>
        <div className="ml-auto flex items-center gap-1 px-4 font-bold">
        <FaCartPlus />
          <span className="text-sm text-[#2F1C6A]">Sales: {sales}</span>
        </div>
        <div className="flex items-center gap-1 text-orange-500 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-sm">12 Month Free Support</span>
        </div>
        <div className="flex items-center gap-1 text-green-500 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-sm">Lifetime Free update</span>
        </div>
        <button className="text-gray-600 p-1 hover:bg-gray-100 rounded-full">
        <IoShareSocial />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        {/* Left side - Product Image and Details */}
        <div className="lg:col-span-2">
          {/* Tab Content */}
          {activeTab === "details" && (
            <div>
              {/* Product Image */}
              <div className="bg-gray-200 rounded-md aspect-video mb-4"></div>

              <div className="flex gap-2 mb-8">
                <button className="flex items-center px-4 py-2 bg-purple-900 text-white rounded-md text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Live Preview
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  Screenshots
                </button>
              </div>

              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 text-sm mb-6">{description}</p>

              {/* Promo Banner */}
              <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-4 rounded-md mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Get -50% OFF</h3>
                    <p className="text-xs">When you buy any 3 items of your choice</p>
                  </div>
                  <button className="mt-3 md:mt-0 bg-white text-purple-900 px-4 py-1 rounded-md text-xs font-medium hover:bg-gray-100">
                    View Offer
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Product Features</h3>
                <ul className="space-y-2 text-sm">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Description and Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Product Description</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Responsive</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>RTL</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Source Code Included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>SEO</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Bootstrap Included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Clean Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Creative Menu</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6021D1] mr-2"></div>
                      <span>Lifetime Updates</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">Last Update</h4>
                    <p>{lastUpdate}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">Created</h4>
                    <p>{created}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">Category</h4>
                    <p>{category}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">High Resolution</h4>
                    <p>{highResolution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">Compatible Browsers</h4>
                    <p>{compatibleBrowsers.join(", ")}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-1">Software Version</h4>
                    <p>{softwareVersion}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Version */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3">Software Version</h3>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>5.1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>5.2</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && <div className="p-4">Reviews content here</div>}

          {activeTab === "comment" && <div className="p-4">Comment content here</div>}

          {activeTab === "support" && <div className="p-4">Support content here</div>}
        </div>

        {/* Right side - Pricing and Purchase */}
        <div className="lg:col-span-1">
          <div className="border rounded-md p-4">
            {/* License Options */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="personal"
                      name="license"
                      value="personal"
                      checked={licenseType === "personal"}
                      onChange={() => setLicenseType("personal")}
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:border-4 checked:border-[#6021D1]"
                    />
                  </div>
                  <label htmlFor="personal" className="text-xs font-medium">
                    Personal License
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-500 line-through text-xs">$29</span>
                  <span className="text-[#6021D1] font-bold text-lg">$29</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="commercial"
                      name="license"
                      value="commercial"
                      checked={licenseType === "commercial"}
                      onChange={() => setLicenseType("commercial")}
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:border-4 checked:border-[#6021D1]"
                    />
                  </div>
                  <label htmlFor="commercial" className="text-xs font-medium">
                    Commercial License
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-bold text-lg">$60</span>
                </div>
              </div>
            </div>

            {/* Recommended Services */}
            <div className="mb-6">
              <h3 className="font-bold text-sm mb-3">Recommended Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${index}`}
                          checked={checkedServices[index]}
                          onChange={() => toggleService(index)}
                          className="appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-[#6021D1] checked:border-transparent"
                        />
                        <svg
                          className={`absolute w-3 h-3 text-white left-0.5 top-0.5 pointer-events-none ${checkedServices[index] ? "block" : "hidden"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <label htmlFor={`service-${index}`} className="text-xs">
                        {service.title}
                      </label>
                    </div>
                    <div>
                      <span className="font-medium text-sm">${service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coupon */}
            <div className="bg-pink-50 rounded-md p-3 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-pink-500">
                <span className="text-sm">Apply Coupon</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500 w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-md flex items-center justify-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Buy Now - ${finalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

