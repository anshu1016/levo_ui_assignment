import { useEffect, useState } from "react"
import OrganizationButton from "./OrganizationButton"
import { fetchOrganizations } from "../API/AllApi";

const MainPage = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState(null)

    useEffect(()=>{
        const getData = async() => {
            try{
              const result =   await fetchOrganizations();
        setData(result);
        setLoading(false);
            }
            catch(error){
setError(error.message)
setLoading(false)
            }
        };
        getData();
    },[])
    
    
  return (
    <>
         <div className="flex flex-col items-center justify-center min-h-full bg-white">
      <h1 className="text-5xl font-bold text-purple-600 mt-24 mb-4">Organizations</h1>
      <p className="text-2xl text-purple-600 mb-8">Pick the organization you want to access to</p>
      {loading && <div className="text-center py-4">Loading...</div>}
      {error && <div className="text-center py-4 text-red-500">Error: {error}</div>}
      {!loading && !error && (
        <div className="divide-y divide-gray-200">
          {data?.map((org) => (
            <div key={org?.id} className="space-y-4">
              <OrganizationButton name={org?.name} img={org?.owner_picture} ID={org?.id} />
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default MainPage