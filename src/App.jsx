import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import languages from "./assets/languages";

function App() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <Header />
          <Main languages={languages} />
        </div>
      </div>
    </>
  );
}

export default App;
