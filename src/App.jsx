import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import languages from "./assets/languages";
import { useState } from "react";

function App() {
  const [cardActive, setCardActive] = useState(null);

  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <Header />
          <Main languages={languages} />
        </div>
      </div>
    </>
  );
}

export default App;
