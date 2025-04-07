

import "./App.css";
import HomePage from "./component/homePage";
import HomePageScroll from "./component/homePageScroll";
import CursorTrail from "./component/CursorTrail"; // ✅ Import

function App() {
  return (
    <div id="container">
      <CursorTrail /> {/* 👈 Stylish trailing cursor */}
      <HomePage />
      <HomePageScroll />
    </div>
  );
}

export default App;
