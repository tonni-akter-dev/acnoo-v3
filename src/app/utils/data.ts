import icon1 from '/public/admindashboard/icon1.png'
import icon2 from '/public/admindashboard/icon2.png'
import icon3 from '/public/admindashboard/icon3.png'
import icon4 from '/public/admindashboard/icon4.png'
import icon5 from '/public/admindashboard/icon5.png'
import icon6 from '/public/admindashboard/icon6.png'
import icon7 from '/public/admindashboard/icon7.png'
import icon8 from '/public/admindashboard/icon8.png'
import icon9 from '/public/admindashboard/icon9.png'
import icon10 from '/public/admindashboard/icon10.png'
import icon11 from '/public/admindashboard/icon11.png'
import icon12 from '/public/admindashboard/icon12.png'
import icon13 from '/public/admindashboard/icon13.png'
import icon14 from '/public/admindashboard/icon14.png'
import icon15 from '/public/admindashboard/icon15.png'
import icon16 from '/public/admindashboard/icon16.png'
import icon17 from '/public/admindashboard/icon9.png'
import icon18 from '/public/admindashboard/icon10.png'
import icon19 from '/public/admindashboard/icon11.png'
import icon20 from '/public/admindashboard/icon12.png'
import portfolio from '/public/png/portfolio.svg';
import portfolio2 from '/public/png/portfolio2.svg';
import portfolio3 from '/public/png/portfolio3.svg';
import portfolio4 from '/public/png/portfolio4.svg';
import head1 from '/public/ecommerce/h1.png';
import head2 from '/public/ecommerce/h2.png';
import head3 from '/public/ecommerce/h3.png';
import head4 from '/public/ecommerce/h4.png';

import service1 from '/public/service1.png';
import service2 from '/public/service2.png';
import service3 from '/public/service3.png';
import service4 from '/public/service4.png';
import service5 from '/public/service5.png';
import service6 from '/public/service6.png';
import service7 from '/public/service7.png';
import service8 from '/public/service8.png';
import service9 from '/public/service9.png';
import service10 from '/public/service10.png';
import service11 from '/public/service11.png';
import service12 from '/public/service12.png';



interface FaqItem {
  title: string;
  answer: string;
  code?: string;
  manual?: string;
}

export const categoriesData = [
  { name: "Site Templates", count: "21,674" },
  { name: "WordPress", count: "12,047" },
  { name: "UI Templates", count: "10,254" },
  { name: "Template Kits", count: "5,248" },
  { name: "eCommerce ", count: "3,933" },
  { name: "Marketing  ", count: "2,722 " },
  { name: "CMS Themes  ", count: "1,556" },
  { name: "Muse Templates", count: "612 " },
  { name: "Blogging  ", count: "375" },
  { name: "Jamstack  ", count: "249" },
  { name: "Courses  ", count: "125" },
  { name: "Forums  ", count: " 20" },
]
export const softwareVersionsData = [
  { name: "Adobe", count: "1,701" },
  { name: "Sketch", count: "2,003" },
  { name: "Flutter", count: "22,722" },
  { name: "Figma", count: "30,920" },
  { name: "WordPress", count: "1,469" },
];

export const SaleData = [
  { name: "Low", count: "2,003" },
  { name: "Medium", count: "22,722" },
  { name: "High", count: "30,920" },
  { name: "Top Sellers ", count: "1,469" }
];
export const RatingData = [
  { name: "5 Star and Higher ", count: "  17" },
  { name: "4 Star and Higher", count: "34" },
  { name: "2 Star and Higher ", count: "34" },
  { name: "1 Star and Higher  ", count: "18" }
];


export const servicesData = [
  {
    id: 1,
    img: service1,
    title: "FashionWave",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 49,
    rating: 4,
    category: "Web Development"
  },
  {
    id: 2,
    img: service2,
    title: "StyleCart",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 59,
    rating: 4,
    category: "Mobile Application"
  },
  {
    id: 3,
    img: service3,
    title: "GlamShop",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 39,
    rating: 4,
    category: "Software Development"
  },
  {
    id: 4,
    img: service4,
    title: "ElegantLook",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 45,
    rating: 4,
    category: "UI/UX Design"
  },
  {
    id: 5,
    img: service5,
    title: "TrendyMart",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 52,
    rating: 4,
    category: "Graphic Design"
  },
  {
    id: 6,
    img: service6,
    title: "UrbanWear",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 41,
    rating: 4,
    category: "Digital Marketing"
  },
  {
    id: 7,
    img: service7,
    title: "ChicZone",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 48,
    rating: 4,
    category: "Web Development"
  },
  {
    id: 8,
    img: service8,
    title: "ModaExpress",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 46,
    rating: 4,
    category: "Mobile Application"
  },
  {
    id: 9,
    img: service9,
    title: "StyleFusion",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 60,
    rating: 4,
    category: "Software Development"
  },
  {
    id: 10,
    img: service10,
    title: "VogueMarket",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 50,
    rating: 4,
    category: "UI/UX Design"
  },
  {
    id: 11,
    img: service11,
    title: "MetroStyle",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 43,
    rating: 4,
    category: "Graphic Design"
  },
  {
    id: 12,
    img: service12,
    title: "LookBook",
    des: "Multi-purpose Joomla eCommerce Template for Fashion Stores",
    price: 47,
    rating: 4,
    category: "Digital Marketing"
  }
];

