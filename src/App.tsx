import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Search from "./routes/Home/Search"
import Result from "./routes/Home/Search/Result"
import UserNotFound from "./routes/Home/Search/UserNotFound"

function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home/>}> 
         <Route index element={<Navigate to='/home'/>}/>
         <Route path="home" element={<HomeBody/>}/>
         <Route path="search" element={<Search/>}>
         <Route path="result" element={<Result/>}/>
         <Route path="usernotfound" element={<UserNotFound/>}/>
         </Route>
         </Route>
           <Route path='*' element={<Navigate to="/"/>}>  
         </Route>
     </Routes>
    </BrowserRouter>

   </>

  )
}

export default App
