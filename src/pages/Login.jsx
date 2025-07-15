import { useState } from "react";
import {
  clientImage,
  emailIcon,
  passwordIcon,
  shape,
} from "../constants/images";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://api.mnimedu.com/api/auth/registration/",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      toast.success("Registration Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/login");
    } catch (e) {
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <section className="bg-[#071400] my-[140px] p-[55px] max-w-[1400px] mx-auto rounded-[28px] flex flex-col gap-10 lg:flex-row lg:gap-[154px] items-center justify-center relative">
        <ToastContainer />
        <span className="absolute  hidden lg:block z-0">
          <img src={shape} />
        </span>
        <div className="z-10">
          <h1 className="text-[32px] font-bold text-white text-center">
            Login your account
          </h1>
          <p className="text-white text-center mt-[10.5px]">
            Don’t have an account?
            <span className="text-[#05AF2B] font-semibold ml-2">
              <Link to="/register"> Sign Up</Link>
            </span>
          </p>
          <form onSubmit={handleLogin}>
            <div className="mt-[37.5px]">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-6">
                  <img src={emailIcon} alt="" />
                </span>
                <input
                  className="border border-[#4B4B4B] focus:border-[#05AF2B] focus:ring-0 focus:outline-none text-white rounded-full w-full pl-[55px] pr-[24px] py-[13px] placeholder-[#4B4B4B]"
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-[30px]">
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
            </div>
            <button
              type="submit"
              className="bg-[#05AF2B] py-[14px] px-[20px] rounded-full w-full text-white font-semibold text-[14px] mt-[30px]"
            >
              {loading ? "Loading..." : "Login"}
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
