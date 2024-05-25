import { createContext, useCallback, useContext, useState } from "react";

const OrgContext = createContext();

const OrgContextProvider = ({children}) =>{
    const [org_id, setOrg_id] = useState(null)
    const [report_id,setReportId] = useState(null);
    const [org_name,set_Org_Name] = useState("")
    console.log(org_name,"FINALLY GETTING THE NAME")
    const trimText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + " ...";
      };
    return(
<OrgContext.Provider value = {{org_id,setOrg_id,report_id,setReportId,trimText,org_name,set_Org_Name}}>
    {children}
</OrgContext.Provider>
    )
}

const useOrgData = () => useContext(OrgContext);

export {OrgContextProvider,useOrgData}