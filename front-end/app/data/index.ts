import { RiSpeedUpFill } from "react-icons/ri";
import { CgEditNoise } from "react-icons/cg";
import { IconType } from "react-icons";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineStyle } from "react-icons/md";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: IconType;
    iconClassname:string;

  }
  
  export const features: Feature[] = [
    {
      id: 1,
      title: "Energy Efficient",
      description: "Save power with cutting-edge motor technology, reducing electricity costs.",
      icon: SlEnergy,
      iconClassname:"rounded-xl p-3 flex justify-center w-12 bg-[#E0EDFF] text-[#3348FF]"
    },
    {
      id: 2,
      title: "High-Speed Performance",
      description: "Powerful airflow designed to cool large spaces instantly.",
      icon: RiSpeedUpFill,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#FFDEE0] text-[#DF0C3D]"
    },
    {
      id: 3,
      title: "Silent Operation",
      description: "Advanced noise-reduction technology for a peaceful environment.",
      icon: CgEditNoise,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#BEFEC7] text-[#00A81C]"
    },
    {
      id: 4,
      title: "Modern & Stylish Design",
      description: "Sleek, elegant fans that complement any home or office decor.",
      icon: MdOutlineStyle,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#F0DBFF] text-[#9F1FF4]"
    },
    {
      id: 5,
      title: "Durable & Long-Lasting",
      description: "High-quality materials ensure longevity and reliability.",
      icon: MdOutlineSettingsEthernet,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#FFED9E] text-[DB6E00]"
    },
    {
      id: 6,
      title: "Smart Technology",
      description: "WiFi-enabled and remote-controlled fans for a seamless experience.",
      icon: SiSmartthings,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#E0EDFF] text-[#3348FF]"
    },
    {
      id: 7,
      title: "Wide Range of Models",
      description: "From ceiling fans to table fans, find the perfect cooling solution.",
      icon: RiSpeedUpFill,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#B3F8EB] text-[#00ABAB]"
    },
    {
      id: 8,
      title: "Eco-Friendly Materials",
      description: "Built with sustainable materials for an environmentally friendly choice.",
      icon: RiSpeedUpFill,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#F0DBFF] text-[#9F1FF4]"
    },
    {
      id: 9,
      title: "2+ Years Warranty",
      description: "Enjoy peace of mind with our extended product warranty and support.",
      icon:RiSpeedUpFill,
      iconClassname:"rounded-xl p-3 flex justify-center w-10 bg-[#EDF0F2] text-[#6F7C8E]"
    },
  ];

  export const superProducts = [
    {
      id: 1,
      name: "Aeroplus BreezeMax 500",
      description: "BLDC Motor Technology – Saves up to 65% energy compared to regular fans.",
      details:
        "The Aeroplus BreezeMax 500 is designed to deliver powerful airflow with energy efficiency. Featuring BLDC motor technology, it consumes up to 60% less power compared to traditional fans. With aerodynamically designed blades, it ensures uniform air circulation across the room. The smart remote control offers multiple speed settings, sleep mode, and timer functions for convenience.",
      price: 199,
      colors: {
        blue: "/images/hero.jpg",
        white: "/images/hero1.jpg",
        pink: "/images/superPro.png",
        purple: "/images/hero4.jpg",
      },
    },
    {
      id: 2,
      name: "Aeroplus TurboMax X1",
      description: "AI-powered cooling with intelligent temperature adjustment.",
      details:
        "The Aeroplus TurboMax X1 features advanced AI technology that auto-adjusts fan speed based on room temperature, ensuring optimal cooling. The smart remote control offers multiple modes including sleep and turbo mode, making it perfect for all seasons.",
      price: 249,
      colors: {
        blue: "/images/hero.jpg",
        white: "/images/hero1.jpg",
        pink: "/images/superPro.png",
        purple: "/images/hero4.jpg",
      },
    },
    {
      id: 3,
      name: "Aeroplus SilentGlide Pro",
      description: "Ultra-quiet operation with next-gen aerodynamics.",
      details:
        "Designed for silent operation, the Aeroplus SilentGlide Pro uses aerodynamically optimized blades to ensure maximum airflow with minimal noise. With a sleek design and BLDC motor efficiency, it’s perfect for bedrooms and offices.",
      price: 229,
      colors: {
        blue: "/images/hero.jpg",
        white: "/images/hero1.jpg",
        pink: "/images/superPro.png",
        purple: "/images/hero4.jpg",
      },
    },
  ];
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    colors: string[];
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Aeroplus ModelJZ",
      description: "High-efficiency cooling with BLDC technology.",
      price: 129.99,
      image: "/images/mJZ.jpeg",
      rating: 4.5,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 2,
      name: "Aeroplus Model XL",
      description: "Ultra-quiet fan with energy-saving mode.",
      price: 149.99,
      image: "/images/mXL.jpeg",
      rating: 4.7,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 3,
      name: "Aeroplus Model NANO WOOD",
      description: "Powerful air circulation with sleek design.",
      price: 159.99,
      image: "/images/mNW.jpeg",
      rating: 4.3,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 4,
      name: "Aeroplus Model UR05",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mURZY.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 5,
      name: "Aeroplus Model UR01",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mUR01.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 6,
      name: "Aeroplus Model NANO",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mNANo.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 7,
      name: "Aeroplus Model UR04WOOD",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mUR4.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 8,
      name: "Aeroplus Model JZ600mm",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mJZ600.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
    {
      id: 9,
      name: "Aeroplus Model URS",
      description: "Elegant ceiling fan with smart remote control.",
      price: 199.99,
      image: "/images/mURs.jpeg",
      rating: 4.8,
      colors: ["#FF5733", "#C70039", "#900C3F"],
    },
  ];
  
  
 