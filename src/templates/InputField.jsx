import { IoEyeOutline } from "react-icons/io5";

export default function InputField({ icon, placeholder, eyeIcon }) {
  return (
    <div className="relative">
      <span className="absolute top-1/2 -translate-y-1/2 left-6">
        <img src={icon} alt="" />
      </span>
      {eyeIcon && (
        <span className="absolute top-1/2 -translate-y-1/2 right-6 cursor-pointer">
          <IoEyeOutline width={24} height={24} className="text-[#4B4B4B]" />
        </span>
      )}
      <input
        className="border border-[#4B4B4B] focus:border-[#05AF2B] focus:ring-0 focus:outline-none text-white rounded-full w-full pl-[55px] pr-[24px] py-[13px] placeholder-[#4B4B4B]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
