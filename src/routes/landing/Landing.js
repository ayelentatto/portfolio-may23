import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";
import ScrollButton from "../../components/ScrollButton";

const Mainpage = () => {
  document.title = "Ayelén Tatto | Personal Portfolio";
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
    </article>
  );
};

export default Mainpage;
