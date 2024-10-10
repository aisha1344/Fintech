import { FaBuilding, FaUser, FaShieldAlt, FaBook, FaCity, FaHospital, FaDollarSign, FaIndustry } from "react-icons/fa";

export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Banking Solutions",
    href: "/Banking Solutions",
    submenu: [
      {
        label: "USSD Integration",
        href: "/USSD-Integration",
        icon: FaBuilding,
        description: "Services and solutions for central government bodies.",
      },
      {
        label: "Airtime Purchase",
        href: "/Airtime Purchase",
        icon: FaUser,
        description: "Enhancing customer experience across all sectors.",
      },
      {
        label: "Mobile Banking",
        href: "/Mobile Banking",
        icon: FaShieldAlt,
        description: "Supporting national defence initiatives and operations.",
      },
      {
        label: "Whats'Up Banking",
        href: "/Whats'Up Banking",
        icon: FaBook,
        description: "Innovating in educational services and platforms.",
      },
      {
        label: "API Integration",
        href: "/API Integration",
        icon: FaCity,
        description: "Improving local government services and solutions.",
      },
      {
        label: "Bill Payment",
        href: "/Bill Payment",
        icon: FaHospital,
        description: "Driving excellence in health care services and systems.",
      },
    ],
  },
  {
    label: "Products",
    href: "/Products",
    submenu: [
      {
        label: "ERP Management",
        href: "/ERP Management",
        icon: FaBook,
        description: "Read our latest updates and articles.",
      },
      {
        label: "Queue Management",
        href: "/Queue Management",
        icon: FaIndustry,
        description: "Explore our latest research findings and reports.",
      },
      {
        label: "Beneficiary Management",
        href: "/Beneficiary Management",
        icon: FaCity,
        description: "Stay updated on upcoming conferences and events.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
  }
];
