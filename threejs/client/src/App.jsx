import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
function App() {
  return (
    <main>
      <h1 className="app transition-all ease-in">
        <Home/>
        <Customizer/>
        <Canvas/>
      </h1>
    </main>
  )
}

export default App
