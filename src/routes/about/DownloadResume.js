import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/CV_AYELEN_TATTO.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="CV_AYELEN_TATTO">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
