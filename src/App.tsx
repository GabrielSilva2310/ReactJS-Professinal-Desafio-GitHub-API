import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Search from "./routes/Home/Search"


function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home/>}> 
         <Route index element={<Navigate to='/home'/>}/>
         <Route path="home" element={<HomeBody/>}/>
         <Route path="search" element={<Search/>}>
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
