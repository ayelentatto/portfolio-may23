import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  document.title = "About | Ayelén Tatto";
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <ScrollButton />
    </article>
  );
};

export default About;
