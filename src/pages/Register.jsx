import { useState } from "react";
import {
  emailIcon,
  passwordIcon,
  clientImage,
  shape,
} from "../constants/images";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Register() {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <div className="p-4">
      <section className="bg-[#071400] my-[140px] p-[55px] max-w-[1400px] mx-auto rounded-[28px] flex flex-col gap-10 lg:flex-row lg:gap-[154px] items-center justify-center relative">
        <span className="absolute  hidden lg:block z-0">
          <img src={shape} />
        </span>
        <div className="z-10">
          <h1 className="text-[32px] font-bold text-white text-center">
            Open your account
          </h1>
          <p className="text-white text-center mt-[10.5px]">
            Already have an account?
            <span className="text-[#05AF2B] font-semibold ml-2">
              <Link to="/login">Sign in</Link>
            </span>
          </p>
          <form>
            <div className="mt-[37.5px]">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-6">
                  <img src={emailIcon} alt="" />
                </span>
                <input
                  className="border border-[#4B4B4B] focus:border-[#05AF2B] focus:ring-0 focus:outline-none text-white rounded-full w-full pl-[55px] pr-[24px] py-[13px] placeholder-[#4B4B4B]"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-6">
                  <img src={passwordIcon} alt="" />
                </span>
                {
                  <span
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-6 cursor-pointer"
                  >
                    {seePassword ? (
                      <FaRegEyeSlash
                        width={24}
                        height={24}
                        className="text-[#4B4B4B]"
                      />
                    ) : (
                      <IoEyeOutline
                        width={24}
                        height={24}
                        className="text-[#4B4B4B]"
                      />
                    )}
                  </span>
                }
                <input
                  className="border border-[#4B4B4B] focus:border-[#05AF2B] focus:ring-0 focus:outline-none text-white rounded-full w-full pl-[55px] pr-[24px] py-[13px] placeholder-[#4B4B4B]"
                  type={`${seePassword ? "text" : "password"}`}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-6">
                  <img src={passwordIcon} alt="" />
                </span>
                {
                  <span
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-6 cursor-pointer"
                  >
                    {seePassword ? (
                      <FaRegEyeSlash
                        width={24}
                        height={24}
                        className="text-[#4B4B4B]"
                      />
                    ) : (
                      <IoEyeOutline
                        width={24}
                        height={24}
                        className="text-[#4B4B4B]"
                      />
                    )}
                  </span>
                }
                <input
                  className="border border-[#4B4B4B] focus:border-[#05AF2B] focus:ring-0 focus:outline-none text-white rounded-full w-full pl-[55px] pr-[24px] py-[13px] placeholder-[#4B4B4B]"
                  type={`${seePassword ? "text" : "password"}`}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#05AF2B] py-[14px] px-[20px] rounded-full w-full text-white font-semibold text-[14px] mt-[30px]"
            >
              Create Account
            </button>
          </form>
          <div className="mt-[60px] flex justify-center items-center gap-2">
            <div className="w-[170px] h-[1px] bg-white/50"></div>
            <p className="text-white">or</p>
            <div className="w-[170px] h-[1px] bg-white/50"></div>
          </div>
          <div className="flex items-center justify-center mt-[37px] gap-[30px]">
            <div className="text-white flex items-center justify-center text-[28px] rounded-full bg-[#1E1E1E] w-[120px] h-[60px]">
              <FaFacebookF />
            </div>
            <div className="text-white flex items-center justify-center text-[28px] rounded-full bg-[#1E1E1E] w-[120px] h-[60px]">
              <FaApple />
            </div>
            <div className="text-white flex items-center justify-center text-[28px] rounded-full bg-[#1E1E1E] w-[120px] h-[60px]">
              <FaXTwitter />
            </div>
          </div>
          <div className="mt-[49px] max-w-[447px] mx-auto">
            <p className="text-[#888] text-center text-[14px]">
              By joining, you agree to the Fiverr{" "}
              <span className="text-[#05AF2B] underline">
                <a href="">Terms of Service</a>
              </span>{" "}
              and to occasionally receive emails from us. Please read our{" "}
              <span className="text-[#05AF2B] underline">
                <a href="">Privacy Policy</a>
              </span>{" "}
              to learn how we use your personal data.
            </p>
          </div>
        </div>
        <div className="hidden lg:block z-10 relative">
          <span className="absolute right-0 top-0 text-[#05AF2B] rounded-full p-2 text-3xl bg-[#1C1C1C]">
            <RxCross1 />
          </span>
          <img className="w-full" src={clientImage} />
        </div>
      </section>
    </div>
  );
}
