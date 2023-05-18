import PizzaTime from "../assets/images/portfolio/PizzaTime.jpeg";
import TravelWithCatherine from "../assets/images/portfolio/TravelWithCatherine.png";
import GuessMyNumber from "../assets/images/portfolio/GuessMyNumber.jpeg";
import Forkify from "../assets/images/portfolio/Forkify.jpeg";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";
import FrontendMentorSolutions from "../assets/images/portfolio/FrontendMentorSolutions.jpeg";

const ProjectsPreviewData = [
  {
    id: "bingo",
    img: PizzaTime,
    name: "Bingo from scratch",
    stack: ["< React.js />", "< CSS3 />", "< Chackra UI />"],
    src: "",
    source: "https://github.com/ayelentatto/bingo-with-react",
    description:
      "Bingo from scatch is a project that I decided to develop from scratch and alone, to practice React logic and the Chackea UI library.",
  },
  {
    id: "e-commerce",
    img: RestCountries,
    name: "E-Commerce",
    stack: ["< HTML />", "< CSS3 />", "< JavaScript />", "< Bootstrap /> " ] ,
    src: "",//url del proyecto
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "Agregué funcionalidad a un sitio web e-commerce fictisio usando JavaScript en 7 sprints:, hice fetch a apis para obtener productos(id, nombre, detalles, costo, cantidad, productos relacionados), y reseñas de estos productos. Creé una página y en ella un carrito de compras, con la lista de los productos en mi carrito y sus respectivos costos según la cantidad(modificable desde la tabla). Creé una página de inicio de sesion fictisio con validación de formularios.",
  },
  {
    id: "guess-my-number",
    img: GuessMyNumber,
    name: "Guess My Number",
    stack: ["<HTML5 />", "< CSS3 />", "< Vanilla JS />"],
    src: "https://guess-my-number-now.vercel.app/",
    source: "https://github.com/catherineisonline/guess-my-number",
    description:
      "This JavaScript number guessing game project's main goal is to code a game where the user must guess a randomly generated number from 1 to 20. Depending on the number input, the user receives different messages until they guess the secret number.",
  },
];

const ProjectsData = [
  {
    id: "bingo",
    img: PizzaTime,
    name: "Bingo from scratch",
    stack: ["< React.js />", "< CSS3 />", "< Chackra UI />"],
    src: "",
    source: "https://github.com/ayelentatto/bingo-with-react",
    description:
      "Bingo from scatch is a project that I decided to develop from scratch and alone, to practice React logic and the Chackea UI library.",
  },
  {
    id: "e-commerce",
    img: RestCountries,
    name: "E-Commerce",
    stack: ["< HTML />", "< CSS3 />", "< JavaScript />", "< Bootstrap /> " ] ,
    src: "",//url del proyecto
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "Agregué funcionalidad a un sitio web e-commerce fictisio usando JavaScript en 7 sprints:, hice fetch a apis para obtener productos(id, nombre, detalles, costo, cantidad, productos relacionados), y reseñas de estos productos. Creé una página y en ella un carrito de compras, con la lista de los productos en mi carrito y sus respectivos costos según la cantidad(modificable desde la tabla). Creé una página de inicio de sesion fictisio con validación de formularios.",
  },
  {
    id: "travel-with-catherine",
    img: TravelWithCatherine,
    name: "Travel with Catherine",
    stack: ["< React.js />", "< TypeScript />", "< Tailwind />"],
    src: "https://catherineisonline.github.io/travel-with-catherine/",
    source: "https://github.com/catherineisonline/travel-with-catherine",
    description:
      "Travel with Catherine, a simple photography portfolio to show off some of my photography and code! Another great project to practice React and Tailwind.",
  },
];

export { ProjectsData, ProjectsPreviewData };
