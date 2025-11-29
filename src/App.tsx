import FloatingLines from "./FloatingLines";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded bg-white bg-opacity-75 text-gray-800 z-10 text-3xl font-bold">
          Welcome
        </h1>

        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
    </>
  );
}

export default App;
