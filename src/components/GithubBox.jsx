// src/components/BuildStatus.js
import React from 'react';
import { FaClock, FaCalendar, FaCodeBranch, FaLink } from 'react-icons/fa';
import { BiCube } from 'react-icons/bi';
import { IoLogoGithub } from 'react-icons/io5';
import { FaExclamation } from 'react-icons/fa6';
import { useOrgData } from '../context/OrgContext';

const GithubBox = ({data}) => {
  const {trimText} = useOrgData();
    console.log(data,"GITHUB_BOX_DATA")
    console.log(typeof trimText,"function typo");
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md inline-block">
      <div className="flex items-center gap-10 mb-2">
        <div className="flex items-center text-gray-600">
          <FaClock className="w-4 h-4 mr-1" />
          <span>Duration: {Math.floor(data.duration/60)}m</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaCalendar className="w-4 h-4 mr-1" />
          <span>Finished 10 minutes ago</span>
        </div>
      </div>
      <div className="flex items-center text-blue-600 mb-2">
        <BiCube className="w-4 h-4 mr-1" />
        <a href="#build-and-deploy" className="hover:underline">build-and-deploy (12332)</a>
      </div>
      <div className="flex items-center gap-10 text-gray-600 mb-2">
        <div className="flex items-center">
          <FaCodeBranch className="w-4 h-4 mr-1" />
          <span>{trimText(data?.branch,8)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className=" flex items-center"><FaExclamation className="w-4 h-4 mr-0" />
</span>{data?.commit}
          <span className='flex items-center'> <IoLogoGithub className="w-4 h-4 mr-0 " />
</span>{data.github_user}
        </div>
      </div>
      <div className="flex items-center text-blue-600">
        <FaLink className="w-4 h-4 mr-1" />
        <a href={data?.environment_url
} className="hover:underline">{data?.environment_url
}</a>
      </div>
    </div>
  );
};

export default GithubBox;
