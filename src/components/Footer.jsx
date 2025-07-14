import { logoImage, footerImage, shape } from "../constants/images";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerData = [
    {
      heading: "About",
      dataList: [
        {
          title: "About Us",
          link: "#",
        },
        {
          title: "Best Seller",
          link: "#",
        },
        {
          title: "ProProJobs",
          link: "#",
        },
      ],
    },
    {
      heading: "Categories",
      dataList: [
        {
          title: "Design & Creative",
          link: "#",
        },
        {
          title: "Development & IT",
          link: "#",
        },
        {
          title: "Music & Audio",
          link: "#",
        },
        {
          title: "Programming & Tech",
          link: "#",
        },
      ],
    },
    {
      heading: "Support",
      dataList: [
        {
          title: "Help & Support",
          link: "#",
        },
        {
          title: "FAQ",
          link: "#",
        },
        {
          title: "Contact Us",
          link: "#",
        },
        {
          title: "Terms & Services",
          link: "#",
        },
      ],
    },
  ];

  const popularPost = [
    {
      image: footerImage,
      postDate: "November 7, 2024",
      title: "Unveils the Best Canadian Cities for Biking",
    },
    {
      image: footerImage,
      postDate: "November 7, 2024",
      title: "Unveils the Best Canadian Cities for Biking",
    },
  ];

  return (
    <div className="p-[44px] bg-[#071400]">
      <footer className="max-w-[1400px] mx-auto grid grid-cols-1 gap-[46px] lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h1 className="text-[28px] lg:text-[32px] font-bold text-white text-center lg:text-left">
            Reach Your Requirement Goals Right on Schedule
          </h1>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-[24px] items-start">
          <p className="text-[#CCC] text-center lg:text-left">
            Sign up, complete your profile, and start browsing projects. Submit
            proposals and communicate with clients to get hired.
          </p>
          <button className="bg-[#05AF2B] text-white rounded-full px-[24px] py-[9px] block mx-auto lg:mx-0">
            Get Started
          </button>
        </div>
        <span className="lg:col-span-4 h-[2px] bg-white/5 mb-[44px]"></span>
        <div>
          <img
            width={227}
            height={57}
            src={logoImage}
            alt="Quantum Edge"
            className="block mx-auto lg:mx-0"
          />
        </div>
        <div>
          <FooterList data={footerData[0]} />
        </div>
        <div>
          <FooterList data={footerData[1]} />
        </div>
        <div>
          <FooterList data={footerData[2]} />
        </div>
        <span className="lg:col-span-4 h-[2px] bg-white/5 mt-[44px]"></span>
        <div className="lg:col-span-2 relative">
          <span className="absolute lg:-top-50 lg:-left-30 hidden lg:block z-0">
            <img src={shape} width={400} height={400} />
          </span>
          <div className="relative flex justify-center items-center lg:justify-start lg:items-start gap-[14px] text-[24px] z-10">
            <div className="bg-[#4B4B4B] hover:bg-[#05AF2B] hover:text-white cursor-pointer rounded-full p-[8px]">
              <FaFacebookF />
            </div>
            <div className="bg-[#4B4B4B] hover:bg-[#05AF2B] hover:text-white cursor-pointer rounded-full p-[8px]">
              <FaInstagram />
            </div>
            <div className="bg-[#4B4B4B] hover:bg-[#05AF2B] hover:text-white cursor-pointer rounded-full p-[8px]">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col items-center justify-center lg:items-start gap-[20px]">
          <h1 className="text-[18px] font-bold text-white">Our Popular Post</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[44px]">
            {popularPost.map((item, index) => (
              <div key={index} className="flex items-center gap-[18px]">
                <img src={item.image} alt="" />
                <div>
                  <p className="text-[#CCC] text-[12px]">{item.postDate}</p>
                  <h3 className="text-sm font-semibold text-white mt-[9px]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="lg:col-span-4 h-[2px] bg-white/5"></span>
        <div className="w-full lg:col-span-4">
          <p className="text-[#CCC] text-center text-sm">
            © QuantumEdge Software INC. 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FooterList({ data }) {
  const { heading, dataList } = data;

  return (
    <div className="text-center lg:text-left">
      <h1 className="text-[18px] font-bold text-white">{heading}</h1>
      <ul className="mt-[26px] flex flex-col gap-[12px]">
        {dataList.map((item, index) => (
          <li key={index} className="text-[#CCC]">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
