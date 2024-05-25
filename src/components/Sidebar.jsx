import { GoTriangleRight } from "react-icons/go";
import { useOrgData } from "../context/OrgContext";
import { Link } from "react-router-dom";

function Sidebar(){
    const {org_name} = useOrgData();
    return(
        <div >
           <div className="min-h-screen bg-white-500 w-1/4 fixed top-0 left-0 m-0 ">
                <div className="info flex flex-col items-center justify-center p-12 ">
                    <Link to="/">
                    <div className="title text-5xl font-extrabold cursor-pointer ">Levo</div>
                    <div className="info text-3xl mt-4">{org_name}</div>
                    </Link>
                </div>
                <div className="buttons flex items-center mt-4 cursor-pointer">
                    <div className="icon p-2  text-left items-center text-4xl text-black-500 "><GoTriangleRight /></div>
                    <div className="content ml-8 text-center text-2xl text-purple-600 font-semibold">{org_name} Test Reports</div>
                </div>
           </div>
        </div>
    )
}
export default Sidebar;