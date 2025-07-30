// userImages
import avatar1 from "../assets/user_images/user1.jpg"
import avatar2 from "../assets/user_images/user2.jpg"
import avatar3 from "../assets/user_images/user3.jpg"
import avatar4 from "../assets/user_images/user4.jpg"
import avatar5 from "../assets/user_images/user5.jpg"
import avatar6 from "../assets/user_images/user6.jpg"
import avatar7 from "../assets/user_images/user7.jpg"
import avatar8 from "../assets/user_images/user8.jpg"
import avatar9 from "../assets/user_images/user9.jpg"
import avatar10 from "../assets/user_images/user10.jpg"
import avatar11 from "../assets/user_images/user11.jpg"
import avatar12 from "../assets/user_images/user12.jpg"
import avatar13 from "../assets/user_images/user13.jpg"
import avatar14 from "../assets/user_images/user14.jpg"
import avatar15 from "../assets/user_images/user15.jpg"

// trustedBrandsLogo
import logo1 from "../assets/b_logo/logo_1.png"
import logo2 from "../assets/b_logo/logo_2.png"
import logo3 from "../assets/b_logo/logo_3.png"
import logo4 from "../assets/b_logo/logo_4.png"
import logo5 from "../assets/b_logo/logo_5.png"
import logo6 from "../assets/b_logo/logo_6.png"
import logo7 from "../assets/b_logo/logo_7.png"
import logo8 from "../assets/b_logo/logo_8.png"
import logo9 from "../assets/b_logo/logo_9.png"
import logo10 from "../assets/b_logo/logo_10.png"
import logo11 from "../assets/b_logo/logo_11.png"
import logo12 from "../assets/b_logo/logo_12.png"

// servicesImage
import icon1 from "../assets/growth_strategy.png"
import icon2 from "../assets/market_research.png"
import icon3 from "../assets/brand_positioning.png"
import icon4 from "../assets/digital_marketing.png"
import icon5 from "../assets/bussiness_solutions.png"
import icon6 from "../assets/financial_planning.png"

//featuresImages
import growth_strategy from "../assets/growth_strategy1.jpg"
import powerfull_tools from "../assets/powerfull_tools.jpg"
import marketing_managment from "../assets/marketing_managment.jpg"
import automated_marketing from "../assets/automated_marketing.jpg"
import growth_chart from "../assets/growth_chart.jpg"

//footerButtonImages
import playstore from "../assets/playstore.png"
import apple from "../assets/apple.png"


// export userImages
export const userImages = [
  // Inner Orbit
  { orbit: "inner", className: "orbit-i1", src: avatar1 },
  { orbit: "inner", className: "orbit-i2", src: avatar2 },
  { orbit: "inner", className: "orbit-i3", type: "dot" },

  // Middle Orbit
  { orbit: "middle", className: "orbit-m1", src: avatar3 },
  { orbit: "middle", className: "orbit-m2", type: "dot" },
  { orbit: "middle", className: "orbit-m3", src: avatar4 },
  { orbit: "middle", className: "orbit-m4", type: "dot" },
  { orbit: "middle", className: "orbit-m5", src: avatar5 },

  // Outer Orbit
  { orbit: "outer", className: "orbit-o1", src: avatar6 },
  { orbit: "outer", className: "orbit-o2", src: avatar7 },
  { orbit: "outer", className: "orbit-o3", src: avatar8 },
  { orbit: "outer", className: "orbit-o4", src: avatar9 },
  { orbit: "outer", className: "orbit-o5", src: avatar10 },
  { orbit: "outer", className: "orbit-o6", type: "dot" },
  { orbit: "outer", className: "orbit-o7", type: "dot" },
  { orbit: "outer", className: "orbit-o8", type: "dot" },
  { orbit: "outer", className: "orbit-o9", type: "dot" }
];

//export trustedBrandsLogo
export const logoImages = [
  { src: logo1, Name: "google" },
  { src: logo2, Name: "netflix" },
  { src: logo3, Name: "paypal" },
  { src: logo4, Name: "samsung" },
  { src: logo5, Name: "visa" },
  { src: logo6, Name: "amozonpay" },
  { src: logo7, Name: "lenovo" },
  { src: logo8, Name: "yahoo" },
  { src: logo9, Name: "canon" },
  { src: logo10, Name: "discover" },
  { src: logo11, Name: "flaticon" },
  { src: logo12, Name: "shopify" }
];