export const willGet = [
  {
    id: 1,
    title: "Clean Code and a well-structured project"
  },
  {
    id: 2,
    title: "Single code base for both Android & iOS"
  },
  {
    id: 3,
    title: "60 FPS Support for both Android & iOS"
  },
  {
    id: 4,
    title: "Fully responsive UI"
  },
  {
    id: 5,
    title: "Best UI & UX"
  },
  {
    id: 6,
    title: "Great animation"
  },
  {
    id: 7,
    title: "Easy to customize"
  },
  {
    id: 8,
    title: "Free lifetime updates & stunning customer support"
  },
  {
    id: 9,
    title: "Easy to integrate into your project"
  }
]

export const pricingData = [
  {
    type: "Basic",
    price: "$49.00",
    delivery: "2 Days Delivery",
    includes: [
      "Responsive Design",
      "Up to 3 pages",
      "Basic SEO Setup",
      "1 Revision"
    ]
  },
  {
    type: "Standard",
    price: "$89.00",
    delivery: "4 Days Delivery",
    includes: [
      "Responsive Design",
      "Up to 6 pages",
      "Advanced SEO",
      "2 Revisions"
    ]
  },
  {
    type: "Premium",
    price: "$129.00",
    delivery: "7 Days Delivery",
    includes: [
      "Full Custom Design",
      "Unlimited Pages",
      "Premium SEO",
      "5 Revisions"
    ]
  }
];


export const productFeatures = [
  {
    title: "Lifetime updates",
    icon: icon1,
    color: "rgba(43, 98, 255, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Multi Languages",
    icon: icon2,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Regular bug fixing",
    icon: icon3,
    color: "#FFF0F1",
    borderColor: "#F5F5F5"
  },
  {
    title: "Clean code",
    icon: icon4,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Pos Sales",
    icon: icon5,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Sales List",
    icon: icon6,
    color: "rgba(26, 153, 142, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Parties",
    icon: icon7,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Items List",
    icon: icon8,
    color: "rgba(40, 97, 255, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Purchase",
    icon: icon9,
    color: "rgba(165, 103, 82, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Sale Return",
    icon: icon10,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Due List",
    icon: icon11,
    color: "rgba(165, 103, 82, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Loss/Profit",
    icon: icon12,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Stocks",
    icon: icon13,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Ledger",
    icon: icon14,
    color: "rgba(154, 25, 255, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Reports",
    icon: icon15,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Much More...",
    icon: icon16,
    color: "rgba(26, 210, 149, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Purchase",
    icon: icon17,
    color: "rgba(165, 103, 82, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Sale Return",
    icon: icon18,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Due List",
    icon: icon19,
    color: "rgba(255, 80, 80, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Loss/Profit",
    icon: icon20,
    color: "white",
    borderColor: "#E5E5E5"
  }
]
export const mobileProductFeatures = [
  {
    title: "Lifetime updates",
    icon: icon1,
    color: "rgba(43, 98, 255, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Multi Languages",
    icon: icon2,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Clean code",
    icon: icon4,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Regular bug fixing",
    icon: icon3,
    color: "#FFF0F1",
    borderColor: "#F5F5F5"
  },
  {
    title: "Sales List",
    icon: icon6,
    color: "rgba(26, 153, 142, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Pos Sales",
    icon: icon5,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Parties",
    icon: icon7,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Items List",
    icon: icon8,
    color: "rgba(40, 97, 255, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Purchase",
    icon: icon9,
    color: "rgba(165, 103, 82, 0.10)",
    borderColor: "#F5F5F5"
  },
  {
    title: "Sale Return",
    icon: icon10,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Due List",
    icon: icon11,
    color: "white",
    borderColor: "#F5F5F5"
  },
  {
    title: "Loss/Profit",
    icon: icon12,
    color: "rgba(165, 103, 82, 0.10)",
    borderColor: "#E5E5E5"
  },
  {
    title: "Stocks",
    icon: icon13,
    color: "rgba(0, 122, 255, 0.10)",
    borderColor: "#E5E5E5"
  },
  {
    title: "Ledger",
    icon: icon14,
    color: "white",
    borderColor: "#F5F5F5"
  },
  {
    title: "Reports",
    icon: icon15,
    color: "white",
    borderColor: "#E5E5E5"
  },
  {
    title: "Much More...",
    icon: icon16,
    color: "rgba(26, 210, 149, 0.10)",
    borderColor: "#F5F5F5"
  }
];

