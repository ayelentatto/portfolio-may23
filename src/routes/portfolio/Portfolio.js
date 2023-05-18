import Projects from "./Projects";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";

const Portfolio = () => {
  document.title = "Portfolio | Ayelén Tatto";
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
    </article>
  );
};

export default Portfolio;
