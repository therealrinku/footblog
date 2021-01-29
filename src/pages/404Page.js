import Navbar from "../components/Navbar";
import Image from "../assets/404Image.svg";

const Page_404 = () => {
  return (
    <div className="page--404">
      <Navbar />
      <img src={Image} alt="imagee" />
      <p>Oops, Page not found</p>
    </div>
  );
};

export default Page_404;