//export serviceData
export const serviceData = [
  {
    src: icon1,
    title: "Growth Strategy",
    subtitle: "Build a clear roadmap for sustainable growth.",
    features: [
      "Customized Solutions",
      "Timely and Reliable",
      "Continuous Improvement"
    ],
    number: "01"
  },
  {
    src: icon2,
    title: "Market Research",
    subtitle: "Make informed decisions backed by real data.",
    features: [
      "Industry & competitor analysis",
      "Target audience research",
      "Product-market fit validation"
    ],
    number: "02"
  },
  {
    src: icon3,
    title: "Brand Positioning",
    subtitle: "Define uniquely what makes your brand stand out.",
    features: [
      "Unique value proposition (UVP)",
      "Brand voice & messaging",
      "Competitive differentiation"
    ],
    number: "03"
  },
  {
    src: icon4,
    title: "Digital Marketing",
    subtitle: "Drive leads with powerful, targeted campaigns.",
    features: [
      "SEO & content marketing",
      "Paid advertising (Google)",
      "Email marketing & automation"
    ],
    number: "04"
  },
  {
    src: icon5,
    title: "Creative Business Solutions",
    subtitle: "Solve complex problems with innovative ideas.",
    features: [
      "Business model innovation",
      "Process optimization",
      "New product or service ideation"
    ],
    number: "05"
  },
  {
    src: icon6,
    title: "Financial Planning",
    subtitle: "Plan your budget around strategic business goals.",
    features: [
      "Pricing strategy",
      "Budget allocation",
      "profitability analysis"
    ],
    number: "06"
  }
]

//export featureData
export const featureData = [
  {
    src: growth_strategy,
    alt: "growth_strategy",
    icon: "ri-line-chart-line",
    content: "Smarter Growth Starts With Real-Time Insights"
  },
  {
    src: powerfull_tools,
    alt: "powerfull_tools",
    icon: "ri-rocket-2-line",
    content: "Powerful Tools to Fuel Your Business Expansion"
  },
  {
    src: marketing_managment,
    alt: "marketing_managment",
    icon: "ri-group-line",
    content: "Your Brand, Everywhere Your Customers Want To Be"
  },
  {
    src: automated_marketing,
    alt: "automated_marketing",
    icon: "ri-hourglass-line",
    content: "Automated Marketing That Saves Time and Delivers Results"
  },
  {
    src: growth_chart,
    alt: "growth_chart",
    icon: "ri-bar-chart-box-line",
    content: "The process of tracking profit is hassle free anytime anywhere"
  }

]

//export featureData
export const teamData = [
  { src: avatar1, Name: "Liam Carter", position: "Founder / CEO" },
  { src: avatar2, Name: "Emma Rivera", position: "Managing Director" },
  { src: avatar3, Name: "Isabella Moretti", position: "Marketing Manager" },
  { src: avatar4, Name: "Lina Petrov", position: "Content Strategist" },
  { src: avatar5, Name: "Noah Rossi", position: "Growth Marketer" },
  { src: avatar6, Name: "Sophia Kim", position: "Data Analyst" },
  { src: avatar7, Name: "Aarav Mehta", position: "SEO Specialist" },
  { src: avatar8, Name: "Leo Schneider", position: "Chief Growth Officer" },
  { src: avatar9, Name: "Maya Thompson", position: "SEO Specialist" },
  { src: avatar10, Name: "Olivia Hernández", position: "Data Analyst" },
  { src: avatar11, Name: "Milo Zhang", position: "Growth Marketer" },
  { src: avatar12, Name: "Siddharth Nair", position: "Chief Growth Officer" },
  { src: avatar13, Name: "Giulia Romano", position: "Managing Director" },
  { src: avatar14, Name: "Samuel Okafor", position: "Content Strategist" },
  { src: avatar15, Name: "Yuki Takahashi", position: "Marketing Manager" }
]

//export footerButton
export const footerButton = [
  { href: "https://play.google.com/store/games?hl=en_IN", src: playstore, text: "Google Play" },
  { href: "https://www.apple.com/in/app-store/", src: apple, text: "App Store" }
]