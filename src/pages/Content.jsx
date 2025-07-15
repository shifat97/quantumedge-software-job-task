import { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ContentCard from "../templates/ContentCard";

export default function Content() {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const response = await axios.get("jobs.json");

        if (Array.isArray(response.data.data)) {
          setJobsData(response.data.data);
        } else {
          throw Error("Data Not Found");
        }
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
      }
    };

    getJobsData();
  }, []);

  return (
    <section className="flex-grow">
      <ToastContainer />
      <Search />
      <div className="max-w-[1400px] mx-auto">
        <div className="mt-[70.5px] p-[21.5px]">
          <h1 className="text-2xl lg:text-[32px] font-bold text-[#1E1E1E]">
            5 search result(s) found
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {jobsData.map((job, index) => (
              <ContentCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
