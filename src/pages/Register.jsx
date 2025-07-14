import {
  emailIcon,
  passwordIcon,
  clientImage,
  shape,
} from "../constants/images";
import InputField from "../templates/InputField";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Register() {
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
              <a href="">Sign in</a>
            </span>
          </p>
          <form>
            <div className="mt-[37.5px]">
              <InputField icon={emailIcon} placeholder={"Email Address"} />
            </div>
            <div className="mt-[30px]">
              <InputField
                icon={passwordIcon}
                placeholder={"Password"}
                eyeIcon={true}
              />
            </div>
            <div className="mt-[30px]">
              <InputField
                icon={passwordIcon}
                placeholder={"Confirm Password"}
                eyeIcon={true}
              />
            </div>
            {/* <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="checkbox"
                className="appearance-none checked:bg-[#05AF2B] checked:text-white w-[21px] h-[21px] bg-transparent border border-[#05AF2B]"
              />
              <span className="text-[#CCC] text-sm">Remember Me</span>
            </div>
            <a href="#" className="text-[#CCC] text-sm">
              Forgot Password?
            </a>
          </div> */}
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
