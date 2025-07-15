import dayjs from "dayjs";
import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ContentCard({ job }) {
  return (
    <Link>
      <div className="px-[20px] py-6 hover:shadow-2xl rounded-[12px]">
        <p className="text-sm text-[#888]">
          {dayjs(job.updated_at).format("MMM D, YYYY")}
        </p>
        <h1 className="text-[#4B4B4B] text-xl font-bold mt-[9px]">
          {job.title}
        </h1>
        <div className="flex items-center justify-between bg-black/5 rounded-[5px] px-[22px] py-[12px] mt-[20px]">
          <p className="text-[#888] text-sm">{job.budget_type}</p>
          <p className="text-[#4B4B4B] text-sm">
            ${job.rate_from}-${job.rate_to}
          </p>
        </div>
        <p className="text-[#4B4B4B] mt-[20px]">
          {job.job_description.slice(0, 110)}...
        </p>
        <div className="mt-[34px] flex items-center flex-wrap gap-[10px]">
          <div className="flex items-center justify-center gap-[5px] px-4 py-2 bg-[#FAF7FF] rounded-full text-[#9747FF]">
            <IoLocationOutline />
            <p>{job.location}</p>
          </div>
          <div className="flex items-center justify-center gap-[5px] px-4 py-2 bg-[#FFF5F5] rounded-full text-[#DB3131]">
            <PiShoppingBagOpenDuotone />
            <p>{job.experience_level}</p>
          </div>
          <div className="flex items-center justify-center gap-[5px] px-4 py-2 bg-[#E9FFEE] rounded-full text-[#05AF2B]">
            <IoLocationOutline />
            <p>{job.hiring_capacity} Freelancers</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-[10px] mt-[38px]">
          {<GenerateKeyword keywords={job.keywords} />}
        </div>
        <div className="h-[2px] bg-black/5 mt-[16px]"></div>
        <p className="text-md text-[#4B4B4B] font-semibold mt-[16px]">
          <span className="text-[#CCC] text-sm font-normal">Posted by </span>
          {job.posted_by}
        </p>
        <button className="text-sm text-white bg-[#1E1E1E] rounded-full px-[25px] py-[9px] mt-[20px] hover:bg-[#05AF2B] hover:text-white">
          Apply Now
        </button>
      </div>
    </Link>
  );
}

function GenerateKeyword({ keywords }) {
  const [keywordsSliced, setKeywordSliced] = useState([]);

  useEffect(() => {
    if (keywords?.length > 0) {
      setKeywordSliced(keywords.slice(0, 3));
    }
  }, [keywords]);

  return (
    <>
      {keywordsSliced.map((item, index) => {
        return (
          <p
            key={index}
            className="capitalize bg-black/5 rounded-[12px] px-4 py-2 text-center text-[#1E1E1E] font-semibold"
          >
            {item.title}
          </p>
        );
      })}
      <span
        className={`${
          keywordsSliced.length === keywords.length ? "hidden" : "block"
        }`}
        onClick={() => setKeywordSliced(keywords)}
      >
        +{keywords.length - 3} more
      </span>
    </>
  );
}
