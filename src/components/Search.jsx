import { MdArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <section className="bg-[#071400] h-[290px]">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center lg:flex-row lg:items-center lg:justify-start gap-[22px] h-full p-[21.5px]">
        <div className="relative lg:w-[516px]">
          <div className="flex items-center justify-end gap-2 text-white absolute top-1/2 -translate-y-1/2 right-[10px] z-0">
            <div className="flex items-center jus gap-2">
              <p>Web Developer</p>
              <span className="text-xl">
                <MdArrowDropDown />
              </span>
            </div>
            <span className="bg-[#05AF2B] rounded-full p-[8px]">
              <CiSearch className="text-[24px]" />
            </span>
          </div>
          <input
            className="bg-[rgba(255,255,255,0.10)] py-[16px] pl-[40px] pr-[10px] rounded-[10px] focus:outline-none focus:ring-0 w-full text-white"
            type="text"
            placeholder="Search your needs"
          />
        </div>
        <button className="text-white rounded-[46px] px-[28px] py-[9px] bg-[#05AF2B]">
          Advanced search
        </button>
      </div>
    </section>
  );
}
