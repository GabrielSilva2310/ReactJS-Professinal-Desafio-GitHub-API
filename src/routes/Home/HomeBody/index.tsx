import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import HomeText from "../../../components/HomeText";

export default function HomeBody() {
  return (
    <main>
      <section className="mt-27 ml-41">
        <HomeText />
         <Link to='/search' > <Button text='Começar'/> </Link>
      </section>
    </main>
  );
}
