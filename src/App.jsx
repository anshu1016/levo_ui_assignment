import Leftbar1 from "./components/Leftbar1"
import Logo from "./components/Logo"
import MainPage from "./components/MainPage"
import RightBar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import { Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import { TestSummary } from "./pages/TestSummary.jsx"
import { FinalPage } from "./pages/FinalPage.jsx"
import { useOrgData } from "./context/OrgContext.jsx"
import NotFound from "./pages/NotFound.jsx"
function App() {
 
  return (
    <>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path="/organization/:o_id" element={<TestSummary/>}/>
      <Route path="/organization/:o_id/reports/:r_id" element={<FinalPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   
    </>
  )
}

export default App
