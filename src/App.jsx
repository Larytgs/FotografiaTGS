//Componente PAI
import "./App.css";
import Header from "./components/Header/Header";
import Beach from "./components/pages/Beach";
import Food from "./components/pages/Food";
import Animals from "./components/pages/Animals";
import Moments from "./components/pages/Moments";

function App() {
  return (
    <>
      <Header></Header>
      <Beach></Beach>
      <Food></Food>
      <Animals></Animals>
      <Moments></Moments>
    </>
  );
}

export default App;
