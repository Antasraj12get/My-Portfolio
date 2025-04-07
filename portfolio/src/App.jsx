

import "./App.css";
import HomePage from "./component/homePage";
import HomePageScroll from "./component/homePageScroll";
import CursorTrail from "./component/CursorTrail"; // ✅ Import
import FullAbout from "./component/FullAbout";

function App() {
  return (
    <div id="container">
      <CursorTrail /> 
      <HomePage />
      <HomePageScroll />
      {/* <FullAbout/> */}
    </div>
  );
}

export default App;
