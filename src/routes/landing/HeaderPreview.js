import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm  <em className="pink-text">Ayelén</em>,
        <br></br>FullStack Developer
      </h1>
      <p className="gray-text p-tag">Welcome to my personal website</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
