import { NavBar } from "./components/Navbar";
import Home from "./components/pages/Home";
import New from "./components/pages/New";
import Research from "./components/pages/research";
import Sell from "./components/pages/Sell";
import Used from "./components/pages/used";

const App = () => {
  let dynamicComponent;
  switch (window.location.pathname) {
    case "/":
      dynamicComponent = <Home />;
      break;
    case "/new":
      dynamicComponent = <New />;
      break;
    case "/research":
      dynamicComponent = <Research />;
      break;
    case "/used":
      dynamicComponent = <Used />;
      break;
    case "/sell":
      dynamicComponent = <Sell />;
      break;
    default:
      dynamicComponent = null;
  }

  return (
    <>
      <NavBar />
      {dynamicComponent}
    </>
  );
};

export default App;
