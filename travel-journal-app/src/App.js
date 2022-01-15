import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Data from "./components/data/Data";

function App() {
  const dataInputtedMainComponent = Data.map((singleObj) => {
    return <Main key={singleObj.id} {...singleObj} />;
  });

  return (
    <>
      <Header />
      {dataInputtedMainComponent}
    </>
  );
}

export default App;
