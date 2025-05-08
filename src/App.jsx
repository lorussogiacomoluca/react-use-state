import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
