import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Whatsap from "../../assets/images/socials/whatsap.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/ayelen-tatto32905/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/ayelentatto"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="wa.link/75iote"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Whatsap} alt="whatsapp" />
      </a>
    </section>
  );
};

export default NavigationSocials;
