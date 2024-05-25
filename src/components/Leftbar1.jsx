import React, { useEffect, useState } from "react";
import { fetchTestSummary } from "../API/AllApi";
import { useOrgData } from "../context/OrgContext";
import { useNavigate, useParams } from "react-router-dom";

const Leftbar1 = () => {
  const { org_id, setOrg_id, report_id, setReportId } = useOrgData();
  const { o_id, r_id } = useParams();
  const [data, setData] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchTestSummary(org_id);
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [o_id]);

  function handleReportClick(key) {
    setReportId(key);
    navigate(`/organization/${o_id}/reports/${key}`);
  }

  return (
    <div className="ml-auto w-3/4 p-8">
      <div className="title text-3xl w-full text-left text-blue-600 mb-10">
        Test Reports
      </div>
      
      {data.map((data) => (
        <div
          className="content mt-10 flex items-center justify-between bg-gray-500 p-6 cursor-pointer"
          key={data?.id}
          onClick={() => handleReportClick(data?.id)}
        >
          <div className="side1 flex flex-col items-start justify-center gap-y-2 flex-1">
            <div className="heading1 text-4xl text-black-500">{data?.name}</div>
            <div className="heading2 text-2xl text-black-400">
              {Math.floor(data?.duration / 60)} m ago - 10 m long
            </div>
          </div>
          <div className="side2 flex flex-row items-center justify-center gap-x-20 flex-1">
            <div className="green text-2xl text-green-500">{data?.succeed_tests} passed</div>
            <div className="red text-2xl text-red-500">{data?.failed_tests} failed</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leftbar1;