export const productsDetailsData = [
  {
    name: "Premium",
  },
  {
    name: "Pro",
  },
  {
    name: "Search Engine Friendly",
  },
  {
    name: "Ajax",
  },
  {
    name: "Mobile Layout Included",
  },
  {
    name: "Multipurpose",
  },
  {
    name: "Novi Builder",
  },
  {
    name: "Dropdown Menu",
  },
  {
    name: "Sample content",
  },
  {
    name: "Advanced Theme Opti",
  },
  {
    name: "Performance Optimization",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Completely JS",
  },
  {
    name: "Responsive",
  },
  {
    name: "Admin Panel",
  },
  {
    name: "Retina Ready",
  },
  {
    name: "Canvas Animation",
  },
  {
    name: "Team Members",
  },
  {
    name: "eCommerce",
  },
  {
    name: "Google map",
  },
  {
    name: "Gallery",
  },
  {
    name: "DecLaround vidan!",
  },
  {
    name: "Drag and Drop Content",
  },
  {
    name: "Online Store/Shop",
  },
  {
    name: "One Page Templates",
  },
  {
    name: "Derallav",
  }
]
export const faqData: FaqItem[] = [
  {
    title: '1. How Do I Change The App Name?',
    answer: `a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
    If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.`,
  },
  {
    title: '2. How Do I Update The App’s Package Name?',
    answer: `a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
    If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.`,
    code: 'const String baseUrl = "https://your-new-domain.com";',
    manual: 'Manually: Open the AndroidManifest.xml file located at android/app/src/main/AndroidManifest.xml and modify the android:label attribute.',
  },
  {
    title: '3. How Do I Change The Backend API URL?',
    answer: `a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
    If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.`,
  },
  {
    title: '4. What Should I Do If Flutter Doctor Shows Errors?',
    answer: `a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
    If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.`,
  }, {
    title: 'How Do I Add A New Language For Localization?',
    answer: 'Add the new locale in your `l10n.yaml` and provide the translation files...',
  },
  {
    title: 'Why Are My Translations Not Updating?',
    answer: 'Make sure to run `flutter pub get` and rebuild the project after adding new translation keys...',
  },
  {
    title: 'How Do I Replace The Onboarding Screens?',
    answer: 'Modify the onboarding screen widget files, typically found in the `screens/onboarding/` directory...',
  },
  {
    title: 'How Do I Change The App Icon?',
    answer: 'Use the `flutter_launcher_icons` package and run `flutter pub run flutter_launcher_icons:main`...',
  },
  {
    title: 'What Should I Do If The App Crashes?',
    answer: 'Check the error logs in the console. Common issues include null exceptions or missing assets...',
  },
  {
    title: 'How Do I Build A Release APK?',
    answer: 'Run `flutter build apk --release`. Ensure your keystore is set up in `android/key.properties`...',
  },
];
export const homefaqData = [
  {
    question: "How can I get a venture capitalist to pay?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    question: "How do you find different criteria in your process?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    question: "How can I get a venture capitalist to pay?",
    answer: "Another answer here.",
  },
  {
    question: "How likely will it be that I can get vent financing?",
    answer: "Some more information about vent financing.",
  },
  {
    question: "should option pool for employees ?",
    answer: "Discussion on option pool for employees.",
  },
];



export const licenseOptions = [
  {
    id: 'personal',
    value: 'personal',
    label: 'Personal License',
    price: 29,
    originalPrice: 29,
  },
  { id: 'commercial', value: 'commercial', label: 'Commercial License', price: 60 },
];

