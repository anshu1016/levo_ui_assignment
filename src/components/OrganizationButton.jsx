import { useState } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { useOrgData } from "../context/OrgContext";
import { useNavigate, useParams } from "react-router-dom";
function OrganizationButton({ name,key,ID }) {
const {o_id} = useParams();
    const {org_id, setOrg_id,report_id,org_name,set_Org_Name} = useOrgData();
    const navigate = useNavigate();

   function handleClick(){
    console.log(ID,org_name,name,"IDD")
    set_Org_Name(name)
    setOrg_id(ID)
    navigate(`/organization/${ID}`)
   }
  
console.log(org_name,"FIXED_NAME")
    return (
     <div>
        <div className="flex flex-row items-center justify-center bg-gray-400 w-full p-10 cursor-pointer hover:scale-x-105 mt-4 " onClick={handleClick}>
            <div className="icon grow-0 ml-2  fill-white text-3xl text-white"><LuBuilding2 />
</div>
            <div className="name ml-14 mr-14 pl-14 pr-14 flex-1 grow items-center text-3xl text-white ">{ID} {name}</div>
            <div className="space flex-1 grow-0 items-center text-3xl text-white bg-blue-500 "></div>
        </div>
     </div>
    );
  }
export default OrganizationButton;  