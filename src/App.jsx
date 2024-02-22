import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import GaleryComponent from "./components/GaleryComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3x1 md:text-4xl lg:text-5xl font-bold mb-20">
          Astronomy Picture of the Day
        </h1>
        <GaleryComponent />
      </div>
      {/* <div class="bg-blue-500 md:bg-green-500 lg:bg-red-500 xl:bg-yellow-500 w-24 h-24"></div> */}
    </>
  );
}

export default App;
