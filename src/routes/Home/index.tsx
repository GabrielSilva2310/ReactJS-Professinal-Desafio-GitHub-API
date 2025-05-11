import { Outlet } from "react-router-dom";
import HeaderDefault from "../../components/HeaderDefault";



export default function Home(){

    return(
        <>
        <HeaderDefault/>
        <Outlet/>
        </>
    );
}