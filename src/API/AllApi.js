import axios from "axios"


const ORGANIZATION_API = "https://my.api.mockaroo.com/organizations.json?key=78fbcc90";
const TEST_SUMMARY_API = 'https://my.api.mockaroo.com/organizations/${org_id}/reports.json?key=2e435a20'
export const fetchOrganizations = async () => {
  try {
    const response = await axios.get(ORGANIZATION_API);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const fetchTestSummary = async ( org_id ) => {
console.log(org_id,"CALLING FROM API,SEE IT NOW 1")
    try {
      const TEST_SUMMARY_API = `https://my.api.mockaroo.com/organizations/${org_id}/reports.json?key=78fbcc90`;
      const response = await axios.get(TEST_SUMMARY_API);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const fetchReportSummary = async (org_id, report_id) => {
    console.log(org_id, report_id, "LAST function called");
    
    try {
      const REPORT_SUMMARY_API = `https://my.api.mockaroo.com/organizations/${org_id}/reports/${report_id}/details.json?key=78fbcc90`;
      const response = await axios.get(REPORT_SUMMARY_API);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  