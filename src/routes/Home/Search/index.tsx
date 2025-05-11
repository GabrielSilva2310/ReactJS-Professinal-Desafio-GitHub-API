
import { Outlet } from "react-router-dom";
import SearchBox from "../../../components/SearchBox";




export default function Search() {
  return (
    <>
       <main>
      <section className="search-container" >
        <SearchBox/>
        <Outlet/>
      </section>
    </main>
    </>
  );
}
