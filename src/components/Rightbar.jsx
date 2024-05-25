import React, { useEffect, useState } from "react";
import { fetchReportSummary } from "../API/AllApi";
import { useOrgData } from "../context/OrgContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import GithubBox from "./GithubBox";
import ResultBox from "./ResultBox";
import { InputBox } from "./InputBox";
import FailedTest from "./FailedTest";
import PassedTest from "./PassedTest";
import { BiCheck } from "react-icons/bi";

const RightBar = () => {
  const { org_id, report_id,org_name } = useOrgData();
  const { o_id, r_id } = useParams();
  const [data, setData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchReportSummary(org_id, r_id);
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [report_id, org_id, r_id]);

  const { endpoints = [], ...otherData } = data;

  const successEndpoints = endpoints.filter(endpoint => endpoint.status === "SUCCESS");
  const errorEndpoints = endpoints.filter(endpoint => endpoint.status === "ERROR" || endpoint.status === "FAILURE");

  return (
    <div className="bg-white w-3/4 ml-auto min-h-screen">
      <div className="breadcrumb flex text-start p-4 text-2xl items-center">
        <span onClick={() => navigate(-1)} className="cursor-pointer">{org_name} test reports</span>
        <FaAngleRight className="text-xl text-green-500 text-center ml-4 mr-2" />
        Execution #{r_id}
       {errorEndpoints.length > successEndpoints.length ? <span className="status text-xl flex items-center justify-center ml-6 border-2 border-solid border-black-500 rounded-lg p-1 bg-red-400 cursor-pointer">
          <RxCrossCircled className="mr-2 text-white" />
          FAILED
        </span>:
        <span className="status text-xl flex items-center justify-center ml-6 border-2 border-solid border-black-500 rounded-lg p-1 bg-green-400 cursor-pointer">
          <BiCheck className="mr-2 text-white" />
          Success
        </span>}
      </div>

      <div className="githubBox p-4">
        <GithubBox data={otherData} />
      </div>

      <div className="titleBox mt-4 p-4">
        <ResultBox />
      </div>

      <div className="p-4 mt-0">
        <InputBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="ftest p-4 mt-2">
        <FailedTest endpoint={errorEndpoints} length={endpoints.length} searchQuery={searchQuery} />
      </div>
      <div className="pTest p-4 mt-2">
        <PassedTest endpoint={successEndpoints} length={endpoints.length} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default RightBar;
