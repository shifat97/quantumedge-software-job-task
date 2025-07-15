import { FaBars } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { logoImage, categoryIcon, shape } from "../constants/images";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [toggle, setToggleState] = useState(false);

  const navItems = () => {
    return (
      <span className="flex flex-col lg:flex-row lg:items-center justify-center gap-[28px] relative z-100">
        <div className="bg-[rgba(255,255,255,0.10)] rounded-[8px] lg:w-[345px] px-[10px] py-2 mr-[18px]">
          <div className="bg-[rgba(136,136,136,0.22)] w-[122px] px-[14px] py-[9px] flex items-center justify-between lg:justify-start lg:gap-2 rounded-[6px] text-white">
            <p>Freelance</p>
            <span className="text-xl">
              <MdArrowDropDown />
            </span>
          </div>
        </div>
        <button className="text-[#05AF2B] text-sm font-semibold">
          <p>BECOME A SELLER</p>
        </button>
        <button className="text-white text-sm font-semibold block">
          <Link to="/login">Login</Link>
        </button>
        <button className="text-white text-sm font-semibold bg-[#05AF2B] rounded-full px-[14px] py-[9px]">
          <Link to="/register">Registration</Link>
        </button>
      </span>
    );
  };

  return (
    <div className="p-[21.5px] bg-[#071400]">
      <header className="max-w-[1400px] mx-auto flex justify-between items-center relative">
        {/* Green Shape */}
        <span className="absolute -top-20 -left-40">
          <img width={280} height={280} src={shape} />
        </span>
        {/* Logo */}
        <section className="logo flex gap-[22px] items-center">
          <Link to="/">
            <img width={225} height={57} src={logoImage} alt="Quantum Edge" />
          </Link>
          <div className="flex gap-[5px] justify-center items-center rounded-full px-[22px] py-[9px] border border-[#05AF2B] bg-[rgba(85,196,26,0.06]">
            <img src={categoryIcon} />
            <p className="text-[#05AF2B]">Category</p>
          </div>
        </section>
        {/* Navigation */}
        <section className="navigation">
          {/* For Web View */}
          <div className="hidden lg:block">{navItems()}</div>
          {/* For Mobile View */}
          <div className="lg:hidden">
            <button
              onClick={() => setToggleState(!toggle)}
              className="text-white text-3xl p-2 rounded-sm border border-transparent hover:border-[#05AF2B] hover:bg-[rgba(85,196,26,0.06)] cursor-pointer"
            >
              <span>
                <FaBars />
              </span>
            </button>
            <div
              className={`absolute right-0 left-0 mt-6 bg-[#071400] rounded-md text-white p-4 ${
                toggle ? "block" : "hidden"
              }`}
            >
              {navItems()}
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