export const productDescription = [
  { label: 'Last Update', value: '25 May 2024' },
  { label: 'Released', value: '15 Jan 2024' },
  { label: 'Category', value: 'Website' },
  { label: 'Sub Category', value: 'Business' },
  { label: 'High Resolution', value: 'Yes', isLink: true },
  {
    label: 'Compatible Browsers',
    value: 'Firefox, Safari, Opera, Chrome, Edge',
    isLink: true,
  },
  {
    label: 'Files Included',
    value: 'HTML Files, CSS Files, Sass Files, JS Files',
    isLink: true,
  },
  { label: 'Software Framework', value: 'Laravel', isLink: true },
  {
    label: 'Software Version',
    value: 'PHP 8 x, PHP 7 x, MySQL 8x, MySQL 5 x',
    isLink: true,
  },
];


export const portfolioItems = [
  {
    title: "<span>Acnoo Admin - Flutter Admin Panel & Dashboard <br> Template | PWA Ready</span>",
    img: portfolio,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "Business Card Design",
    img: portfolio2,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "PosPro Saas Project",
    img: portfolio3,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "Business Card Design",
    img: portfolio4,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
];
export const portfolioItems1 = [
  {
    title: "Acnoo Admin - Flutter Admin Panel & Dashboard Template | PWA Ready",
    img: portfolio,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "Business Card Design",
    img: portfolio2,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "PosPro Saas Project",
    img: portfolio3,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
  {
    title: "Business Card Design",
    img: portfolio4,
    buttons: [{ content: 'Banding' }, { content: 'UI/UX' }, { content: 'UI/UX' }],
  },
];

export const notifications = [
  {
    id: 1,
    message: "Do you need more services",
    time: "30 Mins ago",
  },
  {
    id: 2,
    message: "Do you need more services",
    time: "30 Mins ago",
  },
  {
    id: 3,
    message: "Do you need more services",
    time: "30 Mins ago",
  },
  {
    id: 2,
    message: "Do you need more services",
    time: "30 Mins ago",
  },
  {
    id: 3,
    message: "Do you need more services",
    time: "30 Mins ago",
  },
];


export const plans = [
  {
    title: "Basic plan",
    price: "$29",
    type: "Onetime",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
  },
  {
    title: "Standard plan",
    price: "$29",
    type: "Monthly",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
  },
  {
    title: "Premium plan",
    price: "$29",
    type: "Yearly",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
    highlight: true,
  },
];


export interface RequirementsListProps {
  requirements: string[];
}
export const requirements: string[] = [
  "PHP >= 8.2",
  "Ctype PHP Extension",
  "cURL PHP Extension",
  "DOM PHP Extension",
  "Fileinfo PHP Extension",
  "Filter PHP Extension",
  "Hash PHP Extension",
  "Mbstring PHP Extension",
  "OpenSSL PHP Extension",
  "PCRE PHP Extension",
  "PDO PHP Extension",
  "Session PHP Extension",
  "Tokenizer PHP Extension",
  "XML PHP Extension",
];


export const automationData = [
  { id: 1, title: 'Data Analytics', image: head1 },
  { id: 2, title: 'Dashboard Light', image: head2 },
  { id: 3, title: 'Garments ERP', image: head3 },
  { id: 4, title: 'Inventory', image: head4 },
  { id: 5, title: 'Saas', image: head1 },
  { id: 6, title: 'Coming Soon', image: head2 },
];


export const growthItems = [
  {
    title: "App & Software Development",
    background: "bg-white",
    textColor: "text-black",
    shadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.03)",
    align: "justify-end",
    margin: "lg:px-0 pl-[37px] pr-4"
  },
  {
    title: "24/7 Top-Rated Customer Support",
    background: "bg-[#2F1C6A]",
    textColor: "text-white",
    shadow: "-3px 0px 0px 0px #2353F5",
    align: "justify-start",
    margin: "lg:px-0 pr-[37px] pl-4"
  },
  {
    title: "Regular Updates & Bug Fixes",
    background: "bg-white",
    textColor: "text-black",
    shadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.03)",
    align: "justify-end",
    margin: "lg:px-0 pl-[37px] pr-4"
  },
  {
    title: "Dedicated Team members",
    background: "bg-[#2F1C6A]",
    textColor: "text-white",
    shadow: "-3px 0px 0px 0px #2353F5",
    align: "justify-start",
    margin: "lg:px-0 pr-[37px] pl-4"
  },
  {
    title: "One-time Purchase with Lifetime Free Updates",
    background: "bg-white",
    textColor: "text-black",
    shadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.03)",
    align: "justify-end",
    margin: "lg:px-0 pl-[37px] pr-4"
  },
];